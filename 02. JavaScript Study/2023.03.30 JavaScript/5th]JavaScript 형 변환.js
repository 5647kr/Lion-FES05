console.log("----------형 변환(다른type -> string)----------");

let hojun = 10;
console.log(typeof hojun);
console.log(typeof hojun.toString()); // 권하지 않는다.
console.log(typeof ('' + 10 + 10));
console.log('' + 10 + 10);
// 문자열로 취급이 되어 20이 아닌 1010으로 출력된다.
console.log(typeof String(10));


console.log("----------형 변환(다른type -> num)----------");

console.log(typeof parseInt(true)); // NaN
console.log(typeof parseInt(false)); // NaN
console.log(typeof Number(true)); // 1
console.log(typeof Number(false)); // 0
console.log(typeof parseFloat('10.1'));

console.log("----------형 변환(다른 type -> boolean)----------");

let hojun2 = 10;
console.log(typeof !!hojun2);
console.log(typeof Boolean(-1));
console.log(typeof Boolean(0));
console.log(typeof Boolean(0.1));
console.log(typeof !!1000);