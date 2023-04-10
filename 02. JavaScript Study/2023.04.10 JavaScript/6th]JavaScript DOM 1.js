console.log("----------실습 해설 1----------");

const canvas = document.querySelector(".canvas");
const btnRed = document.querySelector(".btn-red");
const btnyellow = document.querySelector(".btn-yellow");
const btngreen = document.querySelector(".btn-green");

btnRed.addEventListener("click", () => {
  canvas.classList.remove("red", "yellow", "green")
  canvas.classList.add("red");
})
btnyellow.addEventListener("click", () => {
  canvas.classList.remove("red", "yellow", "green")
  canvas.classList.add("yellow");
})
btngreen.addEventListener("click", () => {
  canvas.classList.remove("red", "yellow", "green")
  canvas.classList.add("green");
})

console.log("----------실습 해설 2----------");

const btns = document.querySelectorAll("button[class^='btn']");

btns.forEach((item) => {
  item.addEventListener('click', () => {
    canvas.classList.remove('yellow', 'red', 'green');
    if (item.classList.contains("btn-red")) {
      canvas.classList.add('red');
    } else if (item.classList.contains("btn-yellow")) {
      canvas.classList.add('yellow');
    } else {
      canvas.classList.add('green');
    }
  });
})
