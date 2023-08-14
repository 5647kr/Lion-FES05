console.log("----------반복문 1----------");
// 구식문법(구버전 브라우저를 호환하기 위해 사용한다.)
for(let i = 0; i < 10; i++) {
  console.log(10);
}

console.log("----------반복문 2----------");

let arr1 = [10, 20, 30, 40, 50];
for(let i = 0; i < arr1.length; i++) {
  //* length는 5 index는 0~4이기 때문에 다 가져올 수 있는 것이다.
  console.log(arr1[i]); // i가 index를 가져온다.
}

console.log("----------반복문 for in 1----------");

// airbnb 컨벤션에 권장
// IE에서 사용가능
let arr2 = [10, 20, 30, 40, 50];
for(const i in arr2) {
  //* arr2에 index를 가져와서 i에 넣어준다.
  console.log(i);
  console.log(arr2[i]); // i가 index를 가져온다
}

console.log("----------반복문 for in 2----------");

let arr3 = [10, 20, 30, 40, 50];
let obj1 = {"one": 10, "two": 20};
for(const i in obj1) {
  console.log(i);
  console.log(obj1[i]); // i가 key를 가져온다
}

console.log("----------반복문 for in 3----------");

for(const i in ".".repeat(10)) {
  console.log(i);
}

console.log("----------반복문 for of 1----------");

// airbnb 컨벤션에 권장
// IE에서 사용불가
// 객체와 배열을 순회할 때 사용한다.

let arr4 = [10, 20, 30, 40, 50];
for(const i of arr4) {
  console.log(i); // item을 가져온다.
}

console.log("----------반복문 for of 2----------");

let sum1 = 0;
let arr5 = [10, 20, 30, 40, 50];
for(const i of arr5) {
  sum1 += i;
}
console.log(sum1);
// 배열의 값을 더할때는 of가 좋다.

console.log("----------반복문 for of 3----------");

for(const i of "hello world") {
  console.log(i);
}

console.log("----------반복문 for in vs for of----------");

let arr6 = [10, 20, 30, 40, 50];

for(const i in arr6) {
  console.log(i);
}
for(const i of arr6) {
  console.log(i);
}

console.log("----------문제 1----------");

// 문제1
s1 = [1, 3, 4, 8, 13, 17, 20];
for(let i = 0; i < s1.length-1; i++) {
  console.log(s1[i], s1[i+1]);
  console.log(s1[i+1] - s1[i]);
}

console.log("----------문제 1----------");

// 문제1 같은 코드
s2 = [1, 3, 4, 8, 13, 17, 20];
for(let i = 1; i < s2.length; i++) {
  console.log(s2[i-1], s2[i]);
  console.log(s2[i] - s2[i-1]);
}

console.log("----------문제 1----------");

// 문제1 같은 코드
s3 = [1, 3, 4, 8, 13, 17, 20];
for(const i in s3) {
  console.log(parseInt(i));
  console.log(s3[i], s3[parseInt(i)+1]);
}

console.log("----------문제 2----------");

// 실습

// 수학 점수의 반평균을 구하세요
수학점수 = [10, 99, 89, 70]
/* 
tip
1. 
(수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3]) / 수학점수.length
반복문 부분을 구분하기
2. 
*/

let s4 = 0
for(let i = 0; i < 수학점수.length; i++) {
  s4 += 수학점수[i]
}
console.log(s4 / 수학점수.length)

console.log("----------문제 3----------");

// 실습
// 다음 user의 나이 평균을 구하세요

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
  }
]
/* 
age[0] + age[1] + age[2] / user.length
31         32        39
*/
let s5 = 0;
for(let i = 0; i < user1.length; i++) {
  s5 += user1[i]["age"];
}
console.log(s5 / user1.length);

console.log("----------문제 3 해설----------");

let user2 = [
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
  }
]

let average2 = 0;
for(let i = 0; i < user2.length; i++) {
  console.log(user2[i]["age"]);
  average2 += user2[i]["age"];
}
console.log(average2 / user2.length)
console.log(Math.floor(average2 / user2.length));
console.log((average2 / user2.length).toFixed(2))
