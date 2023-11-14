console.log("==========할당 연산==========");

let a = 10;
a = a + 10;
a =+ 10;
a += 10;
console.log(a);

console.log("==========단항 연산==========");

console.log(-(2));
console.log(-(-2));
console.log(+(-2));
console.log(+(+2));
console.log(+(+"2"));

console.log("==========증감 연산 1==========");

let b = 3;
console.log(++b); // 선 증가 후 할당
console.log(b);
console.log(--b);
console.log(b++); // 선 할당 후 증가
console.log(b--);

console.log("==========증감 연산 2==========");

let amount = 0;
for(let i = 0; i < 10; i++) {
  amount += i;
  
}
console.log(amount);

console.log("==========증감 연산 3==========");

for(let j = 0; j < 10; ++j) {
  console.log(j);
}