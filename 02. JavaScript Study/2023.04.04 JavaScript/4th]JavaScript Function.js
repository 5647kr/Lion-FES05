// function (함수)
function one(a, b) { // 1번
  let z = a+ b;      // 2번
  return z ** 2;     // 3번
}
console.log(one(7, 3));
/* 
a, b는 parameter(파라미터) / 7, 3은 argument(아규먼트)
*/

// 화살표 함수
const two = (a, b) => (a+ b)**2;
console.log(two(10, 10));

// 이름 없는 함수
const three = function (a, b) {
  let z = a + b;
  return z ** 2;
};
console.log(three(15, 15));

// 콜백함수
function four(a, b, c) {
  let z = c(a, b) + c(a, b);
  return z * 2;
}
console.log(four(7, 3, one)); 
// 함수를 argument로 전달해서 사용한다.

// 함수의 순수성, 장점을 살릴 수 없다. (이렇게 사용하지 말것!)
function four(a, b, c) {
  let z = one(a, b) + one(a, b);
  return z * 2;
}
console.log(four(7, 3, one)); 