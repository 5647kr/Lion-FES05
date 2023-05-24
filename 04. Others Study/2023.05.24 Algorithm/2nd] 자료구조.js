// https://evanai.notion.site/bcf4da848f904595a50bf5161bc0ed62

console.log("----------Question1----------");
// Question1: lions를 a로 hello를 b로 보내시오
let a1 = "hello";
let b1 = "lions";

// Answer
let c1;
c1 = a1;
a1 = b1;
b1 = c1;

console.log(a1);
console.log(b1);


console.log("----------Question2----------");
// Question2: a2에 30을 넣으시오

let a2 = 10;
let b2 = 30;

// Answer
a2 = a2 + b2; // a2: 40
b2 = a2 - b2; // b2: 10
a2 = a2 - b2; // 40 - 10

// [a2, b2] = [b2, a2]

// a2 = a2 * 2
// b2 = b2 / 2

// a = [a, b];
// b = a[0];
// a = a[1]

console.log(a2);

