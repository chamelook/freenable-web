import Image from "next/image";
import logo from "@/public/images/freenable-logo.png";

export function BrandLogo() {
  return <Image className="brand-logo" src={logo} alt="freenable" unoptimized />;
}
