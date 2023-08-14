function 콜백함수(값) {
  console.log("여기 콜백함수1");
  console.log(값);
  console.log("여기 콜백함수2");
  return 값.json()
}


fetch("https>//test.api.weniv.co.kr/mall").then(콜백함수) // then에 콜백함수를 쓴다.

// promise는 then, catch, finally를 사용한다.
// 성공하면 then으로 넘어간다.