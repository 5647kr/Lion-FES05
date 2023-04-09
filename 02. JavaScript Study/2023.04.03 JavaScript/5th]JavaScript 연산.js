console.log("----------드모르간 법칙----------");

const a = 0;
const b = 1;
console.log(!(a || b) === (!a && !b));
console.log(!(a && b) === (!a || !b));

// 드모르간 법칙을 이용해서 무조건 true나 false가 되는 구간을 발견할 수 있다.

console.log("----------nullish 연산----------");
// null 인지를 확인한다.

// https://ko.javascript.info/nullish-coalescing-operator 추가된지 얼마 안된 문법으로 구식 브라우저는 폴리필(최신문법을 구식 브라우저에서도 사용할 수 있도록 해주는 것)필요하다

let firstName = null;
let lastName = null;
let nickname = "licat";
console.log(firstName ?? lastName ?? "익명사용자");
console.log(firstName ?? lastName ?? nickname ?? "익명사용자");

let c = null;
let d = 10;
let e = null;
console.log(c ?? d ?? e);

console.log("----------단락회로평가 vs nullish 연산 1----------");

let height = 0;
console.log(typeof height);
console.log(height || 100);
console.log(height ?? 100); //height가 null이 아니여서 0 을 출력한다.

console.log("----------단락회로평가 vs nullish 연산 2----------");

let height2;
console.log(typeof height2);
console.log(height2 || 100);
console.log(height2 ?? 100);

console.log("----------단락회로평가 vs nullish 연산 3----------");

let height3 = "";
console.log(typeof height3);
console.log(height3 || "hello");
console.log(height3 ?? "world");

/* 
|| : 0, null, undefined, false, NaN, "", etc...
?? : null, undefined

falsy하다 : 0, null, undefined, "", NaN
nullish하다 : null, undefined
*/