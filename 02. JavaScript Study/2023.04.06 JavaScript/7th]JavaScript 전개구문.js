console.log("----------구조분해 할당 1----------");

// 데이터 구조를 분해하여 안에 있는 데이터를 변수에 순서대로 할당해준다.

for(const [a, b] of [[1, 2], [3, 4], [5, 6]]) {
  console.log(a, b);
} 

console.log("----------구조분해 할당 2----------");

const 위니브1 = {개리: 1, 빙키: 2};
const 위니브2 = {라이캣: 3};
const 위니브3 = {...위니브1, ...위니브2};
const 위니브임직원 = {
  개리: "재직중",
  빙키: "재직중",
  라이켓: "재직중",
  뮤라: "재직중",
  해골왕: "재직중"
};

for(const [c, d] of Object.entries(위니브임직원)) {
  console.log(c, d); 
}

console.log("----------구조분해 할당 3----------");

const test1 = [
  [1, 2, [10, 20]],
  [3, 4, [30, 40]],
  [5, 6, [50, 60]]
];
for(const [e, f, [g, h]] of test1) {
  console.log(e, f, g, h);
}

console.log("----------구조분해 할당 4----------");

const test2 = [
  [1, 2, 10, 20],
  [3, 4, 30, 40],
  [5, 6, 50, 60]
];
for(const [e, f, ...g] of test2) {
  console.log(e, f, g);
}

console.log("----------구조분해 할당 5----------");

let [a, b] = [10, 20];
console.log(a);
console.log(b);
let [one, two, three] = "010-5044-2903".split("-");
console.log(one);
console.log(two);
console.log(three);