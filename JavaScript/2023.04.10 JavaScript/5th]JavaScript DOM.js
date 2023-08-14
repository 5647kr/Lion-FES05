console.log("----------DOM제어 명령어 (클래스 추가)----------");

const btn1 = document.querySelector("button");
btn1.addEventListener("click", function () {
  //btn1.classList.add("blue");
  // btn1.classList.remove("blue");
  // btn1.classList.toggle("blue");
  // console.log(btn1.classList.contains("red"));
});

console.log("----------실습----------");

const background = document.querySelector(".background");
const btn2 = document.getElementsByClassName("red");
const btn3 = document.getElementsByTagName("li")[1];
const btn4 = document.querySelector("li:last-child");

btn2[0].addEventListener("click", function () {
  background.classList.remove("red", "yellow", "green");
  background.classList.add("red")
})
/* 
getElementsByClassName은 배열을 가져온다.
그래서 []를 사용해야 한다.
*/
btn3.addEventListener("click", function () {
  background.classList.remove("red", "yellow", "green");
  background.classList.add("yellow")
})
btn4.addEventListener("click", function () {
  background.classList.remove("red", "yellow", "green");
  background.classList.add("green")
})