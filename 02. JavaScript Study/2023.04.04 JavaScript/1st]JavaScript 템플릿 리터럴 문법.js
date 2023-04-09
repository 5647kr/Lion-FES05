console.log("----------간단한 템플릿 리터럴 1----------");

const a = 10;
const b = 20;
console.log("a 값은 10이고 b의 값은 20이고 두개를 곱한 값은 200입니다.");
console.log("a 값은 ", a, "이고 b의 값은 ", b, "이고 두개를 곱한 값은 ", a*b,"입니다.");
console.log(`a 값은 ${a}이고 b의 값은 ${b}이고 두개를 곱한 값은 ${a*b}입니다.`);
// 단, ${}안에 연산을 넣는걸 권하지 않는다.

console.log("----------간단한 템플릿 리터럴 2----------");

const a2 = 10;
const b2 = 20;
const result = a2 * b2;
console.log(`a2 값은 ${a2}이고 b2의 값은 ${b2}이고 두개를 곱한 값은 ${result}입니다.`);
// ${} 중괄호 안에 연산을 넣지 않고 밖에서 연산을 한다.

console.log("----------간단한 템플릿 리터럴 3----------");

const c = "hello";
const d = "world";
const result2 = c + "\n" + d;
console.log(result2);
// 단점: 가독성이 떨어진다.
if(true) {
  if(true) {
    if(true) {
      console.log(`h
      e
      l
      l
      o`
      );
    }
  }
}