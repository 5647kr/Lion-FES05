console.log("----------filter----------");

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = arr1.filter(function (el) {
  return el % 2 === 0
})
console.log(arr2);

console.log("----------모음 제거----------");

Array.from("hello world").filter(v => !["a", "e", "i", "o", "u"].includes(v));
console.log(Array.from("hello world").filter(v => !["a", "e", "i", "o", "u"].includes(v))); 

console.log("----------reduce----------");

// 0을 항상 넣어준다.(암기한다.) 배열의 값을 합한다
const arr3 = [1, 2, 3, 4, 5];
arr3.reduce((a, c) => a + c, 0);
console.log(arr3.reduce((a, c) => a + c, 0));

console.log("----------includes----------");

const arr4 = ["hello", "world", "hojun"];
console.log(arr4.includes("world"));
console.log(arr4.includes("leehojun"));
console.log(arr4.includes("jun"));

console.log("----------join----------");

const arr5 = ["hello", "world", "hojun"];
console.log(arr5.join("!"));

const arr6 = ["010", "5044", "2903"];
console.log(arr6.join("-"));

const arr7 = [010, 5044, 2903];
console.log(arr7.join("-"));

console.log("----------2진법----------");

/* 
0b100: 4 (b는 바이너리의 약자이다.)
0o100: 64 (o는 옥타의 약자이다.)
0x100: 256 (x는 헥사를 표현한다. 16진법)
*/