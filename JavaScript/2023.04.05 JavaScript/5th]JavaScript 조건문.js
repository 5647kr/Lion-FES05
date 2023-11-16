console.log("==========조건문==========");
// 조건에 따라 실행되는 코드로 참(true), 거짓(false)값을 반환하는지에 따라 판단한다.

// if문
/* 기본문법
if(조건문) {
  조건문이 참일 때 실행될 코드
}
*/

// if-else 문
// 조건이 거짓일 때 실행할 코드가 필요한 경우에 사용한다.
/* 
if(조건문) {
  조건문이 참일 때 실행될 코드
} else {
  조건문이 거짓일 때 실행될 코드
}
*/

let score = 69;
let money = 1000;
if(score > 90) {
  document.write("참 잘했습니다!<br>");
  money += 100000
} else if(score > 80) {
  document.write("잘했습니다!<br>");
  money += 10000
} else if(score > 70) {
  document.write("했습니다!<br>");
  money += 1000
} else {
  money = 0
}
console.log(money);

console.log("==========조건문 문제 1==========");

// 
//사용자로부터 입력받은 나이에 따라 다른 인사말을 콘솔로 출력하는 프로그램을 작성하세요. 
/* 조건
1. 나이가 18세 이상이면 "안녕하세요!"를
2. 10세 이상이면 "안녕! 반가워 꼬마친구! ” 를 
3. 10세 미만이면 “부럽다…” 를 출력합니다.
*/

const age1 = 18;
if(age1 >= 18) {
  console.log("안녕하세요!");
} else if(age1 >= 10) {
  console.log("안녕! 반가워 꼬마친구!");
} else {
  console.log("부럽다...");
}

console.log("==========조건문 문제 1 해설==========");

const age2 = 18;
// const age2 = parseInt(prompt("나이를 말씀해주세요!")); (브라우저에서 확인)
if(age2 >= 18) {
  console.log("안녕하세요!");
} else if(age2 >= 10) {
  console.log("안녕! 반가워 꼬마친구!");
} else {
  console.log("부럽다...");
}