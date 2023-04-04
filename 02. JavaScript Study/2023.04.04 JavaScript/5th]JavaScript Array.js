const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr1.filter(function (el) {
  return el % 2 === 0
})

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2.filter(function (el) {
  return el % 2 !== 0
})

// 모음 제거
Array.from("hello world").filter(v => !["a", "e", "i", "o", "u"].includes(v));
console.log(Array.from("hello world").filter(v => !["a", "e", "i", "o", "u"].includes(v))); 

// reduce
// 0을 항상 넣어준다.
const arr3 = [1, 2, 3, 4, 5];
arr3.reduce((a, c) => a + c, 0);
console.log(arr3.reduce((a, c) => a + c, 0));

// includes
const arr4 = ["hello", "world", "hojun"];
console.log(arr4.includes("world"));
console.log(arr4.includes("leehojun"));
console.log(arr4.includes("jun"));

// join
const arr5 = ["hello", "world", "hojun"];
console.log(arr5.join("!"));

const arr6 = ["010", "5044", "2903"];
console.log(arr6.join("-"));

// 잠시 2진법
/* 
0b100: 4 (b는 바이너리의 약자이다.)
0o100: 64 (o는 옥타의 약자이다.)
0x100: 256 (x는 헥사를 표현한다. 16진법)
*/