console.log("==========Array push==========");

//* push: 배열의 뒤, 마지막에 값을 추가한다.
const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);

console.log("==========Array pop==========");

//* pop: 배열의 마지막에서 값을 꺼내고 그 꺼낸 값을 반환(return)한다.
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.pop());
console.log(arr2);

console.log("==========Array pop 반환==========");

const arr3 = [1, 2, 3, 4, 5];
const lastValue = arr3.pop();
console.log(lastValue);

console.log("==========Array unshift==========");

//* unshift: 배열의 앞에 값을 추가한다.
const arr4 = ["사과", "바나나", "수박"];
arr4.unshift("오이", "배");
console.log(arr4);

console.log("==========Array shift==========");

//* shift: 배열의 앞에서 값을 꺼내고 그 꺼낸 값을 반환(return)한다.
const arr5 = ["사과", "바나나", "수박"];
console.log(arr5.shift()); 
console.log(arr5);

console.log("==========Array splice 1==========");

//* splice: 배열의 요소를 추가, 제거 또는 교체한다.

// splice(start(인덱스 번호), deletecount, add)
// arr.splice().splice(): splice는 arr가 아닌 삭제된 값을 반환하기 때문에 메소드 체이닝이 안된다.
// 추가

const arr6 = [1, 2, 3];
arr6.splice(1, 0, 4); 
// arr6에 1: 첫번째에, 0: 아무것도 삭제하지 않고, 4: 4를 넣겠다.\
console.log(arr6);

console.log("==========Array splice 2==========");

const arr7 = [1, 2, 3];
arr7.splice(1, 0, [10, 20, 30]);
// arr7에 1: 첫번째에, 0: 아무것도 삭제하지 않고, [10, 20, 30]: [10, 20, 30]를 넣겠다.
console.log(arr7);

console.log("==========Array splice 3==========");

const arr8 = [1, 2, 3];
arr8.splice(1, 0, ...[10, 20, 30]); // == arr8.splice(1, 0, 10, 20, 30);
// arr8에 1: 첫번째에, 0: 아무것도 삭제하지 않고, ...[10, 20, 30]: 10, 20, 30를 넣겠다.
console.log(arr8);

console.log("==========Array splice 연습 문제==========");

// 연습문제'
// 만들고 싶은 값: [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 50]
const arr9 = [10, 20, 30, 40, 50];
const x = [1, 2, 3];
// splice만 사용하기

arr9.splice(1, 0, ...x)
arr9.splice(7, 0, ...x)
console.log(arr9)

console.log("==========Array splice 삭제 1==========");

const arr10 = [10, 20, 30, 40, 50];
console.log(arr10.splice(2, 1, 5)); 
// arr10에 2: 2번쩨에, 1: 1개를 삭제하고, 5: 삭제한 자리에 5를 넣는다.
console.log(arr10);

console.log("==========Array splice 삭제 2==========");

const arr11 = [10, 20, 30, 40, 50];
console.log(arr11.splice(2, 2, 1));
// arr11에 2: 2번쩨에, 2: 2개를 삭제하고, 1: 삭제한 자리에 1를 넣는다.
console.log(arr11);

console.log("==========Array splice 삭제 3==========");

const arr12 = [10, 20, 30, 40, 50];
console.log(arr12.splice(2, 2));
// arr12에 2: 2번쩨에, 2: 2개를 삭제하고, 없음: 추가할 값이 없다.
console.log(arr12);

console.log("==========실무 팁==========");

// 실무 팁
let tip1 = [1, 2, 3, 4, 5]; 
console.log(tip1[tip1.length-1]);
console.log([...tip1].pop()); //원본 수정없이 값을 복사한다.

let tip2 = [...tip1];
console.log(tip2);
console.log(tip2.pop());

const tip3 = new Array(10).fill(0);
const tip4 = Array.from("hello world");
let tip5 = [1, 2, 3, 4, 5];
let tip6 = [10, 20, 30, 40, 50];
console.log([...tip5, 1000, ...tip6]);

const tip7 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 다차원 배열에서 최솟값, 최댓값 찾기
Math.max(...tip7.flat());

const tip8 = [
  [[1, 2], [1, 2], [1, 2]],
  [[1, 2], [1, 2], [1, 2]],
  [[1, 2], [1, 2], [1, 2]]
];
tip8.flat();
tip8.flat(1);
tip8.flat(2);
tip8.flat(Infinity);

// 잡기술
".".repeat(100).split(".");