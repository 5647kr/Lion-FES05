console.log("----------DOM----------");

// DOM은 HTML문서의 내용을 트리형태로 구조화하여 웹페이지와 프로그래밍 언어를 연결하는 역할

console.log("----------DOM 트리에 접근----------");

console.log(document.getElementById("third-id")); 

console.log(document.getElementsByTagName("p")); // 복수형만 존재한다.

console.log(document.getElementsByClassName("forth-class"));

const element = document.getElementsByClassName("fifth-class");
console.log(element);

console.log(document.getElementsByClassName("fifth-class"));

console.log("----------DOM 트리에 접근 문제 1----------");
// 탕수육과 유산슬 접근하기(queryselector사용 금지)

console.log(document.getElementsByTagName("li")[0]);
console.log(document.getElementsByClassName("item-second")[0]);


console.log("----------DOM 트리에 접근 문제 1 해설----------");

console.log(document.getElementsByTagName("li")[0]);
console.log(document.getElementsByTagName("li")[1]);
console.log(document.getElementsByClassName("item-second")[0]);

console.log("----------DOM 트리에 접근 문제 1 해설2----------");

const container = document.getElementById("container");
console.log(container.getElementsByTagName("li")[0]);
console.log(container.getElementsByTagName("li")[1]);
console.log(container.getElementsByClassName("item-second")[0]);
// 객체로 반환받는다.