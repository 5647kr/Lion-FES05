const arr1 = [10, 20, 30, 40, 50];
arr1.splice(1);
console.log(arr1);

// arr.slice(start, end)

const arr2 = ["사과", "바나나", "체리", "두리안", "베리"];
console.log(arr2.slice(1, 4));
console.log(arr2);

console.log("-----------------------------------------------");

// forEach()돌아가면서 작업할때 사용한다.
// forEach(callbackfunction: (value: number, index: number, array: number[])

const arr3 = [10, 20, 30, 40, 50];
arr3.forEach(function(item, index) {
  console.log(index, item);
})

console.log("-----------------------------------------------");

arr3.forEach(function(item, index) {
  console.log(index, item);
  console.log("hello");
  console.log("world");
})

console.log("-----------------------------------------------");

arr3.forEach(function(item, index, arr3) {
  console.log(index, item, arr3);
  console.log("hello");
  console.log("world");
})

console.log("-----------------------------------------------");

const arr4 = Array(100).fill(0);
const arr5 = [];

arr4.forEach(function (item, index) {
  arr5.push(index);
})

// 이름없는 함수 사용: 함수 표현식
arr4.forEach(function (item, index) {
  arr5.push(index+1);
})

// 화살표 함수 사용 
arr4.forEach((item, index) => {
  arr5.push(index+1);
})

// 화살표 함수 사용 (주로 실무에서 사용함)
arr4.forEach((item, index) => arr5.push(index+1))

console.log("-----------------------------------------------");

// map() : 데이터를 뽑는 용도로 사용한다.
// forEach 랑 다르게 새로운 배열을 생성한다.

const arr6 = [1, 2, 3];
arr6.map(function (item, index) {
return x ** 2;
})

arr6.map(function (x) {
return x ** 2;
})

arr6.map(x => x ** 2);

const arr7 = Array(100).fill(0);

// 같은코드1
arr7.map((v, i) => i);

// 같은코드2
arr7.map(function (v, i) {
return i
});

// 같은코드3
function hojun(v, i) {
return i
};
arr7.map(hojun);

// 같은코드4
arr7.map((v, i) => {
return i
});



console.log("-----------------------------------------------");
// slice 실무 팁
let tip1 = [1, 2, 3, 4, 5];
console.log([tip1.slice(0, 2), 1000, tip1.slice(2, 5)]);
console.log([...tip1.slice(0, 2), 1000, ...tip1.slice(2, 5)]);

let tip2 = [1, 2, 3, 4, 5];
tip2.splice(2, 0, 1000);

// const tip12 = [
//   {
//       "_id": "642ba3980785cecff3f39a8d",
//       "index": 0,
//       "age": 28,
//       "eyeColor": "green",
//       "name": "Annette Middleton",
//       "gender": "female",
//       "company": "KINETICA"
//   },
//   {
//       "_id": "642ba398d0fed6e17f2f50c9",
//       "index": 1,
//       "age": 37,
//       "eyeColor": "green",
//       "name": "Kidd Roman",
//       "gender": "male",
//       "company": "AUSTECH"
//   },
//   {
//       "_id": "642ba39827d809511d00dd8d",
//       "index": 2,
//       "age": 39,
//       "eyeColor": "brown",
//       "name": "Best Ratliff",
//       "gender": "male",
//       "company": "PRISMATIC"
//   }
// ]


// askup

// const ages1 = tip12.map((item) => item.age);
// const ages2 = tip12.map((item) => {
//   return item.age
// });
// console.log(ages1, ages2);