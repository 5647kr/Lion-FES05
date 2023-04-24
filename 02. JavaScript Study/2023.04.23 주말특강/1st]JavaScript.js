console.log("----------배열 1----------");

const a = [1, "안녕", {name: "나"}]; // 다 들어갈 수 있다.
console.log(a);
console.log(a.length);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

console.log("----------배열 2----------");

function 나중에함수실행해주는애(함수) {
  return 함수()
}

function 나중에실행하고싶은함수() {
  console.log("나.. 실행됐니?");
}

나중에함수실행해주는애(나중에실행하고싶은함수);
// 나중에 함수 실행해 주는 애한테 나중에 실행하고 싶은 함수를 넘김
// 그럼 나중에 함수실행해주는애가 대신해줌

console.log("----------배열 3----------");

const arr1 = [];

function 함수(item) {
  arr1.push(item * 2)
}
const b = [1, 2, 3, 4, 5, 6, 7, 8];
b.forEach(함수);
console.log(arr1);

console.log("----------배열 4----------");

const c = [1, 2, 3, 4, 5, 6, 7, 8];

const arr2 = [];

function 두배해주는애(num) {
  return num * 2;
}
console.log(두배해주는애(10));

function 함수2(item) {
  const 배열에넣을값 = 두배해주는애(item);
  arr2.push(배열에넣을값);
}

console.log("----------배열 5----------");

// forEach => 배열요소에 대해 각각 반복작업을 하도록 함 (단순하게 요소에 대해 반복작업을 하고 싶을 때)
// map => 배열요소에 대해 각각반복작업한 결과를 새로 만들어서 줌 (배열요소에 대해 작업한 결과를 새로운 배열로 만들 때)


// 정리
/* 
const a = [1,2,3,4,5,6,7,8]
const arrLen = a.length;
for (let index = 0; index < arrLen; index++) {
 console.log(a[index])
}
// 같은 일을 반복한다.
// 뭐에대해?? > 배열이 가지고있는 값들에 대해

// 배열이 가지고있는 값들에 대해 어떠한 일을 반복 합니다.


// callback

//이게 무슨함수임..?


function forEach(함수) {
    return 함수()
}

// call 호출할거임 언제? 뒤에..(나중에) back
function 대신실행하고싶은함수(){
    console.log("나.. 실행됐니..?");
}


forEach(대신실행하고싶은함수);
// forEach 한테 대신실행하고싶은함수를 넘김
// 그럼 forEach가 대신해줌 ㅋ

map // 무슨뜻임..?




// forEach -> 배열요소에 대해 각각 반복작업을 하도록 함
// map -> 배열요소에 대해 각각 반복작업한 결과를 새로 만들어서 줌
// forEach는 단순하게 요소에 대해 반복작업을 하고싶을때!
// map -> 배열요소에 대해 작업한 결과를 새로운 배열로 만들때!
*/