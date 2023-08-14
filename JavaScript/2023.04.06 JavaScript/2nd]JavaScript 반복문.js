console.log("----------반복문 1----------");

const cars1 = ["BMW", "VOLVO", "SAAB", "FORD", "FLAT", "AUDI"];

let text1 = "";

// 아래와 같이 출력하려 할때
/* 
`
<section>
<h2>BMW</h2>
</section>
<section>
<h2>BMW</h2>
</section>
...
`
*/
// 아래와 같이 해서 코드줄이 굉장히 길다.
text1 += '<section><h2>' + cars1[0] + '</h2></section>'
text1 += '<section><h2>' + cars1[1] + '</h2></section>'
text1 += '<section><h2>' + cars1[2] + '</h2></section>'
text1 += '<section><h2>' + cars1[3] + '</h2></section>'
text1 += '<section><h2>' + cars1[4] + '</h2></section>'
text1 += '<section><h2>' + cars1[5] + '</h2></section>'
console.log(text1);

console.log("----------반복문 2----------");

const cars2 = ["BMW", "VOLVO", "SAAB", "FORD", "FLAT", "AUDI"];
let text2 = "";
for(let i = 0; i < cars2.length; i++) {
  text2 += '<section><h2>' + cars2[i] + '</h2></section>'
}
console.log(text2);

console.log("----------반복문 3----------");

for(let i = 0; i < 10; i++) {
  console.log(i);
}
// !console.log(i); 반복문이 끝난 다음 호출할 수 없다!

console.log("----------반복문 4----------");

for(let i = 0; i < 10; ++i) {
  console.log(i);
}

console.log("----------반복문 5----------");

for(let i = 0; i < 10; i += 2) {
  // * (i += 2) == (i = i + 2)
  console.log(i);
}

console.log("----------반복문 6----------");

for(let i = 0; i < 10; i += 2) {
  console.log(i);
}

console.log("----------무한 반복문----------");

/* 실행하지 말 것!
for(;;) {
  console.log("실행하지 마세요!");
}
for(let i = 0; i < 10;) {
  console.log("실행하지 마세요!");
  i += 1
}
*/

// 무한반복을 이용한 게임
/* 
let answer = Math.floor(Math.random()*100);
let count = 0;
for(;;) {
  count += 1;
  let userinput = parseInt(window.prompt("값을 입력해주세요!"))
  if(answer > userinput) { // > userinput
    window.alert("UP")
  }
  else if (answer < userinput) { // > userinput
    window.alert("DOWN")
  }
  else if (Number.isNaN(userinput)) {
    window.alert("다시 입력하세요!")
  }
  else {
    window.alert("CORRECT!")
    break;
  }
  count += 1
}
console.log(`${count}번째 맞추셨습니다.`);
*/

// 프로그래밍 언어에서 random은 seed라는 값을 주면 동일한 랜덤값이 나오는 수학수식이다.