console.log("==========비교연산==========");

const x = 3;
const y = 7;
console.log(x > y); // x가 y보다 큰가
console.log(x >= y); // x가 y보다 크거나 같은가
console.log(x < y); // x가 y보다 작은가
console.log(x <= y); // x가 y보다 작거나 같은가
console.log(x == y); // x가 y랑 같은가 (변수의 타입을 확인하지 않는다.)
console.log(x === y); // x가 y랑 같은가 (변수의 타입을 확인한다.)
console.log(x != y); // x가 y랑 다른가
console.log(x !== y); // x가 y랑 다른가 (변수의 타입을 확인한다.)

console.log("==========비교연산 예시==========");

const a = 1; // 수
const b = "1"; // 문자
console.log(a == b); // i가 j랑 같은가 (변수의 타입을 확인하지 않는다.)
console.log(a === b); //! 권장 i가 j랑 같은가 (변수의 타입을 확인한다.)
// 견고한 코딩, 성능상의 이점
console.log(a != b);
console.log(a !== b);

console.log("==========논리연산 실무예제 1==========");

for(let i = 0; i < 101; i++) {
  // console.log(i);
  if(i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}

console.log("==========논리연산 실무예제 2==========");

for(let i = 0; i < 101; i++) {
  // console.log(i);
  if(i % 3 == 0 || i % 5 == 0) {
    console.log(i);
  }
}

console.log("==========논리연산 실무예제 3==========");

let z = 0;
for(let i = 0; i < 1001; i++) {
  // console.log(i);
  if(i % 3 == 0 || i % 5 == 0) {
    z = z + i 
  }
}
console.log(z);