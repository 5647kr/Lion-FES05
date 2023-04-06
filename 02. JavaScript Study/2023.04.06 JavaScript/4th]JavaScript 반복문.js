/* 
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

let average1 = 0;
for(let i = 0; i < user1.length; i++) {
  console.log(user1[i]["age"]);
  average1 += user1[i]["age"];
}
console.log(average1 / user1.length);

let average2 = 0;
for(const i of user1) {
  average2 += i.age
}
console.log((average2 / user1.length).toFixed(2))

let average3 = 0;
for(const i in user1) {
  average3 += user1[i].age
}
console.log((average3 / user1.length).toFixed(2))
*/

console.log("-------------------------");

// 심화 age 삭제

let user = [
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
  },
  {
      "_id": "642e3071cef9ddc131f047fb",
      "index": 2,
      "name": "Lamb Adams",
      "gender": "male",
  }
]

let s = 0
for (const i of user) {
  console.log(i)
  console.log(i.age) // 마지막 undefined
  console.log(s) // 마지막 102
  console.log('----------')
  s += i.age ?? 0 // undefined + 102 => NaN
}
console.log((s / user.length).toFixed(2))

console.log("-------------------------");

console.log(user.map((v, i) => v.age));

console.log("-------------------------");

for(const i of user.map((v, i) => v.age)) {
  if(!!i) {
    s += i
  }
}
console.log((s / user.length).toFixed(2));

console.log("-------------------------");

// why? for of와 for in문는 const가 가능할까?
// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst

/* 
for (const i = 0; i < 10; i++) {
  console.log(10);
} // error
{
  const x = 10
  console.log(x)
}
console.log(x)

for (const i in [1, 2, 3]) {
  console.log(i)
}

for (const i of [1, 2, 3]) {
  console.log(i)
}
*/