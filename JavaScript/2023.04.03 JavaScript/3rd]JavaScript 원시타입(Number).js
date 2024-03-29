console.log("==========부동소숫점 이슈==========");

// 부동소수점에는 항상 오차가 발생하게 된다.
// 그 이유는 computer에서 10진수 연상은 정확하지 않기 때문이다.

0.1 + 0.2 // (0.1씩 늘려갈 때)
// computer입장에서는 0.1은 무한수다.
// 0.30000000000000004
0.1 * 3 
// 0.30000000000000004
0.3 + 0.6 
// 0.8999999999999999

let x = 0.1;
x = x + 0.1;
console.log(x);
x = x + 0.1;
console.log(x);
x = x + 0.1;
console.log(x);
x = x + 0.1;
console.log(x);
x = x + 0.1;
console.log(x);
x = x + 0.1;
console.log(x);
x = x + 0.1;
console.log(x);
x = x + 0.1;
console.log(x);
x = x + 0.1;
console.log(x);
x = x + 0.1;
console.log(x);
x = x + 0.1;
console.log(x);

console.log("==========BigInt==========");

//! 중요
// JS에서 큰 숫자를 사용할 때에는 BigInt를 사용합니다.
// BigInt를 회사에서 사용하지 않을 수도 있습니다.(추가된지 2년 되었습니다.)
// The proposal belongs to ECMAScript 2020, which is the 11th edition
// console.log(Number.MAX_SAFE_INTEGER)  // 2^53 - 1

console.log(2**53 - 1); 
// 9007199254740991

console.log(9007199254740991 + 1); 
// 9007199254740992

console.log(9007199254740991 + 2); 
// 9007199254740992

console.log(9007199254740991 + 3); 
// 9007199254740994

console.log(9007199254740991 + 4); 
// 9007199254740996

console.log(9007199254740991n + 1n); 
// 9007199254740992n

console.log(9007199254740991n + 2n); 
// 9007199254740993n

console.log(9007199254740991n + 3n); 
// 9007199254740994n

console.log(9007199254740991n + 4n); 
// 9007199254740995n

console.log(BigInt(9007199254740991) + BigInt(1)); 
// 9007199254740992n

console.log(BigInt(9007199254740991) + BigInt(2)); 
// 9007199254740993n

console.log(BigInt(9007199254740991) + BigInt(3)); 
// 9007199254740994n

console.log(BigInt(9007199254740991) + BigInt(4)); 
// 9007199254740995n

// 참고 삼아 기억하기
// BigInt(5) + 5n
// BigInt(5) + 5 // error
// BigInt(5) / 2n // 2n (소수 표현 안됨)
// BigInt("10") + BigInt("10") 
// 큰 값을 정수로 입력받을 때에는 string으로 처리해서 받아야 함

// 상식으로 알아두면 좋은 것
let y = 10;
console.log(y.toString());

// 10.toString() 10.까지 소숫점으로 인식한다.
// (20).toString(); 이처럼 사용해야한다.