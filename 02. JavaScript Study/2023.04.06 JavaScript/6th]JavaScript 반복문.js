console.log("----------factorial for문(암기3)----------");
// factorial for문(암기3)
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

// factorial while문(암기3)
// 5! = 1 * 2 * 3 * 4 * 5

let b = 1;
c = 1;
while(c < 6) {
  b *= c;
  c += 1;
}
console.log(b);

console.log("----------break----------");

// continue, break, label

// break는 자신을 감싼 반복문만 탈출한다. 상위 반복문까지 탈출하지 않는다.
for(let d = 2; d < 10; d++) {
  for(let e = 1; e < 10; e++) {
    console.log(`${d} X ${e} = ${d * e}`);
    if(e ===3) {
      break;
    }
  }
}

console.log("----------continue----------");

// continue
// 아래구문을 실행하지 않고 다음루프로 넘어가서 다시 구문을 실행한다.
for(let d = 2; d < 10; d++) {
  for(let e = 1; e < 10; e++) {
    if(e ===3) {
      continue;
    }
    console.log(`${d} X ${e} = ${d * e}`);
  }
}

console.log("----------label 1----------");

// 쓰지 않는걸 권장한다.

outer:
for(let f = 0; f < 3; f++) {
  for(let g = 0; g < 3; g++) {
    if(f + g === 3) {
      break outer;
    }
    console.log(f, g);
  }
}

console.log("----------label 2----------");

hojun:
for(let f = 0; f < 3; f++) {
  for(let g = 0; g < 3; g++) {
    if(f + g === 3) {
      break hojun;
    }
    console.log(f, g);
  }
}

console.log("----------label 3----------");

for(let h = 0; h < 3; h++) {
  hojun:
  for(let i = 2; i < 10; i++) {
    for(let j = 1; j < 19; j++) {
      if(j === 3) {
        break hojun;
      }
      console.log(`${h}. ${i} X ${j} = ${i * j}`);
    }
  }
}