console.log("----------객체지향 1----------");
// 객체들을 만들어서 서로 소통하도록 하는 방법을 말한다.
// 객체지향에서의 객체는 구체적인 사물을 추상적으로 표현하는 것이라 볼 수 있다.
// 객체는 행동과 상태를 가지며, 행동은 메소드, 상태는 포로퍼티로 이해할 수 있다.
// 아래에서 프로퍼티 즉 상태는 (name, address, phoneNum) / 메소드 즉 행동은 canWalk라는 함수 이다.

const me = {
  name : '웨이드',
  address : '제주도 제주시 인다 1길',
  phoneNum : '010-8001-6536',
  canWalk : function(){
    console.log('웨이드가 걷는다.');
  },
  teaching : function(myStudent){
    myStudent.levelUp();
  }
}

const student = {
  level: 1,
  levelUp : function(){
    this.level++;
  }
}

me.teaching(student)
console.log(student);

console.log("----------객체지향 2----------");

// 나만의 것으로 바꿔보기

const MW = {
  name: "ks",
  job: "hunter",
  몬스터토벌수: 0,
  HunterRank: 1,
  hunting: function () {
    this.몬스터토벌수++;
    this.HunterRank++;
    console.log(`몬스터 토벌 수: ${this.몬스터토벌수}, HunterRank: ${this.HunterRank}`);
  }
};
MW.hunting();
MW.hunting();
MW.hunting();
MW.hunting();
MW.hunting();

console.log("----------생성자 1----------");

// 객체를 만들 때 new 연산자와 함께 사용하는 함수이다.
// 생성자를 통해 생성된 객체는 같은 프로퍼티와 메서드를 공유할 수 있다.
let arr1 = new Array(1,2,3);
let arr2 = new Array(4,5,6);

console.log(arr1.length); 
console.log(arr2.length); 

console.log("----------생성자 2----------");

// 사용자 정의 타입: 사용자가 직접 만든 생성자를 통해 생성된 인스턴스를 의미한다.
// 자바스크립트의 생성자는 함수이기 때문에 함수 만드는것과 동일하게 시작한다.
// 생성자 함수는 암묵적으로 대문자로 시작하는 이름을 가지며 new 키워드를 통해 객체를 생성한다.
// 반환되어 만들어진 객체를 인스턴스(instance)라 한다.

function Factory1() {}
let result1 = Factory1();
console.log(result1);

function Factory2() {}
let result2 = new Factory2();
console.log(result2);
// result2는 Factory2()생성자의 인스턴스다.
// result2는 객체다.

// 생성자 함수와 객체의 관계는 instanceof로 확인할 수 있다.
console.log(result1 instanceof Factory1); 
console.log(result2 instanceof Factory2); 

console.log("----------생성자 3----------");

function Factory3(name) {
  this.name = name;
  this.sayname = function () {
    console.log(`삐리삐리... 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

const robot1 = new Factory3("파파고");

console.log(robot1);
robot1.sayname();