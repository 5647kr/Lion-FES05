console.log("----------This call 1----------");
// 메소드의 인수에

var peter = {
  name: "peter parker",
  sayName: function () {
    console.log(this.name);
  }
}
var bruce = {
  name: "bruce wayne"
}
peter.sayName()
peter.sayName.call(bruce)

console.log("----------This call 2----------");

var peter = {
  name: "peter parker",
  sayName: function (감탄사) {
    console.log(this.name + 감탄사);
  }
}
var bruce = {
  name: "bruce wayne"
}
peter.sayName("!")
peter.sayName.call(bruce, "!")

console.log("----------This apply 1----------");

var peter = {
  name: "peter parker",
  sayName: function (is, is2) {
    console.log(this.name + " is " + is + " or " + is2);
  }
}
var bruce = {
  name: "bruce wayne"
}
peter.sayName.apply(bruce, ["batman", "richman"])

console.log("----------This apply vs this call----------");

var peter = {
  name: "peter parker",
  sayName: function (감탄사1, 감탄사2) {
    console.log(this.name + 감탄사1 + 감탄사2);
  }
}
var bruce = {
  name: "bruce wayne"
}
peter.sayName.call(bruce, "!", "!!")
/* 
// call과 apply 비교
// 비교1
var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사1, 감탄사2) {
        console.log(this.name + 감탄사1 + 감탄사2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce, '!', '!!');

// 비교2
var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사1, 감탄사2) {
        console.log(this.name + 감탄사1 + 감탄사2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce, ['!', '!!']);
*/

console.log("----------This bind 1----------");

function sayName() {
  console.log(this.name);
}
var bruce = {
  name: 'bruce',
  sayName: sayName
}
var peter = {
  name: 'peter',
  sayName: sayName.bind(bruce)
}
peter.sayName();
bruce.sayName();

console.log("----------This 특이사항 1----------");
// 이름이 있는 함수 안에서 정의된 함수의 경우 this는 전역을 바라보게 된다.
// a함수는 object안에 함수이다.
/* 
const person = {
  name: 'hojun',
  age: 25,
  a() {
    console.log(this);
    console.log(this.name);
    function b() {
      console.log(this);
      console.log(this.name);
      function c() {
          console.log(this);
          console.log(this.name);
      }
      c()
    }
    b()
  }
}
person.a();
*/
console.log("----------This 특이사항 2----------");
// a에서 this = person
// b에서 this = 상위스코프(상위에서 person을 보고 있음) 즉, person
// c에서 this = 상위스코프(상위에서 person을 보고 있음) 즉, person
const person1 = {
  name: 'hojun',
  age: 25,
  a() {
      console.log(this);
      console.log(this.name);
      let b = () => {
          console.log(this);
          console.log(this.name);
          let c = () => {
              console.log(this);
              console.log(this.name);
          }
          c()
      }
      b()
  }
}
person1.a()

console.log("----------This 특이사항 3----------");

let a = () => {
  console.log(this);
  console.log(this.name);
  let b = () => {
      console.log(this);
      console.log(this.name);
      let c = () => {
          console.log(this);
          console.log(this.name);
      }
      c()
  }
  b()
}
person1.a()

console.log("----------This 특이사항 4----------");
/* 
[1, 2, 3].forEach(function () { //* window
  console.log(this);
})
*/

[1, 2, 3].forEach(function () {
  console.log(this);
}, [10, 20, 30])

console.log("----------This 특이사항 5----------");

let 인세규정 = {
  책: 10,
  영상콘텐츠: 50
};
function 인세계산함수책(e) {
  return e * (this.책 / 100)
}
function 인세계산함수영상(e) {
  return e * (this.영상콘텐츠 / 100)
}
console.log([100, 200, 300].map(인세계산함수책, 인세규정));
console.log([100, 200, 300].map(인세계산함수영상, 인세규정));
/* 
[100, 200, 300].forEach(function (v) {
  console.log(v);
  console.log(this);
})
*/

console.log("----------This 특이사항 6----------");

// 1. 전역공간의 this는 window(node는 global) → 실제로는 window.globalThis, window.this 아닙니다. [자바스크립트에서 `globalThis`의 소름끼치는 폴리필](https://ui.toast.com/weekly-pick/ko_20190503)
// 2. 메서드로 호출한 경우 this는 멤버접근연산자 앞에 객체
// 3. 함수로 호출할 경우 this는 window(node는 global)
// 4. 화살표 함수의 경우 this는 상위스코프
// 5. 생성자 함수의 경우 this는 인스턴스
// 6. 콜백함수의 경우 this가 다르게 동작 할 수 있음

// this 출력
let newBook = new Book("JavaSCript", 100000, "홍길동", "2023.04.12")
// new 키워드를 사용했을 때 일어나는 일
function Book(책이름, 책가격, 저자, 출판일) {
  this.출력 = function (){
    console.log(this)
  }
  this.책이름 = 책이름
  this.책가격 = 책가격
  this.저자 = 저자
  this.출판일 = 출판일    
  // return this
}
