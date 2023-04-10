console.log("----------요소 제어----------");

const myBtn = document.querySelector("button");
const myUl = document.querySelector("ul");

myBtn.addEventListener('click', function () {
  for (let i = 0; i < 5; i++) {
    const myLi = document.createElement('li');
    const myTxt = document.createTextNode(i);
    myLi.appendChild(myTxt);
    myUl.appendChild(myLi);
  }
})