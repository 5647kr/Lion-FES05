console.log("----------생성자 1----------");

function Factory(name) {
  this.name = name;
  this.sayYourName = function () {
    console.log(`삐리삐리. 제 이름은 ${this.name}입니다. 주인님`);
  }
}
const robot = new Factory("재현");
console.log(robot);
robot.sayYourName();

const robot2 = new Factory("호준");
console.log(robot2);
robot2.sayYourName();

console.log("----------생성자 2----------");

function Factory2(food) {
  this.food = food;
  this.foodpick = function () {
    console.log(`삐리삐리... 점심으로 ${this.food}을 추천합니다.}`);
  }
}
const picker = new Factory2(["짜장면", "청국장", "김치찌게"]);
console.log(picker);
picker.foodpick();

console.log("----------생성자 2 해설----------");

function Foodpicker(foodnames) {
  this.name = foodnames;
  this.saymenu = function () {
    console.log(`삐리리리리 오늘의 메뉴는 ${this.name[Math.floor(Math.random()* this.name.length)]} 입니다.`);
  }
}
const pickerrobot = new Foodpicker(["짜장면", "청국장", "김치찌게"]);
pickerrobot.saymenu();