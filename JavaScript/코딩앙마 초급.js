console.log("----------변수----------");
/*
변수 선언할 때,
변하지 않는 값은 const, 변할 수 있는 값은 let으로 선언한다.
tip: const로 먼저 변수 선언 후 let으로 수정할 부분은 그때 수정한다.
변수 주의사항
1. 문자와 숫자, $와_만 사용한다
2. 첫글자는 숫자가 될 수 없다.
3. 예약어는 사용할 수 없다,
4. 가급적 상수는 대문자로 알려준다,
5. 변수명은 읽기 쉽고 이해할 수 있게 선언한다.
*/

console.log("----------자료형----------");

/* 
문자형(string): ("" ,'', ``)
`` 사용 예시: const  message = `my name is ${name};

숫자형(number)

boolean
true or false

ull 과 undefined
ull: 존재하지 않는 값 (객체 아님)
undefined: 값이 할당되지 않았다.

typeof 연산자
 */

/* 
alert 알려줌 / prompt 입력받음 / confirm 확인받음

prompt는 2개의 인수를 받을 수 있다. ->문자형으로 나옴

confirm 은 확인 취소에 따라 true false값으로 나온다.

단점
1. 스크립트 일시정지
2. 스타일링 불가능
 */

// 형변환
/* 
문자형: String()
S는 대문자로 사용한다.
숫자형: Number() : true와 false는 숫자 1과 0 이다.
false: 숫자0, 빈 문자열, null, undefined, nan
number(null): 0
number(undefined): nan
 */

// 연산자
/* 
%나머지
**거듭제곱

(num = num + 5;) == (num += 5;)

증가연산자 / 감소연산자

let num = 10;
let result = ++num;
 */

// 비교연산자

/* 
= 값을 할당한다,
== 같은지 비교한다.
=== type까지 비교한다.
!= 다른지 비교한다.
ex)
 */
let a = 1;
let b = "1";
console.log(a == b); // => true
console.log(a === b); // => false

//조건문(if , else)
/* 
if의 조건식은 boolean형으로 전환된다.
if문의 조건식이 false일때 else를 실행한다
ex)if, else, else if
*/
const age = 30;
if(age > 19) {
  console.log("환영합니다.");
}
if(age <= 19) {
  console.log("안녕히 가세요.");
}
// else로 바꿔보자
if(age > 19) {
  console.log("환영합니다.");
} else {
  console.log("안녕히 가세요.");
}

// 19살이면 수능 잘치세요라는 문구 보여주기
const ages = 19;
if(ages > 19) {
  console.log("환영합니다.");
} else if(ages === 19) {
  console.log("수능 잘치세요!");
} else {
  console.log("안녕히 가세요.");
}

// 논리연산자(or, and, not)
/* 
or(||): 여러개 중 하나라도 true 면 true
모든 값이 false일때만 false로 반환
and(&&): 모든 값이 true 면 true
하나라도 false 면 false로 반환
not(!): 반대값으로 
true 면 false
false면 true
 */
const name = "tom";
const age3 = 30;
if(name === 'mike' && age3 > 19) {
  console.log('통과');
} else {
  console.log('돌아가!');
};

/* 
const age4 = prompt('나이가..?');
const isadult = age4 > 19;
if(!isadult) {
  console.log('돌아가!!!');
};
 */

// 반복문
/* 
for(초기값, 조건, 코드실행 후 작업) {
  반복할 코드
}
*/
for(let i = 0; i < 10; i++) {
  console.log(i+1);
}
for(let i = 1; i < 11; i++) {
  console.log(i);
}
for(let i = 0; i <= 10; i++) {
  console.log(i);
}

/* 
while(조건) {
  코드
}
*/
let i = 0;
while(i<10) {
  console.log(i);
  i++;
}

// switch
/* 
switch(평가) {
  case a:
    a 일때 코드
  case b:
    b 일때 코드
}
break를 만나기 전까지 다 실행한다.
*/

// 사과100원, 바나나200원, 키위300원, 멜론500원, 수박500원, 사고싶은 과일을 물어보고 가격 알려주기

/* 
let fruit = prompt('무슨 과일을 사고 싶나요?');
switch (fruit) {
  case '사과' :
    console.log('100원입니다.');
    break;
  case '바나나' :
    console.log('200원입니다.');
    break;
  case '키위' :
    console.log('300원입니다.');
    break;
  case '멜론' :
  case '수박' :
    console.log('500원입니다.');
    break;
  default :
  console.log('그런 과일은 없습니다.');
}
 */

// 함수: console, alert, confirm 등등
/* 
function sayhello(name) {
  console.log(`hello,${name}`);
}
*/ 
// 매개변수 없는 함수
/* 
function showerror() {
  alert('에러가 발생했습니다. 다시 시도해주세요.')
}
showerror();
 */
// 매개변수 있는 함수
function sayhello2(name) {
  const msg = `hello, ${name}`;
  console.log(msg);
}
sayhello2('mike');
sayhello2('tom');
sayhello2('jane');

// return으로 값 반환
function add(num1, num2) {
  return num1 + num2;
}
const result = add(2,3);
console.log(result);


// 함수 선언문 vs 함수 표현식
/* 
함수 선언문: 어디서든 호출 가능
함수 표현식: 코드에 도달하면 생성
 */

// 화살표 함수
/* 
예시
let add = function(num1, num2) {
  return num1 + num2;
}
화살표 함수로
let add = (num1, num2) => {
  return num1 + num2;
}
*/

// 객체(object) - 접근, 추가, 삭제
  const superman = {
    name: "clark",
    age: 30,
  };
  console.log(superman);
  console.log(superman.name);
  console.log(superman['age']);
  // 추가
  superman.haircolor = "black";
  superman['hobby'] = 'football';
  console.log(superman);
  // 삭제
  delete superman.age;
  console.log(superman);

  // method: 객체 프로퍼티로 할당 된 함수
  // 화살표 함수는 자신만의 this를 가지지 않는다.

  // this 무엇?

  let boy = {
    name: "mike",
    showname: function () {
      console.log(this.name);
    }
  };
  let man = boy;
  man.name = "tom";

  console.log(boy.name);

  man.showname();
  boy = null;

  man.showname(); //error
  // 함수안 boy.name에서 boy를 this로 바꾼다.

  // 배열(array)
  /* 
  let 배열명 = ['배열값, ........'];
  배열은 숫자, 객체, 함수등 다양하게 포함할 수 있다.
  method
  .push() 배열 끝에 요소 추가
  .pop() 배열 끌에 요소 삭제
  .shift() 배열 앞에 제거
  .unshift() 배열 앞에 추가
  */

  let days = ["mon", "tue", "wed"];
  console.log(days[1]);
  days[1] = "화요일";
  console.log(days);
  console.log(days.length);
  days.push("thu");
  console.log(days.length);
  days.unshift("sun");
  console.log(days);

  for(let index = 0; index<days.length; index++) {
    console.log(days[index]);
  }
  for(let day of days) {
    console.log(day);
  }