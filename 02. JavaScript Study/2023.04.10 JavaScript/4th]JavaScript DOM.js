console.log("----------queryselectior----------");

const container = document.getElementById("container");
console.log(container.querySelector("li:nth-child(3)")); //css속성을 이용할 수 있다.
console.log(container.querySelector("li:last-child"));
console.log(container.querySelector(".item-second"));
// 첫번째를 반환한다.

console.log("----------queryselectiorAll----------");

console.log(container.querySelectorAll("li"));

console.log("----------HTMLCollection vs NodeList 1----------");

// 추가
console.log(container.querySelectorAll("li"));
console.log(container.getElementsByTagName("li"));

const li = document.createElement("li");
container.append(li);

console.log("----------HTMLCollection vs NodeList 2----------");

// 변경
container.querySelector(".item-second").textContent = "라조기";
container.querySelector(".item-second").classList.add("new");

console.log("----------HTMLCollection vs NodeList 3----------");

// 제거
/* 
const target = document.querySelector(".item-second");
target.remove();
*/

console.log("----------DOM제어 명령어 (이벤트 삽입)----------");

const btn1 = addEventListener("click", function () {
  console.log("hello world");
});

console.log("----------정리----------");
/* 정리
const container = document.getElementById('container');
console.log(container.getElementsByTagName('li')[0]);
console.log(container.querySelector('#container'));
console.log(container.getElementsByTagName('li'));
console.log(container.querySelectorAll('li'));

container.querySelector('.item-second').textContent = '라조기';
container.querySelector('.item-second').classList.add('new');

const target = document.querySelector('.item-second');
target.remove();


const listItem = document.createElement('li');
container.append(listItem);
*/