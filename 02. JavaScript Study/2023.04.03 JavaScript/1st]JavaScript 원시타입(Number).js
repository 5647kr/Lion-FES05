console.log("----------number 1----------");

let n1 = 10000;
let n2 = 10.123123;
let n3 = 31;
let n4 = 1001;
let n5 = 1111;

console.log(parseInt(n1));
console.log(parseInt(n2)); // 소숫점이 없어짐 == ~~n2
console.log(parseInt(n4, 2)); // 2진법으로 된 숫자를 10진법으로 바꾸는 것이다.
console.log(parseInt(n4, 8)); // 8진법으로 된 숫자를 10진법으로 바꾸는 것이다.
console.log(parseInt(n4, 10)); // 10진법으로 된 숫자를 10진법으로 바꾸는 것이다.

console.log(n2.toFixed(3)); // 소숫점 몇자리만 가지고 간다. v****

// 31을 2진수로 바꾸면
// 31과 가까운 2의 승수는 32
// 32는 100000

