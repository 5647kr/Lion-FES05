function 함수(함수부를때입력받은값) {
  console.log("함수가 실행되었습니다!");
  console.log("입력받은 값은", 함수부를때입력받은값);
  return 10
}
console.log(함수);
함수();
함수(1000000);

console.log("----------반복문 1----------");

for(let i = 0; i < 5; i++) {
  /* i < 5가 while문에서는 condition이 된다. */
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// while (true) {
//   let num = prompt("취소할거임..? 취소할거면 1아니면 2");
//   if(num === 1) {
//     break;
//   }
// }

console.log("----------반복문 2----------");

for(let j = 0; j < 10; j++) {
  if(j === 0 || j === 2) {
    continue;
  }
  console.log(j);
}

console.log("----------조건문 1----------");

for(let k = 0; k < 10; k++) {
  // 여기는 k가 2보다 크고, 4보다 작으면 출력
  if(k > 2) {
    if(k < 4) {
      console.log(k);
    }
  }
}

// 삼항연산자란 조건문 짧게 쓰기

for(let k = 0; k < 10; k++) {
  // 여기는 k가 2보다 크고, 4보다 작으면 출력
  if(k > 2 && k < 4) {
    console.log(k);
  }
}

console.log("----------조건문 2----------");

function range(num,min,max) {
  // true 또는 false 로 반환
  return num>min && num<max
}

for (let index = 0; index < 10; index++) {
  if(range(index,2,4)){
    console.log(index)
  }
}