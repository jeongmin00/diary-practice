// DOM이 로드된 후 실행
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM 로드 완료!");

  // 여기에 코드 작성
  const boxes = document.getElementsByClassName('box');
  for (const box of boxes) {
    console.log(box.textContent);
}
});
