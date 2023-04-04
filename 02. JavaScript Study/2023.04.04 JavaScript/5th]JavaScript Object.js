// 객체(Object)
// 키 와 값이 쌍으로 이루어져 있다.

const human = {
  name: "hojun",
  age: 53,
  from: "korea",
  askingHim: function () {
    console.log("hello world");
  },
  0: "01050442903"
};
console.log(human.name);
console.log(human.age);
console.log(human["name"]);
console.log(human["age"]);
console.log(human[0]);
console.log(human["0"]);

console.log("-------------------------");

const arr1 = {
  0: 10,
  1: 20,
  2: 30,
  length: 3
};
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1.length);
// 배열이 아닌, 유사배열객체라고 한다.
// 똑같은 요소로 만들어도 arr1이 순회할 때 더 빠르다.
// 유사배열객체는 실무에서는 사용하지 않는다.

console.log("-------------------------");
