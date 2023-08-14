console.log("----------좋은 습관 기르기----------");

const aespa1 = ["카리나", "윈터", "지젤", "닝닝"];
// 결과 : ['카리나💖', '윈터💖', '지젤💖', '닝닝💖']

aespa1.forEach((item, index) => {
  aespa1[index] = item + "💖";
})
console.log(aespa1);

const aespa3 = ["카리나", "윈터", "지젤", "닝닝"];
const aespa2 = aespa3.map((item) => {
  return item + "💖";
})
console.log(aespa3);
console.log(aespa2);
// 원본배열을 훼손하지 않는방법을 권장한다.


console.log("----------엄격모드 1----------");

function func() {
  str = "hello strict";
}

console.log("----------엄격모드 2----------");

// console.log(null = 123);

console.log(undefined = 123);
console.log(Infinity = 456);

console.log("----------엄격모드 3----------");

function func2(a, a, b) {
  console.log(a + a + b);
}
func2(1, 2, 3)

console.log("----------일치연산자 사용하기----------");

console.log(1 == 1); 
console.log(1 == '1'); 
console.log(1 == 2); 
console.log('' == false); 
console.log('' === false); 
console.log([] == false); // 빈 배열은 심지어 truthy
console.log([] === false);
console.log(![]);
console.log(null == undefined); 