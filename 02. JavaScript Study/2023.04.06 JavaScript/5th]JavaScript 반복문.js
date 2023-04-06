// 외우면 좋은 코드
/* 
user
.map(v => v.age)
.filter(v => !!v)
.reduce((a + b) => a + b, 0);
*/

console.log("-------------------------");

// while 문
/* 
while (조건문) {
  조건문이 참일 때 실행될 코드
}
*/
/* 
let a = 0;
while (a < 10) {
  console.log(a);
  a += 1
}
 */
console.log("-------------------------");

/* 
let input;
do {
  input = prompt("숫자를 입력하세요");
} while (isNaN(input));
console.log("입력한 숫자는 " + input + "입니다");
 */

console.log("-------------------------");

/* 
let input;
do {
  input = confirm("다음에도 저희와 함께 하시겠습니까?");
} while (!input);
console.log("감사합니다");
*/

console.log("-------------------------");

// 구구단(암기1)
// for(let i = 2; i < 10; i++) {
//   for(let j = 1; j < 10; j++) {
//     console.log(`${i} X ${j} = ${i * j}`);
//   }
// }

let b = 2;
while (b < 10) {
  let c = 1;
  while (c < 10) {
    console.log(`${b} X ${c} = ${b * c}`);
    c++;
  }
  b++;
}

console.log("-------------------------");

// 문자열 뒤집기for문(암기2)

let d = "hello world";
let result1 = "";
for(let i = 0; i < d.length; i++) {
  console.log(i);
  result1 = d[i] + result1
}
console.log(result1);

console.log("-------------------------");
// 문자열 뒤집기while문(암기2)

let e = "hello world";
let result2 = "";
let count1 = 0;
while (count1 < d.length) {
  result2 = e[count1] + result2;
  count1++;
}
console.log(result2);