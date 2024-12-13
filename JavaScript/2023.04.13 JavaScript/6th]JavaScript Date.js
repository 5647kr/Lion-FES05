console.log("----------Date 1----------");

let a = new Date();
console.log(a);

console.log(a.getDate()); // 1부터 시작하고 날짜를 출력한다.
console.log(a.getMonth()); // 0월부터 시작하고 +1을 해야한다.
console.log(a.getDay()); // 0부터 시작하고 0은 일요일이다.

console.log("----------Date 2----------");

switch (a.getDay()) {
  case 0:
    console.log('일요일')
    break;
  case 1:
    console.log('월요일')
    break;
  case 2:
    console.log('화요일')
    break;
  case 3:
    console.log('수요일')
    break;
  case 4:
    console.log('목요일')
    break;
  case 5:
    console.log('금요일')
    break;
  case 6:
    console.log('토요일')
    break;
  default:
    console.log('날짜의 양식이 잘못되었습니다.')
    break;
}

console.log("----------Date 3----------");

console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds());
console.log(a.getFullYear());
//! a.getYear() 1900년부터 연도 계산, 사용하지 않는다.

console.log("----------Date 4----------");
// new Date(2023.06.30)
console.log(new Date(2023, 5, 30)); 
console.log(new Date(2023, 5, 30, 18)); 

