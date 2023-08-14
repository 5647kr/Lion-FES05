console.log("----------insertBefore----------");

const span = document.createElement("span");
const sibling = document.getElementById("childElement");
const parentDiv = document.getElementById("parentElement");
parentDiv.insertBefore(span, sibling);

console.log("----------DOM api----------");

const myBtn = document.querySelector("button");
const myP = document.querySelector("p");
const myInput = document.querySelector("input");

myBtn.addEventListener("click", function () {
  myP.textContent = myInput.value; // myP.innerHTML = myInput.value;
})
myBtn.addEventListener("click", function () {
  myP.innerText = myInput.value; // myP.innerHTML = myInput.value;
})