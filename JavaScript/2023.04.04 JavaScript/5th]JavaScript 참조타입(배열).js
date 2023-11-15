console.log("==========Array filter 1==========");

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = arr1.filter(function (el) {
  return el % 2 === 0
})
console.log(arr2);

console.log("==========Array filter 2==========");

//모음 제거

Array.from("hello world").filter(v => !["a", "e", "i", "o", "u"].includes(v));
console.log(Array.from("hello world").filter(v => !["a", "e", "i", "o", "u"].includes(v))); 

console.log("==========Array reduce==========");

// 배열 값 더하기

const arr3 = [1, 2, 3, 4, 5];
arr3.reduce((a, c) => a + c, 0); // 0(초기값)을 항상 넣어줘야한다, 배열의 값을 합한다
// accumulator: 더한 값(초기값 0 + 1) -> 1
// currentValue: 다음으로 넘어가는 값


console.log(arr3.reduce((a, c) => a + c, 0));

console.log("==========Array includes==========");

// 값이 포함되어 있느냐를 boolean값으로 출력한다.

const arr4 = ["hello", "world", "hojun"];
console.log(arr4.includes("world"));
console.log(arr4.includes("leehojun"));
console.log(arr4.includes("jun"));

console.log("==========Array join==========");

// 값 사이사이 join값이 붙는다.

const arr5 = ["hello", "world", "hojun"];
console.log(arr5.join("!"));

const arr6 = ["010", "5044", "2903"];
console.log(arr6.join("-"));

/* 
const arr7 = [010, 5044, 2903];
console.log(arr7.join("-"));
8-5044-2903으로 출력됨 이진법
*/

console.log("==========2진법==========");

/* 
0b100: 4 (b는 바이너리의 약자이다.)
0o100: 64 (o는 옥타의 약자이다.)
0x100: 256 (x는 헥사를 표현한다. 16진법)
*/