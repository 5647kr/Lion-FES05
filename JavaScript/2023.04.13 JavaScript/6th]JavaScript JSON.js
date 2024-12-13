/**
 * JSON.parse(): JSON 문자열을 자바스크립트 객체로 변환한다(문자열 => 객체)
 * JSON.stringify(): 자바스크립트 객체를 JSON 문자열로 변환한다(객체 => 문자열)
 */

console.log("----------JSON 1----------");

const json1 = '{"result":true, "count":42}';
const obj1 = JSON.parse(json1);
console.log(obj1)

console.log("----------JSON 2----------");

const json2 = '{"result":true, "count":42}';
const obj2 = JSON.stringify(json2);
console.log(obj2)

console.log("----------JSON 3----------");

const json3 = '[1, 2, 3]';
const obj3 = JSON.parse(json3);
console.log(obj3)

console.log("----------JSON 4----------");

const json4 = '[1, 2, [1, 2, 3]]';
const obj4 = JSON.parse(json4);
console.log(obj4)

console.log("----------JSON 5----------");
// 깊은 복사
let a = [10, 20, 30];
let b = JSON.parse(JSON.stringify(a));
a[0] = 1000;
console.log(a);

console.log("----------JSON 5----------");
// error
/* 
let c = [10, 20, 30];
let d = JSON.parse(c);
c[0] = 1000;
console.log(c);
*/
console.log("----------JSON 6----------");
// error
/* 
let e = [10, 20, 30];
let f = JSON.parse(`${e}`);
e[0] = 1000;
console.log(e);
*/