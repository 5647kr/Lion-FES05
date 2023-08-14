console.log("----------factorial for문(암기3)----------");

// 5! = 1 * 2 * 3 * 4 * 5
let a = 1;
for(let i = 1; i < 6; i++) {
  a *= i
}
console.log(a);

/* 순서
a = a * i => 1 * 1
a = 1 * 2
a = 2 * 3
a = 6 * 4
a = 24 * 5
*/
console.log("----------factorial while문(암기3)----------");

let b = 1;
let c = 1;
while(c < 6) {
  b *= c;
  c += 1;
}
console.log(b);

console.log("----------break----------");

//* break는 자신을 감싼 반복문만 탈출한다. 상위 반복문까지 탈출하지 않는다.
// 자신을 감싸는 반복문을 중단시키고 다음 반복문을 실행한다.

for(let i = 2; i < 5; i++) {
  for(let j = 1; j < 5; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
    if(j === 3) {
      break;
    }
  }
}

console.log("----------continue----------");

//* 아래구문을 실행하지 않고 다음루프로 넘어가서 다시 구문을 실행한다.
// 자신을 감싸는 반복문을 중단시키지 않고 다음 반복문을 실행한다.

for(let i = 2; i < 5; i++) {
  for(let j = 1; j < 5; j++) {
    if(j ===3) {
      continue;
    }
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

console.log("----------label 1----------");

//! 쓰지 않는걸 권장한다.

outer:
for(let i = 0; i < 3; i++) {
  for(let j = 0; j < 3; j++) {
    if(i + j === 3) {
      break outer;
    }
    console.log(i, j);
  }
}

console.log("----------label 2----------");

hojun:
for(let i = 0; i < 3; i++) {
  for(let j = 0; j < 3; j++) {
    if(i + j === 3) {
      break hojun;
    }
    console.log(i, j);
  }
}

console.log("----------label 3----------");

for(let i = 0; i < 3; i++) {
  hojun:
  for(let j = 2; j < 5; j++) {
    for(let k = 1; k < 5; k++) {
      if(k === 3) {
        break hojun;
      }
      console.log(`${i}. ${j} X ${k} = ${j * k}`);
    }
  }
}

console.log("----------label 4----------");

hojun:
  for(let i = 0; i < 3; i++) {
    for(let j = 2; j < 5; j++) {
      for(let k = 1; k < 5; k++) {
        if(k === 3) {
          break hojun;
        }
        console.log(`${i}. ${j} X ${k} = ${j * k}`);
      }
    }
  }