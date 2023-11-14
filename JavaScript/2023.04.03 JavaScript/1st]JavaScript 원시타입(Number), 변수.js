console.log("==========number 1==========");

let n1 = 10000;
let n2 = 10.123123;
let n3 = 31;
let n4 = 1001;
let n5 = 1111;

console.log(parseInt(n1));
console.log(parseInt(n2)); // 소숫점이 없어짐 === ~~n2
console.log(parseInt(n4, 2)); // 2진법으로 된 숫자를 10진법으로 바꾸는 것이다.
console.log(parseInt(n4, 8)); // 8진법으로 된 숫자를 10진법으로 바꾸는 것이다.
console.log(parseInt(n4, 10)); // 10진법으로 된 숫자를 10진법으로 바꾸는 것이다.

console.log(n2.toFixed(3)); //* 소숫점 몇자리만 가지고 간다.

// 31을 2진수로 바꾸면
// 31과 가까운 2의 승수는 32
// 32는 100000

console.log("==========자주 실수 하는 변수==========");

var a = 10;
var b = 20;
a = a + 10;

let c = 10;
let d = 20;

var e = 100;
console.log(a);
console.log(b);

// let a = 100; 재정의를 허락하지 않는다.
console.log(c);
// script는 다른 태그에 있어도 변수를 공유하여 var로 선언할 경우 덮어써서 코드를 작성하는데 방해가 된다.