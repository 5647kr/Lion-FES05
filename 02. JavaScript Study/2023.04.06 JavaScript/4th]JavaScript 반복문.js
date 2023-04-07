console.log("----------문제 1 심화(age 삭제 1)----------");

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

let average1 = 0
for (const i of user1) {
  console.log(i)
  console.log(i.age) // 마지막 undefined
  console.log(average1) // 마지막 102
  average1 += i.age ?? 0 // undefined + 102 => NaN
}
console.log((average1 / user1.length).toFixed(2))

console.log("----------문제 1 심화(age 삭제 2)----------");

console.log(user1.map((v, i) => v.age));
for(const i of user1.map((v, i) => v.age)) {
  if(!!i) {
    average1 += i
  }
}
console.log((average1 / user1.length).toFixed(2));

console.log("----------부정연산자----------");

console.log(!true);
console.log(!false);
console.log(!!1);
console.log(!!0);
console.log(!!-1);
console.log(!!"hello");
console.log(!!NaN);
console.log(!NaN);
console.log(!!undefined);
console.log(!undefined);
console.log(!!null);
console.log(!null);

console.log("----------Q. for-of, for-in는 왜 const가 가능할까----------");

// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst

console.log("----------for문 const: error----------");
/* 
for (const i = 0; i < 10; i++) {
  console.log(10);
}
*/
console.log("----------for문 const: error----------");
/* 
{
  const x = 10
  console.log(x)
}
console.log(x) //! error
*/