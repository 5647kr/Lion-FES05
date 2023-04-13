console.log("----------클로저----------");

function 승수제조기(){
  let value = 0;
  function 승수(){
    return ++value**2
  }
  return 승수
}

let 승 = 승수제조기();
console.log(승()); 
console.log(승()); 
console.log(승()); 
//value //! 출력할 수 없습니다. 은닉화가 된거죠.

console.log("----------생성자 함수 1----------");
// 찍어내는 역할을 한다.
/* 
let book = {
  책이름: "JavaScript",
  책가격: 1000,
  저자: "홍길동",
  출판일: "2023.04.12"
};

let newbook = {};
newbook["책이름"] = "JavaScript"
newbook["책가격"] = 100000
newbook["저자"] = "홍길동"
newbook["출판일"] = "2023.04.12"
console.log(newbook);

function book2(책이름, 책가격, 저자, 출판일) {
  this.책이름 = 책이름
  this.책가격 = 책가격
  this.저자 = 저자
  this.출판일 = 출판일
}
let newbook2 = book("JavaScript", 100000, 홍길동, "2023.04.12");
console.log(newbook2);

let newbook3 = new book("JavaScript", 100000, 홍길동, "2023.04.12");
*/
console.log("----------생성자 함수 2----------");
// new 키워드를 사용했을 때 일어나는 일

/* 
function book(책이름, 책가격, 저자, 출판일) {
  // this = {}
  this.책이름 = 책이름
  this.책가격 = 책가격
  this.저자 = 저자
  this.출판일 = 출판일
  // return this
}
*/
console.log("----------콜백 함수 1----------");
// 콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게!
function one(a, b) {
  console.log(a);
  let result1 = b(...a) * 2;
  return b(...a);
}
console.log(one([10, 20, 11, 21, 19, 17], Math.min)); 

let arr1 = [10, 20, 11, 21, 19, 17];
console.log(arr1.map((v, i) => v * 2));

let arr2 = [10, 20, 11, 21, 19, 17];
function result2(v, i) {
  return v * 2
}
console.log(arr2.map(result2)); 

console.log("----------map & set 1----------");
// map: 키-값 쌍을 가지는 객체 자료형의 한 종류

let map1 = new Map();
// map에 값을 넣는다.
map1.set("하나", 1)
map1.set(2, "둘")
map1.set(true, 3)
map1.set(false, 4)
console.log(map1.get("하나"));
console.log(map1.has("하나"));

//삭제
/* 
map1.delete("하나");
console.log(map1.has("하나"));
*/
console.log(map1);
console.log(map1.size);

map1.set([1, 2, 3], "리얼리?");
console.log(map1.get([1, 2, 3]));

console.log("----------map & set 2----------");

let data1 = new Map([['one', 1], ['two',2]]) // O
let data2 = new Map(Object.entries({'one':1, 'two':2})) // O
// let data3 = new Map({'one':1, 'two':2}) // X
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X
console.log(data1);
console.log(data2);

console.log("----------map & set 3----------");

// 직접 순회가 가능한 Map!
let data = {'one':1, 'two':2}
for (const i of data) { // X 작동되지 않습니다!
  console.log(i)
}

console.log("----------정리----------");
/* 
// 직접 순회가 가능하지 않은 Object!
let data = {'one':1, 'two':2}
for (const i of data) { // X 작동되지 않습니다!
    console.log(i)
}

let data = {'one':1, 'two':2}
for (const i of Object.entries(data)) {
    console.log(i)
}

// 직접 순회가 가능한 Map!
let m = new Map();

m.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)

for (const i of m) {
    console.log(i)
}

let map = new Map(); // 키 값의 중복이 안됩니다.
map.set('이호준', 1)
map.set('이호준', 2)
map.set('이호준', 3)
*/