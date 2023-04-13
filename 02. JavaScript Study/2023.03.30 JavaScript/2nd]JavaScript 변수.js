console.log("----------변수----------");

//! 변수 이름 선언 주의사항
/* 
1. 첫 글자는 숫자가 될 수 없다.
let 2btn = run; (X)
let ./img/profile = run; (X)  
2. 대소문자를 구별한다.(문자는 소문자로 시작한다. 대문자로 시작하는 변수는 class)
3. 유니코드 문자도 사용할 수 있다.
  let abc = 100;
  let ABC = 100;
  let aBc = 100;
  let abC = 100;
  4개 모두 다른 변수 이다.
4. 한글변수 사용은 가능하나 거부반응이 있다.
5. 예약어는 절대 사용하지 않는다.(break, case, class 등등)
*/

console.log("----------변수의 특징----------");
/* 
변수 선언(변할 수 있는 값): var, let
상수 선언(변할 수 없는 값): const
*/
// var은 키워드를 생략할 수 있으나 (엄격모드 에러)생략과 사용하지 말 것

// let과 const는 블록 레벨 선언(scope)
if(ture) {
  let x = 100;
  console.log(x);
}
console.log(x);
/* 
안에 console.log는 출력할 수 있지만, 밖에 console.log는 출력할 수 없다.
const의 경우에는 반드시 초기화
권하는 변수선언은 const를 권하는데 그 이유는 값 변경하지 못하고, 가독성을 높일 수 있다.
*/

const x = 100;
let y = 1000;
// 1000줄 코드
console.log(x, y);