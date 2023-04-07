console.log("----------구조분해 할당 1----------");

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
console.log(Object.entries(위니브임직원));
for(const [i, j] of Object.entries(위니브임직원)) {
  console.log(i, j); 
}

console.log("----------구조분해 할당 2----------");

const test1 = [
  [1, 2, [10, 20]],
  [3, 4, [30, 40]],
  [5, 6, [50, 60]]
];
for(const [i, j, k] of test1) {
  console.log(i, j, k);
}

console.log("----------구조분해 할당 3----------");

const test2 = [
  [1, 2, [10, 20]],
  [3, 4, [30, 40]],
  [5, 6, [50, 60]]
];
for(const [i, j, [k, l]] of test2) {
  console.log(i, j, k, l);
}

console.log("----------구조분해 할당 4----------");

const test3 = [
  [1, 2, 10, 20],
  [3, 4, 30, 40],
  [5, 6, 50, 60]
];
for(const [i, j, k] of test3) {
  console.log(i, j, k);
}

console.log("----------구조분해 할당 5----------");

const test4 = [
  [1, 2, 10, 20],
  [3, 4, 30, 40],
  [5, 6, 50, 60]
];
for(const [i, j, ...k] of test4) {
  console.log(i, j, k);
}

console.log("----------구조분해 할당 5----------");

let [i, j] = [10, 20];
console.log(i);
console.log(j);
let [one, two, three] = "010-5044-2903".split("-");
console.log(one);
console.log(two);
console.log(three);