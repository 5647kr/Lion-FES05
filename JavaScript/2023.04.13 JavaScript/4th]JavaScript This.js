console.log("----------This 1----------");

function sayName() {
  console.log(this.name);
}

console.log("----------This 2----------");

function attackBeam() {
  this.hp -= 20
}
function attackKnife() {
  this.hp -= 5
}
let jombie = {
  name: "jombie",
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 10000,
  power: 2
};
let thanos = {
  name: "thanos",
  damaged: attackBeam,
  hp: 1000,
  power: 100
};

jombie.damaged1();
jombie.damaged2();
console.log(jombie.hp);

console.log("----------This 3----------");

let 호텔 = [{
  '이름': '하나호텔',
  '위치': '제주도 제주시 001',
  '가격': { 'A': 50000, 'B': 30000, 'C': 15000 },
  '방의개수': 50,
  '예약자수': 25,
  '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
  '이름': '둘호텔',
  '위치': '제주도 제주시 002',
  '가격': { 'A': 100000, 'B': 60000, 'C': 30000 },
  '방의개수': 100,
  '예약자수': 30,
  '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
  '이름': '셋호텔',
  '위치': '제주도 제주시 003',
  '가격': { 'A': 80000, 'B': 50000, 'C': 30000 },
  '방의개수': 120,
  '예약자수': 80,
  '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());

console.log("----------This 4----------");
/* 
function a() {
  console.log(this);
  function b() {
    console.log(this);
    function c() {
      console.log(this);
    }
    c()
  }
  b()
}
a()
*/
// a, b, c모두 window 
//! 위 함수는 a.b.c()이런 식으로 호출한 객체를 타고 올라가는 형태가 아니다.