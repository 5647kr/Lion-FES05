console.log("----------undefined----------");
// 변수값이 할당되지 않았을 때 나오는 값이다.

let a;
console.log(a);

if(typeof a === "undefined") {
  console.log("b에 아무것도 할당되지 않았습니다.");
}

if(!a) {
  console.log("b에 아무것도 할당되지 않았습니다.");
}