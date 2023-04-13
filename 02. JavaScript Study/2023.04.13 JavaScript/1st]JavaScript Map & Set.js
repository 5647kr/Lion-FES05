console.log("----------Set 1----------");
// 집합이라 생각하면 된다.
// (실무에서는 많이 사용하지 않지만 알고리즘 문제에서는 필수로 사용되는 자료형이다.)

let set1 = new Set("aaabbbcccddd");
console.log(set1); //* 중복을 제거한다.
console.log(set1.size);

console.log("----------Set 문제 1----------");

let board = ["이호준", "이호준", "이호준", "이호준", "김연하", "최흥석", "이나영"];

//* Question1. 몇명이 게시물을 작성하였나요?

let writer = new Set(board);
console.log(writer);
console.log(`${writer.size}명`);

//* Question2. 몇개의 게시물을 작성하였나요?

for(const i of writer) {
  console.log(i, board.filter(e => e === i).length);
}

console.log("----------Set 문제 2----------");

let map1 = new Map();
for(const i of board) {
  map1.set(i, (map1.get(i) || 0) + 1)
}
console.log(map1);

console.log("----------Set 2----------");

let set2 = new Set("aaabbbcccddd");
console.log(set2.size);
console.log(set2.has("a"));
console.log(set2.has("f"));
console.log(set2.add("z"));
console.log(set2.delete("d"));
console.log(set2);

for(const i of set2) {
  console.log(i);
}

console.log("----------Set 3----------");

// 배열
let set3 = new Set(["a", "a", "a", "b", "b", "b", "c", "c", "c", "d", "d", "d"]);
console.log(set3);

console.log("----------Set 4----------");
//* 가지고 있기

// 교집합
/* 
let set4 = new Set("abc");
let set5 = new Set("cde");
let cross1 = [...set4].filter(e => set5.has(e));
//*            배열                  set
console.log(cross1);
*/