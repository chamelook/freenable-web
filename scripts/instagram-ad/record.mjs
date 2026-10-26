// ad.html의 window.__setT(초)를 프레임마다 호출해 PNG로 캡처합니다. render-video.sh에서 실행합니다.
// 사용: node record.mjs <url> <frameDir> [fps=30] [seconds=8]
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const [url, frameDir, fps = "30", seconds = "8"] = process.argv.slice(2);
if (!url || !frameDir) {
  console.error("사용: node record.mjs <url> <frameDir> [fps] [seconds]");
  process.exit(1);
}

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORT = 9333;
const profile = mkdtempSync(join(tmpdir(), "ad-record-"));
const chrome = spawn(CHROME, [
  "--headless=new", `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`,
  "--disable-gpu", "--hide-scrollbars", "--window-size=1080,1920", "about:blank",
], { stdio: "ignore" });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function pageSocketUrl() {
  for (let i = 0; i < 50; i++) {
    try {
      const targets = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      const page = targets.find((t) => t.type === "page");
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(200);
  }
  throw new Error("Chrome 디버깅 포트에 연결하지 못했습니다");
}

try {
  const ws = new WebSocket(await pageSocketUrl());
  await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
  let seq = 0;
  const pending = new Map();
  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    pending.get(msg.id)?.(msg);
    pending.delete(msg.id);
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = ++seq;
    pending.set(id, (m) => (m.error ? reject(new Error(`${method}: ${m.error.message}`)) : resolve(m.result)));
    ws.send(JSON.stringify({ id, method, params }));
  });
  const evaluate = async (expression) => (await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true })).result.value;

  await send("Emulation.setDeviceMetricsOverride", { width: 1080, height: 1920, deviceScaleFactor: 1, mobile: false });
  await send("Page.navigate", { url });
  for (let i = 0; !(await evaluate("window.__ready === true").catch(() => false)); i++) {
    if (i > 100) throw new Error("글꼴·이미지 로딩을 기다리다 시간이 초과되었습니다");
    await sleep(100);
  }

  const total = Math.round(Number(fps) * Number(seconds));
  for (let f = 0; f < total; f++) {
    await evaluate(`__setT(${f / Number(fps)}); new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))`);
    const { data } = await send("Page.captureScreenshot", { format: "png" });
    writeFileSync(join(frameDir, `${String(f).padStart(4, "0")}.png`), Buffer.from(data, "base64"));
  }
  console.log(`frames: ${total}`);
  ws.close();
} finally {
  chrome.kill();
  await sleep(300);
  rmSync(profile, { recursive: true, force: true });
}
