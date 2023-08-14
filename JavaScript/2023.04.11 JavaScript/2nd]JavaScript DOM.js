const info = document.querySelector("figcaption");
console.log(info.textContent);
console.log(info.innerText);
console.log(info.innerHTML);

console.log("----------innerHTML 오류----------");
/* 
const txt = document.querySelector("p");
const name = "<img src='x' onerror='alert(123123)'>";
txt.innerHTML = name;
*/
console.log("----------속성 제어하기----------");

// 1. 요소의 스타일을 제어하는 style 객체 사용
const target1 = document.querySelector(".p1");
const txtcolor = target1.style.color;
target1.style.color = "red";
target1.style.fontWeight = "bold";
target1.style.color = "null";

console.log("----------set attribute----------");
const target2 = document.querySelector("#mytxt");
const myimg = document.querySelector(".myimg1");
const idattr = target2.getAttribute("id");
console.log(idattr);
myimg.setAttribute("src", "https://img.wendybook.com/image_detail/img159/159599_01.jpg");

console.log("----------data 속성----------");

const target3 = document.querySelector(".myimg2");
console.log(target3.dataset);
console.log(target3.dataset.shipId);