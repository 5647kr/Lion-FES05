console.log("----------실습----------");
/* 
const bgcolor = document.querySelector(":root");
console.log(bgcolor);
const bgpicker = document.querySelector("#bg");


bgpicker.addEventListener("input", () => {
  bgcolor. = bgpicker.value;
})
 */

console.log("----------실습 해설----------");

const inpPicker = document.querySelectorAll(".inp-picker");
const root = document.querySelector(":root");

inpPicker.forEach((item) => {
  item.addEventListener("input", () => {
    const name = "--main-"+item.dataset.id;
    root.style.setProperty(name, item.value);
  })
})
