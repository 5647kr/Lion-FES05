console.log("----------boolean 1----------");

let a = 5;
let b = 10;
console.log(a > b); // false

console.log("----------boolean 2----------");

// true, false값을 and, or 연산했을 경우 반환값은 true, false
let c = true;
let d = false;
console.log(c && d);

console.log("----------boolean 3----------");

// true, false가 아닌 값을 and, or 연산 했을 경우 단락회로평가를 하게 된다.
let e = "hello";
let f = "";
console.log(e && f);