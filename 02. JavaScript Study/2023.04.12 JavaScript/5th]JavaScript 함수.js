console.log("----------call by value 1----------");
// call by value, reference, sharing
// array와 같은 convension 자료형을 넘길 때에는 함수 안에서 값의 수정이 됩니다!
// call by value(값의 전달)
// call by reference(참조-주소값의 전달)
// 면접질문 : javascript의 call by value, call by reference에 대해서 설명하세요
// 답변 : javascript는 call by value만 존재합니다.
// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-Call-by-Value-Call-by-Reference

let test1 = [10, 20, 30];
let test2 = 100;

function 값변경1(arr) {
  arr[0] = 100;
}
값변경1(test1);
console.log(test1);

function 값변경2(value) {
  value = 1000
}
값변경2(test2)
console.log(test2);

console.log("----------call by value 2----------");
// 반례
var a = {};
function test(b) {
  b = 1000;
}
console.log(test(a)); 
console.log(a); 
// 다른 언어의 경우 a가 1000으로 변경된다.
/*
call by value
아규먼트에 값이 넘어올 때 복사한 값이 넘어온다!

call by reference
아규먼트에 값이 넘어올 때 주소값이 넘어온다! (주소값이 넘어왔으니 접근을 하면 원본이다!)

- javascript는 참조값을 넘길 때 참조한 주소값을 '복사'하여 넘깁니다. 그래서 call by reference가 아니라 call by value입니다. '복사한 값'인거죠. 주소값도 값이니까요.

4. 김
원시값보다 덩치가 큰 배열이나 객체도 인자로써 옮겨질 때 값이 복제되어 전달되면 실행시간이 길어질 수 도 있을까요?

답 : 주소값을 복사하니 실행시간이 길어지지 않습니다.

4. 서 — 오늘 오후 3:28
변수가 가리키고 있는 공간에 저장된 '값'이 전달된다...?

답 : 주소값이 복사됩니다.

4. 유 — 오늘 오후 3:29
지금 말씀하시는 부분이 원시값은 메모리에 값을 저장하고
object는 메모리에 참조주소를 저장해서 생기는 일 맞을까요?

답 : 이해하신 것이 맞습니다. 다만 이렇게 표현하는 것이 정확할 것 같아요. 원시값은 파라미터에 복사한 값을 저장하고 참조타입은 파라미터에 참조 주소를 복사하여 저장합니다.

4. 이 — 오늘 오후 3:30
함수 내부에서는 인자의 값을 가상 변수에 복제해서 로직을 수행하는데 참조값은 가상 변수에 주소값이 함께 담겨져서 값이 바뀌는 걸까요?

답 : 맞습니다. 주소값이 담겨져서 바뀌는 것입니다. 다만 주소값이 '복사'된 상태입니다.


4. 이 — 오늘 오후 3:31
메모리 주소를 복사해서 넘기기 때문에 새로운 주소가 할당된 경우에만 변경이 안된다는 거라고 이해해도 될까요?

답 : 정확합니다.
*/

console.log("----------클로저 1----------");
// 외부함수(포함하고 있는 )의 변수에 접근할 수 있는 내부 함수를 말한다.
// 폐쇠된 공간 안에 데이터에 접근하기 위한 테크닉
function 제곱(x) {
  function 승수(y) {
    return y ** x
  }
  return 승수
}
let 제곱2 = 제곱(2); //제곱
let 제곱3 = 제곱(3); //3제곱
let 제곱4 = 제곱(4); //4제곱

console.log(제곱2(2));
console.log(제곱2(3));
console.log(제곱2(4)); // == console.log(제곱(2)(4));

console.log("----------함수 리턴 예제----------");

function 리턴함수() {
  function sum(a, b) {
    return a + b;
  }
  return sum
}
let 합 = 리턴함수();
console.log(합(2, 3));

console.log("----------클로저 2----------");

function makeAdder(x) {
  let y = 1;
  return function(z) {
    let y = 100;
    return x + y + z;
  };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
//지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝
//어려운 얘기로는 내부 렉시컬 환경에서 찾고 없으면 전역 렉시컬 환경에서 찾는다 얘기함.
//함수가 수행된 이후에도 상위함수의 렉시컬 환경에 접근 가능

console.log("----------생성자 함수 1----------");
// 찍어내는 역할을 한다.

let book = {
  책이름: "JavaScript",
  책가격: 1000,
  저자: "홍길동",
  출판일: "2023.04.12"
};

let newbook = {};
newbook["책이름"] = "JavaScript"
newbook["책가격"] = 100000
newbook["저자"] = "홍길동"
newbook["출판일"] = "2023.04.12"
console.log(newbook);

