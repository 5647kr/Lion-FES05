// 구식문법(구버전 브라우저를 호환하기 위해 사용한다.)
for(let i = 0; i < 10; i++) {
  console.log(10);
}

console.log("-------------------------");

console.log("for문");
let arr1 = [10, 20, 30, 40, 50];
for(let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

console.log("-------------------------");

// airbnb 컨벤션에 권장
// IE에서 사용가능
console.log("for in1");
let arr2 = [10, 20, 30, 40, 50];
for(const i in arr2) {
  console.log(arr2[i]); // i가 index를 가져온다
}

console.log("-------------------------");

console.log("for in2");
let arr3 = [10, 20, 30, 40, 50];
let obj1 = {"one": 10, "two": 20};
for(const i in obj1) {
  console.log(obj1[i]); // i가 key를 가져온다
}

console.log("-------------------------");

// airbnb 컨벤션에 권장
// IE에서 사용불가
console.log("for of1");
let arr4 = [10, 20, 30, 40, 50];
let obj2 = {"one": 10, "two": 20};
for(const i of arr4) {
  console.log(i);
}

console.log("-------------------------");

console.log("for of2");
let sum1 = 0;
let arr5 = [10, 20, 30, 40, 50];
let obj3 = {"one": 10, "two": 20};
for(const i of arr4) {
  sum1 += i
}
console.log(sum1);
// 배열의 값을 더할때는 of가 좋다.

console.log("-------------------------");

console.log("for of3");
for(const i of "hello world") {
  console.log(i);
}

console.log("-------------------------");

// 문제1
s = [1, 3, 4, 8, 13, 17, 20];
for(let i = 0; i < s.length-1; i++) {
  console.log(s[i], s[i+1]);
  console.log(s[i+1] - s[i]);
}

console.log("-------------------------");

// 문제1 같은 코드
s = [1, 3, 4, 8, 13, 17, 20];
for(let i = 1; i < s.length; i++) {
  console.log(s[i-1], s[i]);
  console.log(s[i] - s[i-1]);
}

console.log("-------------------------");

// 문제1 같은 코드
s = [1, 3, 4, 8, 13, 17, 20];
for(const i in s) {
  console.log(parseInt(i));
  console.log(s[i], s[parseInt(i)+1]);
}

console.log("-------------------------");

// 실습
/* 
수학 점수의 반평균을 구하세요
수학점수 = [10, 99, 89, 70, 55, 40]
tip
1. 
(수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3]) / 수학점수.length
반복문 부분을 구분하기
2. 

let s = 0
for(let i = 0; i < 수학점수.length; i++) {
  s += 수학점수[i]
}
console.log(s / 수학점수.length)
*/

console.log("-------------------------");

// 실습
// 다음 user의 나이 평균을 구하세요

let user1 = [
  {
    "_id": "642e3071c61a23c70ae6076b",
    "index": 0,
    "age": 31,
    "name": "Hicks Garza",
    "gender": "male",
  },
  {
    "_id": "642e3071ecd6f90a87d64731",
    "index": 1,
    "age": 32,
    "name": "Ayers Harrington",
    "gender": "male",
  },
  {
    "_id": "642e3071cef9ddc131f047fb",
    "index": 2,
    "age": 39,
    "name": "Lamb Adams",
    "gender": "male",
  }
]
console.log(user1.length);

let average1 = 0;
for(let i = 0; i < user1[age].length; i++) {
  age += user1[age];
}
console.log(average1 / user1[age].length);


console.log("-------------------------");

// 해설
let user2 = [
  {
    "_id": "642e3071c61a23c70ae6076b",
    "index": 0,
    "age": 31,
    "name": "Hicks Garza",
    "gender": "male",
  },
  {
    "_id": "642e3071ecd6f90a87d64731",
    "index": 1,
    "age": 32,
    "name": "Ayers Harrington",
    "gender": "male",
  },
  {
    "_id": "642e3071cef9ddc131f047fb",
    "index": 2,
    "age": 39,
    "name": "Lamb Adams",
    "gender": "male",
  }
]

let average2 = 0;
for(let i = 0; i < user2.length; i++) {
  console.log(user2[i]["age"]);
  average1 += user2[i]["age"];
}
console.log(average2 / user2.length)
console.log((s / user.length).toFixed(2))