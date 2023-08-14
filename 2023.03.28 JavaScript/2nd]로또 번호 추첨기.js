// 반복문(for): 특정 횟수만큼 반복한다.
// 반복문(while): 특정 조건까지 계속 반복한다.
/* while (조건) {
  반복하려는 코드
} */
// .length: 배열의 길이(배열안에 몇개의 값이 들어갔는지를 확인할 때 사용한다.)
/*
var lotto = [];
while (lotto.length < 6) {
  var num = parseInt(Math.random() * 45 + 1);
  if (lotto.indexOf(num) == -1) {
    lotto.push(num);
  }
}
document.write(lotto);
*/

// 정렬
// .sort()
/*
var lotto = [1,2,3,33,22,11];
lotto.sort((a,b) => a-b);
*/

var lotto = [];
while (lotto.length < 6) {
  var num = parseInt(Math.random() * 45 + 1);
  if (lotto.indexOf(num) == -1) {
    lotto.push(num);
  }
}
lotto.sort((a,b) => a-b);
document.write(lotto);