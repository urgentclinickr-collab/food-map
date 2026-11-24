// 어전트의원 근처 맛집 목록 — 웹페이지와 인쇄물, 체크 페이지가 함께 쓰는 원본 데이터
// 수정할 때는 이 파일만 고치면 됩니다. (GitHub에 올린 github/data.js 도 같은 내용으로 맞춰 주세요)
window.CLINIC = {
  name: "어전트의원",
  address: "서울 영등포구 국회대로54길 10 아크로타워스퀘어 상가 13동 304호",
  mapQuery: "어전트의원 영등포",
  lat: 37.52293, lng: 126.90609
};

// 거리 그룹
window.GROUPS = [
  { id: "same", label: "같은 건물이에요", note: "의원과 같은 아크로타워스퀘어 13동" },
  { id: "near", label: "가까워요",       note: "의원에서 금방 가요" },
  { id: "mid",  label: "꽤 걸어야 해요", note: "조금 걸을 각오하고 가세요" },
  { id: "far",  label: "많이 걸어요",     note: "시간 여유 있을 때 가세요" }
];

// 번호는 이 목록 순서대로 자동으로 매겨집니다. 위 GROUPS 순서대로 적어 주세요.
// meal: "lunch"(점심만) / "dinner"(저녁만) / "both"(점심·저녁), 모르면 비워 두기
// bt(브레이크타임): true(있음) / false(없음), 모르면 비워 두기
// franchise: true 이면 이름 옆에 (프랜차이즈) 표시
// tags(평가): "호불호" / "추천" / "강추" 중 하나, 그리고 "정갈해요" "푸짐해요" "가성비" 중 해당하는 것
// lat, lng: 지도 핀 위치 (카카오맵 위치 기준으로 계산한 값)
// query: 네이버지도에서 찾을 때 쓰는 이름 (실제 가게 이름이 다를 때)
window.PLACES = [
  { name: "어메이징키친",     group: "same", cat: "한식뷔페", meal: "lunch", bt: true,  tags: ["추천", "푸짐해요", "가성비"], menu: [], memo: "같은 건물 지하 1층, 빠르고 간단한 식사 가능함. 라면, 계란후라이 셀프바", query: "어메이징키친 아크로타워스퀘어", lat: 37.52284, lng: 126.90597 },
  { name: "팡앤팡",           group: "same", cat: "빵",       meal: "both",  bt: false, tags: ["강추"], menu: [], memo: "빵 맛집. 모든 빵이 맛있어요.", query: "팡앤팡 아크로타워스퀘어", lat: 37.52302, lng: 126.90622 },
  { name: "일출옥",           group: "near", cat: "한식",     meal: "both",  bt: true,  tags: ["추천", "정갈해요"], menu: ["콩나물국밥", "아보카도명란비빔밥", "굴국밥"], memo: "콩나물국밥, 아보카도 명란 비빔밥, 갈치속젓, 명란 토핑 추천", query: "일출옥 영등포점", lat: 37.52356, lng: 126.90561 },
  { name: "구름추어탕",       group: "near", franchise: true, cat: "한식", meal: "both", bt: false, tags: ["추천", "푸짐해요", "가성비"], menu: ["추어탕", "뚝배기불고기"], memo: "체인점이지만 맛있어요. 추어탕, 뚝배기불고기", query: "구름산추어탕 영등포점", lat: 37.52350, lng: 126.90576 },
  { name: "김재운초밥사랑",   group: "near", cat: "일식",     meal: "both",  bt: false, tags: ["추천", "푸짐해요", "가성비"], menu: ["런치세트", "초밥세트"], memo: "런치세트 가성비에요. 초밥세트에도 우동이 나와요", query: "김재운초밥사랑 영등포직영점", lat: 37.52338, lng: 126.90576 },
  { name: "돼슐랭",           group: "near", cat: "한식",     meal: "both",  bt: true,  tags: ["추천", "푸짐해요", "가성비"], menu: ["김치찌개"], memo: "점심에만 파는 김치찌개 괜찮아요.", query: "돼슐랭 영등포시장역점", lat: 37.52332, lng: 126.90561 },
  { name: "호미가",           group: "near", cat: "아시안",   meal: "both",  bt: true, tags: ["강추", "푸짐해요", "가성비"], menu: ["팟타이", "볶음밥", "꿔바로우", "짜죠"], memo: "동남아 맛집. 꼭 팟타이와 볶음밥을 드세요. 꿔바로우와 짜죠도 괜찮아요.", query: "호미가 영등포", lat: 37.52388, lng: 126.90618 },
  { name: "고향엄마손생바지락칼국수", group: "near", franchise: true, cat: "한식", meal: "both", bt: true, tags: ["추천", "푸짐해요", "가성비"], menu: ["바지락칼국수", "꼬막비빔밥"], memo: "체인점이지만 바지락칼국수와 꼬막비빔밥은 일품이에요.", query: "고향엄마손생바지락칼국수 서울영등포점", lat: 37.52379, lng: 126.90670 },
  { name: "란궁마라",         group: "near", cat: "중식",     meal: "both",  bt: false, tags: ["추천", "가성비"], menu: ["마라탕", "마라샹궈"], memo: "마라탕 좋아하시면 맛집입니다.", query: "란궁마라탕 영등포점", lat: 37.52338, lng: 126.90546 },
  { name: "임태희커피랩",     group: "near", cat: "카페",     meal: "lunch", bt: false, tags: ["강추"], menu: ["커피"], memo: "원두 맛집. 같은 단지 상가 8동 1층, 오후 5시까지 영업", query: "임태희커피랩", lat: 37.52363, lng: 126.90730 },
  { name: "영등포장어",       group: "near", cat: "한식",     meal: "both",  bt: false, tags: ["강추", "정갈해요", "푸짐해요", "가성비"], menu: ["민물장어정식", "소갈비살정식"], memo: "점심정식 추천해요. 민물 장어인데 흙냄새 안나요. 소갈비살 정식도 괜찮습니다. (2만원)", query: "영등포장어", lat: 37.52453, lng: 126.90789 },
  { name: "본죽 / 도시락",    group: "near", franchise: true, cat: "죽·도시락", meal: "both", bt: false, tags: ["정갈해요", "푸짐해요", "가성비"], menu: [], memo: "죽은 전국 어디서나 같은 맛을 유지하는 곳", query: "본죽&비빔밥cafe 영등포시장역점", lat: 37.52350, lng: 126.90546 },
  { name: "희락돈까스",       group: "near", cat: "돈까스",   meal: "both",  bt: false, tags: ["추천", "푸짐해요", "가성비"], menu: ["경양식 돈까스", "비빔밥", "국수류"], memo: "기사식당 느낌, 경양식 돈까스. 양이 매우 많아요. 다른 것도 맛있으니 돈까스는 한 개 + 식사 조합추천", query: "희락돈까스 영등포", lat: 37.52241, lng: 126.90622 },
  { name: "문래돼지불백",     group: "near", cat: "한식",     meal: "both",  bt: true, tags: ["추천", "푸짐해요", "가성비"], menu: ["돼지불백"], memo: "기사식당 느낌, 유명한 집입니다. 메뉴는 돼지불백 하나.", query: "문래돼지불백 영등포직영점", lat: 37.52321, lng: 126.90487 },
  { name: "목포식당",         group: "near", cat: "한식",     meal: "both",  bt: true,  tags: ["강추", "푸짐해요"], menu: ["생선조림", "뚝불", "김치찌개"], memo: "남도식 백반. 들어서는 순간 맛집임을 온 몸으로 알 수 있어요. 생선조림, 뚝불, 김치찌개 다 좋습니다.", query: "목포식당 영등포동6가", lat: 37.52233, lng: 126.90455 },
  { name: "스마일 꽈배기",    group: "near", cat: "간식",     meal: "both",  bt: false, tags: ["강추"], menu: ["찹쌀볼", "꽈배기", "게살고로케"], memo: "찹쌀볼 강추, 꽈배기, 게살 고로케", query: "스마일명품찹쌀꽈배기 영등포", lat: 37.52250, lng: 126.90598 },
  { name: "빨호 떡볶이",      group: "near", cat: "분식",     meal: "both",  bt: false, tags: ["추천"], menu: ["김밥", "떡볶이"], memo: "김밥 맛집, 떡볶이도 맛있어요.", query: "빨호떡볶이 영등포점", lat: 37.52230, lng: 126.90578 },
  { name: "예가원 한정식",    group: "mid",  cat: "한정식",   meal: "both",  bt: true, tags: ["강추", "푸짐해요", "가성비"], menu: ["2인세트", "생선구이", "제육"], memo: "푸짐한 한정식 한 상. 생선구이·제육 맛집, 혼자 가서 단품도 좋아요. (2인 3.5만)", query: "예가원 영등포", lat: 37.51885, lng: 126.90454 },
  { name: "동순각",           group: "mid",  cat: "중식",     meal: "both",  bt: false, tags: ["추천", "가성비"], menu: ["케찹탕수육", "삼선간짜장"], memo: "역사 깊은 중식당. 옛날식 케찹탕수육과 삼선간짜장 추천", query: "동순각 영등포", lat: 37.52073, lng: 126.90870 },
  { name: "예산소머리국밥",   group: "mid",  cat: "한식",     meal: "both",  bt: false, tags: ["강추", "푸짐해요", "가성비"], menu: ["소머리국밥"], memo: "영등포 시장 안, 전국구 급 소머리 국밥 맛집 (순대국밥은 비추) !!트리플 강추!!", query: "예산가마솥국밥 영등포", lat: 37.51990, lng: 126.90742 },
  { name: "영등포아바이순대", group: "mid",  cat: "한식",     meal: "both",  bt: false, tags: ["강추", "푸짐해요", "가성비"], menu: ["정식"], memo: "영등포시장 안, 정식으로 드세요!", query: "영등포아바이순대", lat: 37.51985, lng: 126.90762 },
  { name: "산촌신쭈꾸미",     group: "mid",  franchise: true, cat: "한식", meal: "both", bt: false, tags: ["추천", "푸짐해요", "가성비"], menu: ["쭈꾸미정식", "쭈불정식", "제육"], memo: "체인이지만 불 향 강한 쭈꾸미와 다양한 반찬. 반찬, 계란후라이 셀프바.", query: "산촌신쭈꾸미 영등포점", lat: 37.52050, lng: 126.90275 },
  { name: "서민준 밀밭",      group: "mid",  cat: "한식",     meal: "both",  bt: false, tags: ["추천", "정갈해요"], menu: ["바지락칼국수", "보리비빔밥"], memo: "바지락 칼국수와 늘 함께 주는 보리 비빔밥 맛집", query: "서민준밀밭 영등포", lat: 37.52012, lng: 126.90278 },
  { name: "송죽장",           group: "far",  cat: "중식",     meal: "both",  bt: true, tags: ["강추"], menu: ["어향가지", "삼선짬뽕"], memo: "역사 깊은 화교 중식당. 어향가지, 삼선짬뽕 추천", query: "송죽장 영등포", lat: 37.51825, lng: 126.90470 }
];
window.PLACES.forEach(function (p, i) { p.no = i + 1; });

// 가격대 (1인 기준): p1 1만원 이하 / p2 1~1.5만원 / p3 1.5~2만원 / p4 2만원 이상
window.PRICE_LABEL = { p1: "1만원 이하", p2: "1~1.5만원", p3: "1.5~2만원", p4: "2만원 이상" };
window.PRICES = {
  "어메이징키친": "p1", "팡앤팡": "p1", "일출옥": "p2", "구름추어탕": "p2", "김재운초밥사랑": "p2",
  "돼슐랭": "p2", "호미가": "p2", "고향엄마손생바지락칼국수": "p2", "란궁마라": "p2", "영등포장어": "p4",
  "본죽 / 도시락": "p2", "희락돈까스": "p1", "문래돼지불백": "p2", "목포식당": "p2", "스마일 꽈배기": "p1",
  "빨호 떡볶이": "p1", "예가원 한정식": "p3", "동순각": "p1", "예산소머리국밥": "p2", "영등포아바이순대": "p2",
  "산촌신쭈꾸미": "p2", "서민준 밀밭": "p2", "송죽장": "p2", "임태희커피랩": "p1"
};
window.PLACES.forEach(function (p) { if (!p.price && window.PRICES[p.name]) p.price = window.PRICES[p.name]; });

window.MEAL_LABEL = { lunch: "점심만", dinner: "저녁만", both: "점심·저녁" };
window.LEVELS = ["강추", "추천", "호불호"];
window.levelOf = function (p) { var t = p.tags || []; for (var i = 0; i < window.LEVELS.length; i++) if (t.indexOf(window.LEVELS[i]) >= 0) return window.LEVELS[i]; return ""; };
window.featuresOf = function (p) { return (p.tags || []).filter(function (t) { return window.LEVELS.indexOf(t) < 0; }); };

window.mapLink = function (p) {
  return "https://map.naver.com/p/search/" + encodeURIComponent(p.query || (p.name + " 영등포"));
};
