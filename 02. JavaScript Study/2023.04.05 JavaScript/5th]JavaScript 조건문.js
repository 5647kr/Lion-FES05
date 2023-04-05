// 조건문
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
console.log("조건문");
console.log(money);

console.log("-------------------------");

// 
//사용자로부터 입력받은 나이에 따라 다른 인사말을 콘솔로 출력하는 프로그램을 작성하세요. 
/* 조건
1. 나이가 18세 이상이면 "안녕하세요!"를
2. 10세 이상이면 "안녕! 반가워 꼬마친구! ” 를 
3. 10세 미만이면 “부럽다…” 를 출력합니다.
*/

console.log("조건문 문제1");
const age1 = 18;
if(age1 >= 18) {
  console.log("안녕하세요!");
} else if(age1 >= 10) {
  console.log("안녕! 반가워 꼬마친구!");
} else {
  console.log("부럽다...");
}

console.log("-------------------------");

console.log("조건문 문제1 해설");
const age2 = 18;
// const age2 = parseInt(prompt("나이를 말씀해주세요!")); (브라우저에서 확인)
if(age2 >= 18) {
  console.log("안녕하세요!");
} else if(age2 >= 10) {
  console.log("안녕! 반가워 꼬마친구!");
} else {
  console.log("부럽다...");
}


console.log("-------------------------");

/* 
조건
1. 성적이 90점 이상이면 "A", 
2. 80점 이상이면 "B", 
3. 70점 이상이면 "C",
4. 60점 이상이면 "D", 
5. 그 외에는 “강해져서 돌아와라”를 출력합니다.
*/

console.log("조건문 문제2");
const score1 = 101;
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

console.log("-------------------------");

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

