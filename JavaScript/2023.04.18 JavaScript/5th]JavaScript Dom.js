console.log("----------preventDefault 1----------");

const link1 = document.querySelector(".link");
link1.addEventListener("click", (event) => {
  console.log("link clicked");
  event.preventDefault();
})

console.log("----------preventDefault 2----------");

const link2 = document.querySelector(".submit");
link2.addEventListener("click", (event) => {
  console.log("button clicked");
  event.preventDefault();
})

console.log("----------preventDefault 3----------");

/* 
document.addEventListener("contextmenu", (event)) => {
  console.log("오른쪽 클릭");
  event.preventDefault();
});
*/

console.log("----------Propagation 3----------");

const link3 = document.querySelector(".submit");
link3.addEventListener("click", (event) => {
  console.log("button clicked");
  event.preventDefault();
  event.stopPropagation();
})

document.body.addEventListener("click", () => {
  console.log("event still alive");
}, true)