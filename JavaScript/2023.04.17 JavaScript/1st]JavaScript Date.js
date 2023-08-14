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
console.log(new Date(2023, 06, 30)); 
console.log(new Date(2023, 06, 30, 18));

// UTC와 today의 지정 로캘(locale) KST와의 차이는 -9시간이다.
// 쉬운 말로 협정 세계시(Universal Time Coordinated)와 내 컴퓨터 시간 차가 -9시간
// https://ko.wikipedia.org/wiki/%ED%98%91%EC%A0%95_%EC%84%B8%EA%B3%84%EC%8B%9C
// locale 을 활용하면 언어권에 맞게 입력과 출력을 수정하지 않고도 사용하는 언어권에 맞는 날짜를 처리할 수 있습니다.
//UTC와 현재 로케일(호스트 시스템, today의 지정 로캘 KST(Korea Standard Time))의 차이는 -9시간이다.
today.getTimezoneOffset() / 60

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
// 국제표준시 기준 형식으로 표현
today.toISOString();
today.toISOString().slice(0, 10);
today.toISOString().slice(0, 10).replace(/-/g, '')

console.log("----------Date 5----------");

// 날짜의 차를 구하는 코드
// getTime은 1970 년 1 월 1 일 00:00:00 UTC와 주어진 날짜 사이의 경과 시간 (밀리 초)을 나타내는 숫자
function getDateDiff(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  const diffDate = date1.getTime() - date2.getTime();
  // 일 == 밀리세컨 * 초 * 분 * 시
  return Math.abs(diffDate / (1000 * 60 * 60 * 24));
}
getDateDiff("2023-02-27", "2023-06-30");
getDateDiff("2023-04-17", "2023-06-30");

console.log("----------Date 6----------");

// 두 날짜의 차를 계산합니다.
function daysBetween(date1, date2) {
  // 밀리초 단위로 두 날짜의 차이를 계산합니다.
  const diff = Math.abs(date1.getTime() - date2.getTime());
  // 1일은 24시간 * 60분 * 60초 * 1000밀리초입니다.
  const oneDay = 24 * 60 * 60 * 1000;
  // 차이를 1일 밀리초로 나눕니다.
  return Math.floor(diff / oneDay);
}

// 예시
const date1 = new Date("2021-01-01");
const date2 = new Date("2021-01-05");
console.log(daysBetween(date1, date2)); // 4