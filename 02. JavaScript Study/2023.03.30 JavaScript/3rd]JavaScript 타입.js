console.log("----------타입----------");
// 자료형으로 불리기도 한다.

console.log("----------타입----------");
/* 
1. 원시타입: 단순한 데이터를 저장한다.
종류: string, number, bigint, boolean, undefined, symbol, null...
특징: 
1. 값을 변수에 저장할 때 값 자체가 저장된다.
2. 원시값을 다른 변수에 할당할때는 값의 참조가 저장되는것이 아닌 값 자체가 복사되어 저장된다.
*/
let str1 = 'hello';
let str2 = str1;
// str1 -> hello 
// str2 -> hello
// str2 -> str1을 가르키는것이 아니다.
console.log(str2); // 'hello'

str1 = 'world';
console.log(str2); // str2에 할당된 값은 여전히 'hello' 입니다.