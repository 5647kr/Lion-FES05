console.log("----------number vs parseInt 1----------");

console.log(Number(true));
console.log(Number(false));
console.log(parseInt(true));
console.log(parseInt(false));

console.log("----------number vs parseInt 2----------");

console.log(Number(" "));
console.log(Number(""));
console.log(Number("hello"));
console.log(Number("10 20"));
console.log(Number("10abc"));

console.log(parseInt(" ")); // v**
console.log(parseInt("")); // v**
console.log(parseInt("hello"));
console.log(parseInt("10 20"));
console.log(parseInt("10abc")); // v****
// 텍스트가 숫자로 시작하지 않을 때 NaN
// 텍스트가 숫자로 시작했을 경우 숫자 까지만 변환 가능
// int는 정수, float는 실수

console.log("----------number vs parseInt 3----------");

// console.log(Number(10 20)); error
console.log(Number("        10")); // 10
console.log(Number("10        ")); // 10
console.log(Number("    10    ")); // 10
console.log(parseInt("        10")); // 10
console.log(parseInt("10        ")); // 10
console.log(parseInt("    10    ")); // 10
console.log(parseFloat("10.123")); // 10.123

console.log("----------math(****)----------");

console.log(Math.abs(-10)); // abs는 절대값을 구하는 공식이다.
console.log(Math.ceil(10.3)); // 올림
console.log(Math.floor(10.3)); // 내림
console.log(Math.round(10.3)); // 반올림
console.log(Math.sqrt(10.3)); // 루트
console.log(Math.PI);  // 보다는 3.14를 사용한다.
console.log(Math.min(1, 3, 5, 6, 7, 23, 9));
console.log(Math.max(1, 3, 5, 6, 7, 23, 9));
console.log(Math.min([1, 2, 3, 4, 5])); // 작동이 안된다.
console.log(Math.min(...[1, 2, 3, 4, 5])); // '...' 전개구문

console.log("----------배열 math사용----------");

let values = [1, 2, 3, 4, 5];
console.log(Math.max(values)); // 작동하지 않는다.
console.log(Math.max(...values));

console.log("----------random----------");

console.log(Math.random());
// 0이상 1미만

// 1~10까지의 난수 생성
console.log(parseInt(Math.random() * 10 + 1));

// 최솟값, 최대값 지정
// 120~ 150
// (Math.random() * (최댓값 - 최솟값)) + 최솟값
console.log(Math.random() * (150 -120) + 120);

console.log("----------pow----------");

// 아래와 같이 있으나, 잘 사용되지 않는 메서드들이 있습니다.
console.log(Math.pow(2, 3)); // 2 ** 3

console.log("----------부동소숫점 이슈----------");

// 부동소수점에는 항상 오차가 발생하게 된다.
// 그 이유는 computer에서 10진수 연상은 정확하지 않기 때문이다.

console.log(0.1 + 0.2);  // (0.1씩 늘려갈 때)
// 0.30000000000000004
console.log(0.1 * 3);  
// 0.30000000000000004
console.log(0.3 + 0.6);  
// 0.8999999999999999

// 문제가 되는 경우
let width = 0.3;
let height = 1.6;
if(width + height >= 0.9) {
  console.log("실행해!");
}

console.log("----------Infinity----------");

Infinity
Infinity > 100;
Infinity < 100;
-Infinity; // v-0