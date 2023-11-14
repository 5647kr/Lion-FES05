console.log("==========null 1==========");
// 값이 없음을 나타내는 데이터 타입

let value1;
console.log(value1); // undefined

console.log("==========null 2==========");

let value2 = null;
console.log(value2);

console.log("==========null 3==========");

let 반점수1 = [10, 20, 30, null, 40, 50];
let 반평균1 = 0;
for(const i of 반점수1) {
  console.log(i);
  반평균1 += i;
}
console.log("--------------------");
console.log(반평균1);
console.log(반평균1 / 6);
console.log(반평균1 / 5);

console.log("==========undefined==========");

let 반점수2 = [10, 20, 30, undefined, 40, 50];
let 반평균2 = 0;
for(const i of 반점수2) {
  console.log(i);
  반평균2 += i;
}
console.log("--------------------");
console.log(반평균2);
console.log(반평균2 / 6);
console.log(반평균2 / 5);