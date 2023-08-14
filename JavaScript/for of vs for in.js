// 반복문
/* 
1. 코드 단순 반복
2. 자료형에 담긴 자료들을 꺼내고 싶을 때
*/

// 배열 등과 함께 사용한다.
// 1. 배열의 요소 개수만큼 반복이 일어난다.
// 2. 각각의 반복에서 반복 변수에 요소가 하나씩 들어간다.

console.log("----------for in----------");

//for in
// 배열의 반복보다는 객체의 속성을 확인하는 경우에 사용한다.
// 객체의 모든 열거 가능한 속성에 대해 반복한다.
// 객체와 배열을 순회할때 사용한다.
const object1 = {
    name: "kim",
    age: 30,
    job: "programmer"
};

for (const key in object1) {
    console.log(key);
}
console.log(Object.getOwnPropertyDescriptor(object1, "name"));
/* getOwnPropertyDescriptor: 객체 속성에 대한 속성 설명자를 반환한다.
value: 속성과 관련된 값
writable: 속성과 관련된 값이 변경될 수 있는 경우에만 true
enumerable: 속성이 객체의 속성 열거 중에 나타나는 경우 true
configurable: 속성이 해당 객체에서 삭제될 수 있는 경우 true
*/
// enumerable이란 값이 true인 자료들만 for in문에 출력한다.

// false를 강제적으로 만들면 출력되지 않는다.
Object.defineProperty(object1, "name", {
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(object1, "name"));
for (const key in object1) {
    console.log(key);
}
console.log(object1.hasOwnProperty("school"));
// hasOwnProperty: 오브젝트가 key값을 직접 가지고 있냐고 물어보는 함수다
// 있으면 true, 없으면 false

console.log("----------반복문 for in 1----------");

// airbnb 컨벤션에 권장
// IE에서 사용가능
let arr1 = [10, 20, 30, 40, 50];
for (const i in arr1) {
    //* arr2에 index를 가져와서 i에 넣어준다.
    console.log(i);
    console.log(arr1[i]); // i가 index를 가져온다
}

console.log("----------반복문 for in 2----------");

let obj1 = { "one": 10, "two": 20 };
for (const i in obj1) {
    console.log(i);
    console.log(obj1[i]); // i가 key를 가져온다
}

console.log("----------반복문 for in 3----------");

for (const i in "hello world") {
    console.log(i);
}

// ! for in 문구 보완 시작! 🙋🏻‍♀️
// 위에서 for in 반복문 예시를 통해 확인했듯 for...in 루프는 Object의 key를 순회하기 위해 사용.
// object의 key를 순회하기 위해 사용하는것이 아니라면 사용하지 않는 것을 권장하는 이유는 다음과 같다.


console.log("----------for in의 오류 1----------");
// 1. 성능 문제
// JavaScript loop중 명확한 속도 차이가 있는 것은 for-in문 뿐이다.
// for in loop를 반복할때마다 인스턴스 또는 프로토타입 체인을 검색해야 한다.
// 결과적으로 for...of"를 비롯해 배열 메소드"forEach", "map", "filter" 등과 같은 방법보다 속도가 느림.
// 프로토타입 체인이란? https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

// 1-1. Array.prototype에 customProperty를 추가.
Array.prototype.customProperty = 'This is a custom property on the Array prototype';

// 1-2. for..in loop를 사용할 myArray1 배열을 생성.
const arr2 = [1, 2, 3, 4, 5];

// 1-3. for in loop를 사용하면 customProperty도 출력됨.
for (const index in arr2) {
    console.log(arr2[index]);
}
// => 1, 2, 3, 4, 5, This is a custom property on the Array prototype

console.log("----------for in의 오류 2----------");
// 2. 반환 문제
// Array에 for..in loop를 활용하면 index에 할당되는 Number가 아닌 String으로 반환.
const arr3 = [10, 20, 30];
for (const key in arr3) {
    console.log(parseInt(key) + 100);
}
// 숫자 연산을 하려면 번거로움.
// key + 100 = 0100, 1100, 2100
// parseInt(key) + 100 = 100, 101, 102


console.log("----------for of----------");
// 반복 가능한 객체(Array, Map, Set, String, TypeArray, Argument)에 사용한다.
// iterable 자료형에만 적용 가능한 반복문이다.
// 배열이 가장 대표적인 iterable 자료형이다.

const object2 = {
  a: 1,
  b: 2,
  c: 3
};

for(const item of object2) {
  console.log(item);
}

//* 객체는 iterable하지 않고 enumerable하다. 즉, 반복적이지 않고 열거적이다. => [Symbol.literator].property가 없다. => error가 뜬다.

console.log("----------반복문 for of 1----------");

// airbnb 컨벤션에 권장
// IE에서 사용불가
// 객체와 배열을 순회할 때 사용한다.
// for...in 처럼 Object의 key 또는 index를 반복하는 게 아니라 요소를 직접 반복.

// Array 사용
let arr4 = [10, 20, 30, 40, 50];
for(const i of arr4) {
  console.log(i); // item을 가져온다.
}

console.log("----------반복문 for of 2----------");

let sum1 = 0;
let arr5 = [10, 20, 30, 40, 50];
for(const i of arr5) {
  sum1 += i; // sum1 = sum1 + i
}
console.log(sum1);
// 배열의 값을 더할때는 in보다는 of가 좋다.

console.log("----------반복문 for of 3----------");
// string 사용
for(const i of "hello world") {
  console.log(i);
}

console.log("----------반복문 for of 4----------");
// map 사용
const map = new Map([
  ["one", 1],
  ["two", 2],
  ["three", 3]
]);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

console.log("----------for in vs for of----------");

let arr6 = [10, 20, 30, 40, 50];
console.log(typeof arr6);
for(const key in arr6) {
  console.log(key);
}

for(const value of arr6) {
  console.log(value);
}
// 주요 차이점: 무엇을 반복하는가?
// 정리
// for... in : 객체, 배열, 콜렉션 모두 사용가능, enumerable, 배열: 가능하나 추천하지 않고 객체에서 사용하는걸 권장한다.
// for... of : 객체 사용불가, 콜렉션만 사용가능, iterable, 배열(객체): 가능
// ! 콜렉션이란?
// * 프로그래밍 언어가 제공하는 값을 담을 수 있는 컨테니어로 Indexed Collection(Array, Typed Array), Keyed Collection(Objects, Map, Set, Weak Map, Weak Set)이 있다.
// collection안에는 iterable하지 않은 콜렉션도 있다. 즉 for of의 경우 콜렉션 중 iterable한 것만, for in은 콜렉션 모두 사용이 가능하다.
//* 배열도 객체이기 때문에 객체의 key값에 해당하는게 나오는데, 배열에서는 index라 생각하면 된다.
//! 가장 큰 차이점: for in은 key를 순회 / for of는 value를 순회

/* 
set, map, object, array, string이 이터러블객체인지 순서는 보장하는지?
이터러블한 객체란 순회가 가능한 객체로 set, map, array, string

순서가 보장하는가 (object는 순서를 보장하지 않는다.)
set, map, array, string
*/