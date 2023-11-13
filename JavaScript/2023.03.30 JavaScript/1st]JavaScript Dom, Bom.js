console.log("==========DOM==========");

// DOM(Document Object Model)을 컨트롤한다.
// document.write('hello');

console.log("==========BOM==========");

// BOM(Bowser Object Model)을 컨트롤한다.

//* window.alert() 
// 브라우저에 메세지 다이얼로그를 띄웁니다.

//* window.prompt() 
// 브라우저에 사용자의 데이터를 입력받을 수 있는 입력 창을 띄웁니다.
// 입력값이 숫자여도 문자열로 받는다.

//* window.confirm() 
// true 혹은 false 값을 반환하는 다이얼로그를 띄웁니다.

//* window.console.log() 
// 콘솔창에 로그 메세지를 보여줍니다.

// 사용예시
/* 
console.log("%chello world", "color:red;font-size:32px");
console.log(
  "%chello world%chello",
  "color:red;font-size:32px",
  "color:blue;font-size:16px"
);
*/
//* console.error() 
// 콘솔창에 에러 메세지를 보여줍니다.

console.log("==========table 1==========");

// 콘솔창에 데이터를 테이블 형태로 제공합니다.
let data1 = {a: 10, b: 20, c: 30};
console.table(data1);

console.log("==========table 2==========");

let data2 = [10, 20, 30];
console.table(data2);

console.log("==========dir==========");

// 요소가 가지고 있는 모든 속성을 보여준다.
let data3 = [10, 20, 30];
console.dir(data3);

// console.info(info) 자주 사용하지 않는다.
// console.warn(warn) 자주 사용하지 않는다.
// 실행은 하되 경고문구는 읽는 warn

console.log("==========group==========");

// 자주 사용은 안하지만 한번 사용할 때 중요하게 사용되는 것
// console.group()
// console.groupEnd()

console.group('위니브')
console.group('경영지원')
console.log('대표/이호준')
console.group('비서팀')
console.log('비서팀장 자비스')
console.groupEnd()
console.log('COO/OOO')
console.log('CDO/OOO')
console.groupEnd()
console.group('개발')
console.log('개발리드/이OO')
console.log('FE/OOO')
console.log('FE/OOO')
console.log('BE/OOO')
console.log('BE/OOO')
console.log('Infra/OOO')
console.groupEnd()
console.group('디자인')
console.log('DE/OOO')
console.log('DE/OOO')
console.groupEnd()