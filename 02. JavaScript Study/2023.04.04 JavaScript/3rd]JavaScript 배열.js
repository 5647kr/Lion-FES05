const arr1 = [10, 20, 30, 40, 50];
console.log("splice 삭제1");
console.log(arr1.splice(1));
// 1: 첫번째에서 그 이후로 삭제한다.
console.log(arr1);

console.log("-------------------------");

const arr2 = [10, 20, 30, 40, 50];
console.log("splice 삭제2");
console.log(arr2.splice(2));
// 1: 첫번째에서 그 이후로 삭제한다.
console.log(arr2);

console.log("-------------------------");

// slice(start, end): 자르지만 원본은 살아 있다. end는 하나 전까지 자른다.

const arr3 = ["사과", "바나나", "체리", "두리안", "베리", "딸기", "복숭아"];
console.log("slice1");
console.log(arr3.slice(1, 4));
// slice(1, 4): 1부터 4전까지 자른다.
console.log(arr3);

console.log("-------------------------");

const arr4 = ["사과", "바나나", "체리", "두리안", "베리", "딸기", "복숭아"];
console.log("slice2");
console.log(arr4.slice(1));
// slice(1, 4): 1부터 그 이후로 자른다.
console.log(arr4);

console.log("-------------------------");

// forEach: 배열의 각 요소에 대해 주어진 함수를 실행한다.

const arr5 = [10, 20, 30, 40, 50];
console.log("forEach1");
arr5.forEach(function(item, index) {
  console.log(index, item);
  // 10은 item, 0은 index
})

console.log("-------------------------");

const arr6 = [10, 20, 30, 40, 50];
console.log("forEach2");
arr6.forEach(function(item, index) {
  console.log(index, item);
  console.log("hello");
  console.log("world");
  // 순서대로 작성된다.
})

console.log("-------------------------");

const arr7 = [10, 20, 30, 40, 50];
console.log("forEach3");
arr7.forEach(function(item, index, arr7) {
  console.log(index, item, arr7);
  console.log("hello");
  console.log("world");
})

console.log("-------------------------");

// 실무에서 사용하지 않는 코드
console.log("0~99까지 배열 만드는 연습");
const arr8 = Array(100).fill(0);
// 0이 100개 생성됨
console.log(arr8);
const arr9 = [];

arr8.forEach(function (item, index) {
  arr9.push(index);
})
console.log(arr9);

console.log("-------------------------");

console.log("1~100까지 배열 만드는 연습");
const arr10 = Array(100).fill(0);
// 0이 100개 생성됨
const arr11 = [];
// 이름없는 함수
arr10.forEach(function (item, index) {
  arr11.push(index+1)
})
console.log(arr11);

console.log("-------------------------");

console.log("1~100까지 배열 만드는 연습1");
const arr12 = Array(100).fill(0);
// 0이 100개 생성됨
const arr13 = [];
//  화살표 함수사용
arr12.forEach((item, index) => {
  arr13.push(index+1);
})
console.log(arr13);

console.log("-------------------------");

console.log("1~100까지 배열 만드는 연습2");
const arr14 = Array(100).fill(0);
// 0이 100개 생성됨
const arr15 = [];
// 화살표 함수사용
arr14.forEach((item, index) => arr15.push(index+1))
console.log(arr15);
// 실행코드가 한줄이라면 {}도 생략할 수 있다.

console.log("-------------------------");

// map: 데이터를 뽑는 용도로 사용하고 forEach랑 다르게 새로운 배열을 생성한다.

const arr16 = [1, 2, 3];
arr16.map(function (a) {
  return a ** 2;
})
console.log(a);



// slice 실무 팁
let tip1 = [1, 2, 3, 4, 5];
console.log([tip1.slice(0, 2), 1000, tip1.slice(2, 5)]);
console.log([...tip1.slice(0, 2), 1000, ...tip1.slice(2, 5)]);

let tip2 = [1, 2, 3, 4, 5];
tip2.splice(2, 0, 1000);