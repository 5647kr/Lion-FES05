let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr2);
arr1[0] = 10;
arr1 = [10, 20];
console.log(arr2);

console.log("----------Switch 1----------");

// 특징

//코드 실행을 한 뒤, break에 의해서 조건문을 빠져나오게 된다.
// ! 점점 안쓰는 추세다.

const value1 = "one";
switch (value1) {
  case "one" :
    console.log("hello one");
    break;
  case "two" :
    console.log("hello two");
    break;
  case "three" :
    console.log("hello three");
    break;
  default :
    console.log("hello default");
    break;
}

console.log("----------Switch 2----------");

const value2 = "four";
switch (value2) {
  case "one" :
    console.log("hello one");
    break;
  case "two" :
    console.log("hello two");
    break;
  case "three" :
    console.log("hello three");
    break;
  default :
    console.log("hello default");
    break;
}

console.log("----------Switch 3----------");

// break 없을 경우
const value3 = "one";
switch (value3) {
  case "one" :
    console.log("hello one");
  case "two" :
    console.log("hello two");
  case "three" :
    console.log("hello three");
  default :
    console.log("hello default");
}

console.log("----------Switch 4----------");

const value4 = "two";
switch (value4) {
  case "one" :
    console.log("hello one");
  case "two" :
    console.log("hello two");
  case "three" :
    console.log("hello three");
  default :
    console.log("hello default");
}

console.log("----------Switch 5----------");

// if와 switch의 차이

switch (new Date().getDay()) {
  case 0:
    console.log("일요일");
    break;
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
}
// default는 견고한 코드를 위해 써주는것이 좋다.

console.log(new Date().getDay());
/* 
목요일인데 4이다. 일 월 화 수 목 인데 4인 이유는 일요일이 0이기 때문이다
일(0) 월(1) 화(2) 수(3) 목(4) 금(5) 토(6)
*/

console.log("----------Switch 5----------");

const date1 = new Date().getDay();
const date1객체 = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일"
};
console.log(date1객체[date1]);

console.log("----------Switch nullish 연산자 사용----------");

// *default 처리는?
const date2 = 10
const date2객체 = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일"
};
console.log(date2객체[date2] ?? "hello");
console.log(undefined ?? "hello");

console.log("----------Switch 단락회로평가 사용----------");

const date3 = 10
const date3객체 = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일"
};
console.log(date3객체[date3] || "hello");
console.log(undefined || "hello");

// 단축키

/* 
줄 복사: alt + shift + 방향키 위아래
같은 단어 찾고 싶을 때 ctrl + d
같은 모든 단어 ctrl + shift + l
자동정렬: ctrl + a로 전체 선택 후 ctrl+k+f 이건 모르겠음
커서 줄 선택: ctrl + l
커서 위치 행 삭제: ctrl + shift + k
*/