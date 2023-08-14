console.log("----------객체의 상속 1----------");

const obj = {
  name: "test"
};
console.log(obj.hasOwnProperty("name"));

const arr = [1, 2, 3];
console.log(arr.hasOwnProperty("name"));

console.log(Array.__proto__ === Object.__proto__); 
console.log(arr.__proto__ === Array.prototype); 

console.log("----------객체의 상속 2----------");

function parent() {
  this.name = "재현";
}
parent.prototype.rename = function (name) {
  this.name = name;
}
parent.prototype.sayName = function () {
  console.log(this.name);
}

console.log("----------객체의 상속 3----------");

function Child() {
  parent.call(this)
}

Child.prototype = Object.create(parent.prototype);
Child.prototype.canWalk = function () {
  console.log("hello world");
}

console.log("----------class----------");

// 객체를 생산하는 생산 도면이라 표현한다.
// (ex. 붕어빵 틀(class), -객체-> 붕어빵(인스턴스))

// class 사용법: class 키워드 + 이름 + 중괄호
/* 
class Classname(대문자로 작성한다) {

}
*/
class Robot {
  constructor(name) {
    this.name = name;
    }
  
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
  }

console.log("----------class 실습----------");

// 실습하기

console.log("----------class 상속----------");
