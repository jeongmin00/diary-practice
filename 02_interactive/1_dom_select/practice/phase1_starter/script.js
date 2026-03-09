// =============================================
// Phase 1: DOM 선택 + 내용 변경
// =============================================

// 미션 ① app-title 텍스트 바꾸기
// 힌트: document.getElementById('app-title')로 선택 후 .textContent 사용
// 여기에 코드를 작성하세요 ↓
const newAppTitle = document.getElementById("app-title");
newAppTitle.textContent = "정민 할 일";

// 미션 ② app-subtitle 텍스트 바꾸기
const newAppSubtitle = document.getElementById("app-subtitle");
newAppSubtitle.textContent = "오늘도 파이팅!! 👊";

// 미션 ③ remaining-count 숫자를 3으로 바꾸기
document.getElementById("remaining-count").textContent = 3;

// 미션 ④ todo-list 요소를 콘솔에 출력하기
const boxes = document.getElementsByClassName("mission-box");
Array.from(boxes).forEach((element) => {
  console.log(element.textContent);
});

// 힌트: console.log()를 사용하세요
