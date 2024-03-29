// 임의의 숫자를 뽑는 방법

// Math.random();
/* 
반드시 Math의 M은 대문자
0이상 1미만 실수(float)
 */
// var num = Math.random() * 45 + 1;
// * 45: 0이상 45미만의 실수(float)
// + 1 : 1이상 46미만의 실수(float)
// var ball1 = parseInt(num);
// parseInt(): 실수(float)을 정수(int)로 변환
// document.write(ball1);

// 배열(array): 하나의 변수 안에 여러개의 값을 넣을 수 있다.

// 배열 방법
// var name = [1,2,3,4,5,6];
// 1을 꺼내려면 name[0]이다
// var lotto = [1,2,3,4,5,6];
// lotto.push(7);  // 마지막 값 추가
// document.write(lotto);

/*
var lotto = [];
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
document.write(lotto);
*/

// 반복문(for, while)
/* for (시작; 끝; 증가) {
  반복하려는 코드
  }
*/

/* 예시
for (var i = 0; i < 6; i++) {
  반복하려는 코드
}
++는 하나씩 증가한다라는 의미 */

/*
var lotto = [];
for (var i = 0; i < 6; i++) {
  lotto.push(parseInt(Math.random() * 45 + 1));
}
document.write(lotto);
*/


// 조건문
/* if (조건) {
  조건이 참일 경우
*/
  var lotto = [];
  for (var i = 0; i < 6; i++) {
    var num = parseInt(Math.random() * 45 + 1)
    if (lotto.indexOf(num) == -1) {
      // indexOf(값) 값이 있으면 위치, 없으면 -1
    lotto.push(num);
    }
  }
  document.write(lotto);