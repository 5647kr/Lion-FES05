console.log("----------함수 1----------");

// 읽어볼만한 문헌: https://ko.javascript.info/function-basics
/* 
함수를 사용하는 이유
1. 재사용성이 높아진다.
2. 유지보수가 용이하다.
3. 구조파악이 용이하다.
*/

// return, console.log 를 헷갈려한다.

function hello(para) {
  console.log(para);
  console.log("hello");
  return 100
}
console.log(hello(10));

console.log("----------함수 2----------");

let x = console.log("hello");
console.log(x);

console.log("----------함수 3----------");

// 함수, 메소드(메소드는 클래스 안에서 사용되는 함수)
// .을 찍어 접근할 수 있는 함수는 메서드이다.

// 함수를 호출할 수 있는 이름은 결국 변수이다.

let a = console.log;
a("hello world1");

console.log("----------함수 4----------");

// 3개 모두 같은코드이다.
function hello1() {
  console.log("hello world2");
}

function hello2() {
  console.log("hello world2");
  return
}

function hello3() {
  console.log("hello world2");
  return undefined
}

let b = hello1();
console.log(b);
let c = hello2();
console.log(c);
let d = hello3();
console.log(d);

console.log("----------함수 5----------");

function hello4() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
  return
  console.log("hello");
  console.log("hello");
  console.log("hello");
}
console.log(hello4());

function hello5() {
  if(true) {
    if(false) {
      if(true) {
        return
      }
    }
  }
  console.log("hello");
}

console.log("----------함수 6----------");

// return을 하더라도 1회 반복만 종료되는것이지 전체반복이 종료되는것은 아니다.

const e = [10, 20, 30, 40];
e.forEach(el => {
  console.log(el);
  return
  console.log("world");
})

console.log("----------함수 7----------");

function 함수1(a, b, c) {
  return a + b + c
}
console.log(함수1(10, 20, 30, 40)); // error가 발생하지 않는다.
console.log(함수1(10, 20)); // error가 발생하지 않는다.

console.log("----------함수 8----------");

function 함수2(a=10, b=20, c=30){
  return a + b + c
}
console.log(함수2(1, 1)); 

console.log("----------함수 9----------");

// a와 c에 들어갈것 같지만 a와 b에 들어간다.
function 함수3(a=10, b=20, c=30){
  return a + b + c
}
console.log(함수3(a = 1, c = 1)); 

console.log("----------함수 10----------");

// 식별이슈가 있을경우 object로 넘기는데 이를 roro기법이라 한다.
function runPython(user, time, code, lv) {
  
}
console.log(runPython("leehojun", 100, "function...", 3));

function runPython({user, time, code, lv}) {
  
}
runPython({
  user: "leehojun",
  time: 100,
  code: "function...",
  lv: 3
})
// 기본값 설정
function runPython({
  user= "",
  time= 0,
  code= "",
  lv= 0
}) {}

console.log("----------함수 11----------");

// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics

function 함수(x, y) {
  return x + y
}
// 위 함수를 화살표 함수로 작성하면 아래와 같습니다.
let 함수4 = (x, y) => x + y

// 만악 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있습니다.
let 함수5 = x => {
  return x + 10
}

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 됩니다.
let 함수6 = x => x + 10

let 결과 = 함수6(2);

console.log(결과);

console.log("----------함수 12----------");

(function() {
  console.log('이 함수는 만들어지자마자 바로 실행됩니다!');
})();