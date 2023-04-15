console.log("----------boolean 1(****)----------");

console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean([1, 2, 3])); // true
console.log(Boolean([])); // true
console.log(Boolean({"one":10, "two": 20})); // true
console.log(Boolean({})); // true
console.log(Boolean(0)); // false
console.log(Boolean(-1)); // true
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

console.log("----------boolean 2(****)----------");

if(undefined) {
  console.log("hello");
}

let a;
console.log(a);
if(a) {
  console.log("hello2");
}

let b;
console.log(b);
if(b > 100) {
  console.log("hello3");
}