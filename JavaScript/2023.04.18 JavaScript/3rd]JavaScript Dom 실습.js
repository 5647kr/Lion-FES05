// 1. button과 ul li를 선언한다.
// 2. button을 먼저 선택해야한다.
// 3. button에 클릭 이벤트를 추가한다.

const btnsel = document.querySelector(".btn-select");
const list = document.querySelector(".list");

btnsel.addEventListener("click", () => {
  btnsel.classList.toggle("on")
})
