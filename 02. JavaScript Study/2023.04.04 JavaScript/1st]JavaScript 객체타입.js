// 객체타입
/* 특징
1. 프로퍼티와 메소드를 가지고 각각 객체의 상태와 동작을 나타낸다.
2. 값을 변수에 저장할 때 값 자체가 아닌 값의 위치가 저장된다.
*/

// Array(배열)

const arr1 = [10, 20, 30];
arr1[0] = 100;
arr1.length = 10;
console.log(arr1);
console.dir(arr1); // 프로퍼티와 메소드를 볼 수 있다.
// const는 값을 변화할 수 없다 했는데 100으로 바뀐 이유는?
// arr라는 배열이 10, 20, 30을 가리키는게 아니라 []배열자체를 가리키기 때문에 안에 값은 변화한다.
console.log(arr1[1]);
console.log(arr1.length);
console.log(arr1["length"]);
/* arr1.1 x arr1[1] o
숫자로 들어간 값은 대괄호로 프로퍼티를 호출할 수 있고
length와 같이 문자는 .을 찍어서 프로퍼티를 호출할 수 있다.
*/
// 프로퍼티를 추가할 수 있다.
console.log(arr1["leehojun"] = 100);
console.dir(arr1);
console.log(arr1.hojun = 1000);
console.dir(arr1);

console.log("-------------------------"); 

// Array(배열)의 특징
/* 
1. 순서가 있으며 순서를 index라 하고 순서로 호출하는 것을 indexing이라 한다.
2. 배열 안의 값을 원소(elements)라 한다.
3. 배열에는 다른 원시타입과 객체타입을 포함할 수 있다.
*/
const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
// 6호출하기
console.log("배열 값 호출하기");
console.log(arr2[1][2]);

console.log("-------------------------"); 

// 배열 생성 방법
const arr3 = [1, 2, 3];
console.log("배열 생성 방법1");
console.log(arr3);

const arr4 = new Array(4, 5, 6); // 이 방법은 권하지 않는다.
console.log("배열 생성 방법2");
console.log(arr4);

console.log("배열 100개 생성");
console.log(Array(100).fill(0)); // 배열 100개를 생성하는데 0으로 채운다.

console.log("-------------------------"); 

// 번외
// 0차원, 1차원, 2차원, 3차원, 다차원 매트릭스

// 0차원 스칼라
const a = 10; 
console.log("0차원 스칼라");
console.log(a);

// 1차원 백터
const b = [10, 20, 30]; 
console.log("1차원 백터");
console.log(b);

// 2차원 매트릭스
const c = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]; 
console.log("2차원 매트릭스");
console.log(c);

// 3차원 이상 텐서
const d = [
  [[1, 2], [1, 2], [1, 2]],
  [[1, 2], [1, 2], [1, 2]],
  [[1, 2], [1, 2], [1, 2]]
]; 
console.log("3차원 이상 텐서");
console.log(d);

// 인공지능 중 가장 유명한 라이브러리 텐서플로우는 다차원 행렬의 연산이다.