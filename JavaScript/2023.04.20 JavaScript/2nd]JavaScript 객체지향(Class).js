console.log("----------class 실습 해설----------");

class Sausage {
  constructor(el1, el2) {
    this.inside1 = el1;
    this.inside2 = el2;
  }
  taste() {
    console.log(`와~~${this.inside1}맛과 ${this.inside2}맛이 나는 소세지다!!`);
  }
}

class FireSausage extends Sausage {
  constructor(el1, el2, el3) {
    super(el1, el2);
    this.inside3 = el3;
  }
  taste() {
    console.log(`와~~${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}맛이 나는 소세지다!!`);
  }
}

// const FireSausage = new FireSausage("파맛", "불맛", "키위맛");

console.log("----------class 비공개 프로퍼티 1----------");

class Robot {
  #password

  constructor(name, pw) {
    this.name = name;
    this.#password = pw;
  }


  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }

  getPassword() {
    return this.#password
  } 

  setPassword(pw) {
    this.#password = pw;
  }
}

console.log("----------class 비공개 프로퍼티 2----------");

function PersonGenrator() {
  let age = 25;

  function InnerPersonType() { };

  InnerPersonType.prototype.getAge = function () {
    return age;
  }

  return InnerPersonType;
}

const Person = PersonGenrator();
const myPerson = new Person();

const PersonGenerator2 = (function () {
  let age = 25;

  function InnerPersonType() { };

  InnerPersonType.prototype.getAge = function () {
    return age;
  }

  return InnerPersonType;
})();

const myPerson2 = new PersonGenerator2();