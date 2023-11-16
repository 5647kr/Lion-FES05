console.log("==========조건문 문제 1==========");

/* 
조건
1. 성적이 90점 이상이면 "A", 
2. 80점 이상이면 "B", 
3. 70점 이상이면 "C",
4. 60점 이상이면 "D", 
5. 그 외에는 “강해져서 돌아와라”를 출력합니다.
*/

const score1 = 98;
// const score1 = parseInt(prompt("점수를 입력해주세요!")); (브라우저에서 확인)
if(score1 >= 90) {
  console.log("A");
} else if(score1 >= 80) {
  console.log("B");
} else if(score1 >= 70) {
  console.log("C");
} else if(score1 >= 60) {
  console.log("D");
} else {
  console.log("강해져서 돌아와라!");
}

console.log("==========조건문 문제 1 해설==========");

console.log("조건문 문제2 해설");
const score2 = 101;
// const score2 = parseInt(prompt("점수를 입력해주세요!")); (브라우저에서 확인)
if(score2 > 100) {
  console.log("핵 쓰셨습니까?"); // 100초과하면 받지 못하게 함(예외처리)
  // alert("핵 쓰셨습니까?") (브라우저확인시 주석 지우기)
} else {
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
}

console.log("==========삼항연산자 조건문==========");

// if-else문을 간단하게 표현하는 방법이다.

/* 기본문법
조건문 ? 조건문이 참일 때 실행될 코드 : 조건문이 거짓일 때 실행될 코드
*/

let item = true ? 100 : 200;
console.log(item); 

console.log("==========삼항연산자 조건문 문제 1==========");

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

const score3 = 90;
score1 >= 90 ? "A" : 
score1 >= 80 ? "B" :
score1 >= 70 ? "C" :
score1 >= 60 ? "D" :
"강해져서 돌아와라!";
console.log(score3);

console.log("==========삼항연산자 조건문 문제 1 해설==========");

const score4 = 100;
const grade1 = score4 > 100 ? console.log("핵 쓰셨습니까?"):
score2 >= 90 ? "A" : 
score2 >= 80 ? "B" :
score2 >= 70 ? "C" :
score2 >= 60 ? "D" :
"강해져서 돌아와라!";
console.log(grade1);