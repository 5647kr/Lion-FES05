console.log("----------생성자 1----------");

function Foodpicker(foodnames) {
  this.name = foodnames;
  this.saymenu = function () {
    console.log(`삐리리리리 오늘의 메뉴는 ${this.name[Math.floor(Math.random()* this.name.length)]} 입니다.`);
  }
}
const pickerrobot1 = new Foodpicker(["짜장면", "청국장", "김치찌게"]);
const pickerrobot2 = new Foodpicker(["짜장면", "청국장", "김치찌게"]);
pickerrobot1.saymenu();
pickerrobot2.saymenu();

console.log("----------생성자 2----------");

function Jeahyun() {
  this.age = 20;
}
Jeahyun.prototype.name = "재현"
const jeahyun1 = new Jeahyun();
const jeahyun2 = new Jeahyun();
const jeahyun3 = new Jeahyun();

console.log(jeahyun1.name); 
console.log(jeahyun2.name); 
console.log(jeahyun3.name); 
console.log(jeahyun1.age); 
console.log(jeahyun2.age); 
console.log(jeahyun3.age); 

console.log("----------생성자 3----------");