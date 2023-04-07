console.log("----------형 변환----------");
// (num => string / string => num)

let hojun = 10;
console.log(hojun.toString());

console.log(typeof "10");
console.log(typeof +"10"); // 실무팁
console.log(typeof Number("10")); // 권하지 않는다.
console.log(typeof parseInt("10")); // 권함
console.log(typeof parseFloat("10.1"));