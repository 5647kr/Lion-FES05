// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC

/* 
'paullab CEO leehojun hello CEO'
// 문자열 1개만 매칭되어 변경
'paullab CEO leehojun hello CEO'.replace('CEO', 'CTO')
// flag로 global을 주어서 전체 변경(m-다중라인, i-대소문자구분X)
'paullab CEO leehojun hello CEO'.replace(/CEO/g, 'CTO')
// 패턴을 찾아 Array로 반환
'paullab CEO leehojun hello CEO'.match(/CEO/g)
// 패턴으로 Split
'paullab CEO leehojun hello CEO'.split(/CEO/g)
// 패턴이 들어가 있으면 true 없으면 false
(/CEO/g).test('paullab CEO leehojun hello CEO')

// 알고리즘 문제 풀이할 때 주의 사항
// split을 하면 내가 원하는 갯수보다 1개가 더 추가되어 나온다
'!a!abc!abcd'.split('!')
'!!!'.split('!') // 4개
'!a!a!a'.split('!') // 4개
'a!a!a!'.split('!') // 4개

'!a!a!a'.split('!').length - 1


// 3. 일반문자열
/ hello / g

// 4. 처음과 끝
// ^ hello / g
//  hello$ / g
// ^ hello$ / g

// 5. 모든문자 매핑(.)
// hello / g
// h.llo / g
// hello..world / g

// 6. 모든문자 매핑
// h[eao]llo / g

// 7. 범위
// h[a - zA - Z0 - 9]llo / g

// 8. 부정
// h[^ ae]llo / g

// 9. 그루핑 규칙
// (on | ues | rida) / gm //: 그룹 1로 3개 중 매칭되는 패턴 찾음
// /(?:on|ues)/gm
// /(on|ues)|(rida)/gm : 그룹1(on|ues)과 그룹2(rida)로 각각 매칭되는 패턴 찾음
// .(a | e | o)ll./ gm
// /hello (?!world)/gm : hello 뒤에 world가 오지 않는 것 (네거티브 매칭)
// /hello (?=world)/gm : hello 뒤에 world가 오는 것 (파지티브 매칭)

("hello hallo hello").match(/.(a|e|o)ll./g)
("hello hallo hello hello hi").match(/.(a|e|o)ll./g)
("hello hallo hello hello hi").match(/.[eao]ll./g)

// 10. 수량자
/*
_* : 앞에 있는 문자가 0개 ~ N개
_+ : 앞에 있는 문자가 1개 ~ N개
_? : 앞에 있는 문자가 0개 ~ 1개

{3} : 3개
{3,} : 3개 이상
{1,3} : 1개 ~ 3개

_* : 앞에 있는 문자가 0개 ~ N개 ({0,})
_+ : 앞에 있는 문자가 1개 ~ N개({1,})
_? : 앞에 있는 문자가 0개 ~ 1개 ({0,1})

/[0-9]{3}[-.* ][0-9]{4}[-.* ][0-9]{4}/gm
/[0-9]{2,3}[-.* ]?[0-9]{3,5}[-.* ]?[0-9]{4}/gm
/[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/gm
*/

console.log("----------문제 1----------");

// https://school.programmers.co.kr/learn/courses/30/lessons/120826

function solution(my_string, letter) {
  my_string.split(letter)
  var answer = "";
  return answer;
}
console.log("BCBdbe".split("B")); 

// 오답 : 정규표현식 패턴은 문자열로 만드는 것이라 별도로 생성을 해주어야 합니다.
function solution(my_string, letter) {
  return my_string.replace(`/${letter}/g`, '');
}
'BCBdbe'.replace('B', '')
let letter = 'B'
'BCBdbe'.replace(`/${letter}/g`, '');

// 정답
function solution(my_string, letter) {
  // new RegExp(패턴으로 사용할 문자열, 플래그)
  // replace에서만 사용되는 것이 아니라 정규표현식이 들어가는 곳 모두에서 사용할 수 있습니다.
  let reg = new RegExp(letter, 'g') 
  return my_string.replace(reg, '');
}
// new RegExp('B', 'g') 이렇게 사용하시거나 my_string.replace(/B/g, '')

console.log("----------문제 2----------");

// https://school.programmers.co.kr/learn/courses/30/lessons/120851

// 1. 숫자를 찾아 더한다.
function solution(my_string) {
  my_string
  .match(/[0-9]/g)
  .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

console.log("aAb1B2cC34oOp"
  .match(/[0-9]/g)
  .map(x => parseInt(x))
  .reduce((a, b) => a + b, 0));

  console.log("aAb1B2cC34oOp"
  .match(/[0-9]/g)
  .reduce((a, b) => parseInt(a) + parseInt(b), 0)); 

  console.log("----------문제 2----------");

// 2. 문자를 찾아 제거한다.
function solution(my_string) {
  my_string
  .replace(/[^0-9]/g, "")
  .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

console.log("aAb1B2cC34oOp"
  .replace(/[^0-9]/g, "")
  .split("")
  .reduce((a, b) => parseInt(a) + parseInt(b), 0)); 

console.log("----------문제 3----------");

  // https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  order
  .match([369]/g).length
}
console.log("3691021267"
  .match(/[369]/g, "").length);

  console.log("----------문제 3 해설----------");

function solution(order) {
  let value = order.toString().match(/[369]/g) ?? []
  return value.length;
}

console.log("----------문제 4----------");

// https://school.programmers.co.kr/learn/courses/30/lessons/120913