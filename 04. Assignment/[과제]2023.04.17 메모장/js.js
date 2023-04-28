const add = document.querySelector(".add-btn");
const memo = document.querySelector(".btn1");
const todo = document.querySelector(".btn2");
const calendar = document.querySelector(".btn3");

/**
 * add버튼을 누르면 +가 x로 돌아간다.
 * memo, todo, calendar가 위로 올라온다.
 * x를 누르면 다시 memo, todo, calendar가 아래로 들어간다. */

add.addEventListener("click", () => {
  add.style.rotate("25%");
})