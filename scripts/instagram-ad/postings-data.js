// 대타공고 홍보 이미지(postings.html) 공용 데이터. 작성자 이름·연락처·상세 주소는 넣지 않습니다
const POSTS=[
  {genre:'방송댄스', title:'초등 방송댄스 수업 대강 구해요', date:'1/12 ~ 1/21', dow:'', time:'16:30~19:30', where:'경기 하남시', pay:'시급 4만원'},
  {genre:'발레', title:'12/24 발레 대타 구합니다', date:'12/24', dow:'목', time:'16:20~21:20', where:'서울 강남구', pay:'시급 3만원'},
  {genre:'발레', title:'12/24 성인발레 대타 강사 구합니다', date:'12/24', dow:'목', time:'19:30~20:50', where:'경기 고양시', pay:'건당 5만원'},
].map(p=>({...p, when:`${p.date}${p.dow?`(${p.dow})`:''} ${p.time}`}));
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
