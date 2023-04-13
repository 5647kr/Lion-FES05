console.log("----------함수 1----------");
// roro기법은 어떻게 사용하고 원리는 무엇인가요?
function 함수1({
  회원정보 = "Gold",
  글쓰기 = true,
  글읽기 = true,
  채널관리 = true,
  백업 = "1주일 이내 가능",
  소셜로그인여부 = true
}) {
  console.log("...함수1 기능...");
  console.log("회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부");
}
함수1({
  회원정보: "Silver",
  소셜로그인여부: false, // 순서와 값 변경
  백업: "3일 이내 가능" // 중간에 생략된 값 있음
})

console.log("----------함수 2----------");
// roro기법 원리
let one;
let two;
let three;
let four = {one, two, three};
console.log(four);
// 변수 값을 object안에 넣으면 변수명이 key가 되고 변수값이 object의 value가 된다.

let {a, b, c} = {a: 10, b: 20, c: 30};
console.log(a, b, c);
let {d, e, f} = {e: 20, d: 10, f: 30};
console.log(d, e, f);
/*
let {g:10, h, i} = {h: 20, g: 10, i: 30}; //!error
console.log(g, h, i);
*/
let {j=10, k, l} = {k: 20, l: 30}; 
console.log(j, k, l);

console.log("----------함수 3----------");
// 심화
function 함수2({
  a = 1,
  b = 2,
  c = 3
} = {}) {
  console.log(a, b, c);
  return a + b + c
}
console.log(함수2());
console.log(함수2({}));
console.log(함수2({b: 100}));

console.log("----------함수 4----------");

let {m = 1, n = 2} = {m: 100};
console.log(m);

console.log("----------함수 5----------");

let {o = 1, p = 2} = {};
console.log(o);

console.log("----------함수 6----------");
/* 
let {q = 1, r = 2} = undefined; //!error
console.log(q);
*/

console.log("----------재귀 함수 1(*)----------");
// 고급으로 가면 중요해진다.
/* 
재귀함수 => 내가 나를 호출하는 것
반복문으로 반복할 수 있는것은 재귀함수로 만들수 있다
재귀함수로 만들 수 있는 것은 반복문으로도 만들 수 있다.
실무에서는 반복문을 재귀함수는 사용하지 않는다.
*/
//factorial
result1 = 1;
for(let i = 1; i < 6; i++) {
  result1 *= i
}
console.log(result1);

console.log("----------재귀 함수 2(*)----------");
//factorial
function factorial1(n) {
  if(n <= 1) {
    return n
  }
  return n * factorial1(n-1); // factorial1이 factorial1을 호출하여 재귀함수이다.
}
console.log(factorial1(4));
/*
진행과정            return n       최종값
factorial(5)   5 * factorial(4)    5 * 24 == 120      
factorial(4)   4 * factorial(3)    4 * 6 == 24  
factorial(3)   3 * factorial(2)    3 * 2 == 6  
factorial(2)   2 * factorial(1)    2 * 1 == 2  
factorial(1)   1 
*/

console.log("----------재귀 함수 3(*)----------");
// 누적합(비효율적인 코드이다)
result2 = 0;
for(let i = 1; i < 1001; i++) {
  result2 += i
}
console.log(result2);

console.log("----------재귀 함수 4(*)----------");
// 누적합(비효율적인 코드이다)
function sigma1(n) {
  if(n <= 1) {
    return n
  }
  return n + sigma1(n-1)
}
console.log(sigma1(1000));

console.log("----------재귀 함수 5(*)----------");
// 누적합(효율적인 코드이다)
const num1 = 1000;
console.log(num1 * (num1 + 1) / 2);

console.log("----------재귀 함수 5(*)----------");
// 문자열 뒤집기
