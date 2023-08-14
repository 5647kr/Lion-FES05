console.log("----------삼항연산자 조건문----------");
// if-else문을 간단하게 표현하는 방법이다.

/* 기본문법
조건문 ? 조건문이 참일 때 실행될 코드 : 조건문이 거짓일 때 실행될 코드
*/

let item = true ? 100 : 200;
console.log(item); 

console.log("----------삼항연산자 조건문 문제 1----------");

/* 
아래 코드를 삼항연산자로 수정
if(score2 >= 90) {
  console.log("A");
} else if(score2 >= 80) {
  console.log("B");
} else if(score2 >= 70) {
  console.log("C");
} else if(score2 >= 60) {
  console.log("D");
} else {
  console.log("강해져서 돌아와라!");
}
*/
const score1 = 90;
score1 >= 90 ? "A" : 
score1 >= 80 ? "B" :
score1 >= 70 ? "C" :
score1 >= 60 ? "D" :
"강해져서 돌아와라!";
console.log(score1);

console.log("----------삼항연산자 조건문 문제 1 해설----------");

const score2 = 100;
const grade1 = score2 > 100 ? console.log("핵 쓰셨습니까?"):
score2 >= 90 ? "A" : 
score2 >= 80 ? "B" :
score2 >= 70 ? "C" :
score2 >= 60 ? "D" :
"강해져서 돌아와라!";
console.log(grade1);