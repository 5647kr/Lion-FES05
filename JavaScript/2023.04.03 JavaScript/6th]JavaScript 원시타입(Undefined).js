console.log("==========undefined==========");
// 변수값이 할당되지 않았을 때 나오는 값이다.

let a;
console.log(a);

if(typeof a === "undefined") {
  console.log("a에 아무것도 할당되지 않았습니다.1");
}

if(a) { //a에 값이 있으면(참인 경우) 블록안 코드를 실행한다.
  console.log("a에 아무것도 할당되지 않았습니다.2");
}

if(!a) {
  console.log("a에 아무것도 할당되지 않았습니다.3");
}