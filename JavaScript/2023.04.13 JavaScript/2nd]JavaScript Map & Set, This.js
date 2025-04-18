/**
 * set, map, object, array, string이 이터러블 객체인지? 순서는 보장하는지?
 * 
 * 이터러블한 객체란 순회가 가능한 객체이다.
 * 순회가 가능한 객체로는 set, map, array, string이 이에 포함된다.
 * 
 * 순서를 보장하는가?
 * 
 * set, map, array, string은 순서를 보장하나 object는 순서를 보장하지 않는다.
 */

console.log("----------Set 1----------");
//* 가지고 있기

// 합집합
let set1 = new Set("abc");
let set2 = new Set("cde");
let set3 = new Set([...set1].concat(...set2));
console.log(set3);

console.log("----------Set 2----------");

// 차집합
let set4 = new Set("abc");
let set5 = new Set("cde");
let dif1 = [...set4].filter(e => !set5.has(e));
console.log(dif1);

console.log("----------this 1----------");
// 자신을 호출한 객체, 자신이 생성할 객체

let myObj1 = {
  val1: 100,
  func1: function () {
    console.log(this);
  }
}
myObj1.func1();

console.log("----------this 2----------");

let myObj2 = {
  val1: 100,
  func2: function () {
    console.log(this);
  }
}
let test1 = myObj2.func2;
test1();