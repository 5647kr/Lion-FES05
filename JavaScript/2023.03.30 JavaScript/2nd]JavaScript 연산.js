console.log("==========산술연산==========");

const x = 10;
const y = 3;
console.log(x + y); // 더하기
console.log(x - y); // 빼기
console.log(x * y); // 곱하기
console.log(x ** y);// 제곱
console.log(x / y); // 나누기 (몫만 구하기: parseInt & math.floor: 버림)
//* 소숫점 이하 버리기: math.trunc
console.log(x % y); // 나머지

console.log("==========논리연산==========");

// and는 하나라도 false면 false 
// or은 하나라도 true 면 true

const a = true; // 1
const b = false; // 0
const c = 10;
console.log(a && b); // and(곱)
console.log(a || b); // or(합)
console.log(!a); // "!"(not)
console.log(!!c); // 참인지를 판별한다.
console.log(a & b);
console.log(a | b);
// 비트연산자중에서 중요한 부정연산(~)
console.log(~3);
// 3+1한 다음 음수값을 붙인다.
console.log(~7);
// 7+1한 다음 음수값을 붙인다.
console.log(~~3.14);
// 소수점 뒷자리를 없앤다.
console.log(parseInt(3.14));
// parseInt를 사용한다.

console.log("==========논리연산 문제==========");
/* 
ture && true //true
true && false //false
false || ture //true
true || true //true
*/
