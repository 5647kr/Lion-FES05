console.log("----------암기하면 좋은 코드----------");
let user1 = [
  {
    "index": 0,
    "age": 31,
    "name": "Hicks Garza",
    "gender": "male",
  },
  {
    "index": 1,
    "age": 32,
    "name": "Ayers Harrington",
    "gender": "male",
  },
  {
    "index": 2,
    "age": 39,
    "name": "Lamb Adams",
    "gender": "male",
  },
  {
    "index": 2,
    "name": "Lamb Adams",
    "gender": "male",
  }
]
console.log(user1.map(v => v.age));
console.log(user1.map(v => v.age).filter(v => !!v));
console.log(user1.map(v => v.age).filter(v => !!v).reduce((a, b) => a + b, 0));

console.log("----------while 문----------");

// while 문
/* 
while (조건문) {
  조건문이 참일 때 실행될 코드
}
  조건문이 거짓일 때 while문을 탈출한다.
*/

let a = 0;
while (a < 10) {
  console.log(a);
  a += 1
}

console.log("----------do-while 문 1----------");
//! 현업사용이 거의 없다.
//* 한번 동작하고 나서 while문을 실행한다.
/* 
let input;
do {
  input = prompt("숫자를 입력하세요");
} while (isNaN(input));
console.log("입력한 숫자는 " + input + "입니다");
 */

console.log("----------do-while 문 2----------");

/* 
let input;
do {
  input = confirm("다음에도 저희와 함께 하시겠습니까?");
} while (!input);
console.log("감사합니다");
*/

console.log("----------구구단 for문----------");

for(let i = 2; i < 10; i++) {
  for(let j = 1; j < 10; j++) {
    let result1 = i * j;
    console.log(`${i} X ${j} = ${result1}`);
  }
}

console.log("----------구구단 while문----------");

let i = 2;
while (i < 10) {
    let j = 1;
    while (j < 10) {
      let result2 = i * j;
      console.log(`${i} X ${j} = ${result2}`);
      j++;
    }
  i++;
  }

console.log("----------문자열 뒤집기for문----------");

let b = "hello world";
let result3 = "";
let result4 = "";
for(let i = 0; i < b.length; i++) {
  result3 = result3 + b[i];
  result4 = b[i] + result4;
}
console.log(result3);
/* 
result3 + b[0] => "" + "h" => "h"
result3 + b[1] => "h" + "e" => "he"
result3 + b[2] => "he" + "l" => "hel"
...
result3 + b[8] => "hello wo" + "r" => "hello wor"
result3 + b[9] => "hello wor" + "l" => "hello worl"
result3 + b[10] => "hello worl" + "d" => "hello world"
*/
console.log("--------------------");

console.log(result4);
/* 
b[0] + result4 => "h" + "" => "h"
b[1] + result4 => "e" + "h" => "eh"
b[2] + result4  => "l" + "eh" => "leh"
...
b[8] + result4 => "r" + "ow olleh" => "row olleh"
b[9] + result4 => "l" + "row olleh" => "lrow olleh"
b[10] + result4 => "d" + "lrow olleh" => "dlrow olleh"
*/
console.log("----------문자열 뒤집기while문----------");

let c = "hello world";
let result5 = "";
let result6 = "";
let count1 = 0;
while (count1 < c.length) {
  result5 =  result5 + c[count1];
  result6 = c[count1] + result6;
  count1++;
}
console.log(result5);
console.log("--------------------");
console.log(result6);