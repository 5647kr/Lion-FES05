console.log("----------비교연산----------");

const i = 3;
const j = 7;
console.log(i > j); // i가 j보다 큰가
console.log(i >= j); // i가 j보다 크거나 같은가
console.log(i < j); // i가 j보다 작은가
console.log(i <= j); // i가 j보다 작거나 같은가
console.log(i == j); // i가 j랑 같은가 (변수의 타입을 확인하지 않는다.)
console.log(i === j); // i가 j랑 같은가 (변수의 타입을 확인한다.)
console.log(i != j); // i가 j랑 다른가
console.log(i !== j); // i가 j랑 다른가 (변수의 타입을 확인한다.)

console.log("----------비교연산 예시----------");

const k = 1; // 수
const l = "1"; // 문자
console.log(k == l); // i가 j랑 같은가 (변수의 타입을 확인하지 않는다.)
console.log(k === l); //! 권장 i가 j랑 같은가 (변수의 타입을 확인한다.)
// 견고한 코딩, 성능상의 이점
console.log(k != l);
console.log(k !== l);

console.log("----------연산 실무예제 1----------");

for(let i = 0; i < 101; i++) {
  // console.log(i);
  if(i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}

console.log("----------연산 실무예제 2----------");

for(let i = 0; i < 101; i++) {
  // console.log(i);
  if(i % 3 == 0 || i % 5 == 0) {
    console.log(i);
  }
}

console.log("----------연산 실무예제 3----------");

let x = 0;
for(let i = 0; i < 1001; i++) {
  // console.log(i);
  if(i % 3 == 0 || i % 5 == 0) {
    x = x + i 
  }
}
console.log(x);