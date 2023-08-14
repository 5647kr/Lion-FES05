console.log("----------this 1----------");
// this를 포함하고 있는 객체가 있는 위치에 따라 this의 의미가 달라진다.

function name1() {
  console.log(this);
}
var a = {
  "hello": "world",
  "say": name1
}
var b = {
  "a": a // var b = {a}
}
var c = {
  "b": b // var c = {b}
}

console.log("----------set 문제 1----------");
// 교집합의 갯수 구하는 문제
/* 
s1: ["a", "b", "c"]	
s2: ["com", "b", "d", "p", "c"]
*/
function solution(s1, s2) {
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
}

function solution(s1, s2) {
  s1 = new Set(s1)
  s2 = new Set(s2)
  let cro = [...s1].filter(e => s2.has(e))
  return cro.length;
}

console.log("----------set 문제 2----------");
// 369게임