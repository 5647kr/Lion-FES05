console.log("==========단락회로평가 1==========");
//! 중요
/* 
true: 1
false: 0
and(&&): 곱
or(||): 합
not(!): 부정
*/
console.log(!"false"); // false
console.log(!"0"); // false
console.log(!false); // true
console.log(!0); // true
console.log("abc" / 2); // NaN
console.log(!!NaN); // false
console.log(!!undefined); // false
console.log(!!null); // false

console.log("==========단락회로평가 2==========");
//! 중요
let username1 = "";
username1 = username1 || "무명" 
//! 뒤에걸 볼 필요가 있냐가 중요하다.
console.log(username1);

let username2 = "이호준";
username2 = username2 || "무명" //! 뒤에걸 볼 필요가 있냐가 중요하다.
console.log(username2);

console.log("==========삼항 연산자 1==========");
//! 중요 
// 조건식 ? 참일 경우 실행되는 표현식 : 거짓일 경우 실행되는 표현식
//! 3개 이상 중첩하지 말 것

let sale = true;
let price1 = sale ? 100 : 200; // sale이 true라면, 100 fasle라면 200
console.log(price1);

console.log("==========삼항 연산자 2==========");

//! 중요 
const price2 = 7000; //값을 변경해보세요
const message = price2 >= 5000 ? "비싸요" : "저렴해요";
console.log(message);

console.log("==========삼항 연산자 3==========");

//! 중요 
// 9000원 이상 비싸다
// 9000원 미만 적절
// 7000원 미만 저렴하다

const price3 = 7500;
const message2 = (price3 >= 9000) ? "비싸요" : ((price3 >= 7000) ? "적절해요" :"저렴해요");
console.log(message2);

console.log("==========삼항 연산자 문제 1==========");
//! 중요 
/* 
통장에 10000원 초과있으면 부자
10000원 이하 있으면 부를 바라는 자
*/

const account1 = 10000;
const message3 = account1 > 10000 ? "부자" : "부를 바라는자";
console.log(message3);

console.log("==========삼항 연산자 문제 2==========");
//! 중요 
// 100000원 초과 있으면 초부자
// 10000원 초과 있으면 부자
// 10000원 이하있으면 부를 바라는 자

const account2 = 10000;
const message4 = (account2 > 1000000) ? "초부자" : ((account2 > 10000) ? "부자" : "부를 바라는자");
console.log(message4);