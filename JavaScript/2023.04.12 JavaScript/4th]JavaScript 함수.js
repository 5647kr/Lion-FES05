// 참고자료 : https://hanamon.kr javascript-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85%EC%9D%B4%EB%9E%80-hoisting/
// JS의 모든 선언은 호이스팅(선언이 먼저 메모리에 저장)이 일어납니다.
// 그러나 let, const, class 이용한 선언문은 호이스팅이 되었지만 안된 것처럼 동작
// 이러한 현상은 일시적 사각지대(Temporal Dead Zone)에 빠지기 때문
// 중요한 포인트는 그렇다하여 호이스팅이 안된 것은 아니라는 것!
// 오류가 나는 이유는 var 키워드는 선언과 함께 undefined로 초기화
// let과 const는 초기화 되지 않는 상태로 선언만 메모리 저장

console.log("----------호이스팅 1----------");
// 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미한다.
// 스코프의 최상단으로 끌어올려진 것 같은 현상

let num1 = 1;
{
  // 일시적 사각지대
  console.log(num1);
  // let num1 = 2; error가 난다.
}

console.log("----------호이스팅 2----------");

let a = 10;
if(true) {
  let a = 20;
  if(true) {
    // let a = 30;
    console.log(a);
    // let a = 40; error 
  }
}

console.log("----------호이스팅 3----------");

console.log(add1(10, 20)); // 30
console.log(add2(10, 20)); // 30
console.log(mul1); // undefined

// console.log(mul1(10, 20)); // not a function
// console.log(mul2); // Cannot access 'mul2' before initialization
// console.log(mul2(10, 20)); // 위와 같은 애러
// console.log(mul3) // mul3 is not defined, 호이스팅이 안되었기 때문
// console.log(test);
// console.log(test2);

function add1(x, y) {
  return x + y;
}

function add2(x, y) {
  return x + y;
}

console.log("----------호이스팅 4----------");

var mul1 = function (a, b) {
  return a * b;
};

let mul2 = function (a, b) {
  return a * b;
};

// let test = 100;
// var test2 = 100;

console.log("----------함수----------");
// 주의사항

// 익명 즉시 실행 함수
(function () {
  let a = 1;
  let b = 2;
  return a + b;
}());

// 기명 즉시 실행 함수
(function foo() {
  let a = 3;
  let b = 5;
  return a * b;
}());

// 이런 함수가 어디서 쓰일까요?
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리

// 모든 요소들이 로드된 이후에 실행, 함수는 1개만 실행 가능
// window.onload = function(){}
// $(document).ready() // 위와 같은 기능을 하는 jquery 문법