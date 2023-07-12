console.log("----------sort 1----------");

// sort는 배열의 요소를 정렬하는데 숫자를 정렬할땐 제대로 되지 않는다.
const avengers = ["아이언맨", "스파이더맨", "헐크", "토르"];
console.log(avengers.sort());

console.log("----------sort 2----------");

const num1 = [3, 1, 8, 6];
console.log(num1.sort());

console.log("----------sort 3----------");

const num2 = [3, 1, 11, 8, 6];
console.log(num2.sort());

console.log("----------sort 4----------");

const num3 = [3, 1, 11, 8, 6];
console.log(num3.sort((a, b) => a - b)); // 오름차순

console.log("----------sort 5----------");

const num4 = [3, 1, 11, 8, 6];
console.log(num4.sort((a, b) => b - a)); // 내림차순

console.log("----------sort 6----------");

// deep하게 sort를 공부하겠다

const num5 = [3, 1, 11, 8, 6];
console.log(num5.sort((a, b) => {
  console.log(a, b);
  console.log(a - b);
  }));

//참고URL: https://www.notion.so/paullabworkspace/JavaScript-sort-compare-function-ff38f176e79e4c5d9ade9c4734620ffd

console.log("----------sort 실무 사용----------");


function sort(key){
  if (click){
    click = false
    var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
  }
  else{
    click = true
    var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
  }
}

console.log("----------객체 1----------");

//* 키 와 값이 쌍으로 이루어져 있다.

const human = {
  name: "hojun",
  age: 53,
  from: "korea",
  askingHim: function () {
    console.log("hello world");
  },
  0: "01050442903"
};
console.log(human.name);
console.log(human.age);
console.log(human["name"]);
console.log(human["age"]);
console.log(human[0]);
console.log(human["0"]);

console.log("----------객체 2----------");

const arr1 = {
  0: 10,
  1: 20,
  2: 30,
  length: 3
};
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1.length);

//! 배열이 아닌, 유사배열객체라고 한다.
// 똑같은 요소로 만들어도 arr1이 순회할 때 더 빠르다.
// 유사배열객체는 실무에서는 사용하지 않는다.
