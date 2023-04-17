console.log("----------문제 4----------");

// https://school.programmers.co.kr/learn/courses/30/lessons/120913

function solution(my_str, n) {
  let result = [];
  for(let i = 0; i < my_str.length; i += n) result.push(my_str.slice(i, i+n))
  return result;
}

console.log("abc1Addfggg4556b".match(/[a-zA-Z0-9]{4}/g)); 
console.log("abc1Addfggg4556b".match(/[a-zA-Z0-9]{3}/g)); 
console.log("abc1Addfggg4556b".match(/\w{3}/g));  // 문자
console.log("abc1Addfggg4556b".match(/\d{3}/g));  // 숫자
console.log("abc1Addfggg4556b".match(/.{3}/g));  // 모든문자
console.log("".match(/.{3}/g));  // 주의 : null

console.log("----------문제 5----------");

// https://school.programmers.co.kr/learn/courses/30/lessons/120864
// 2번 문제 응용

function solution(my_string) {
  return (my_string
  .match(/\d+/g) ?? [])
  .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

console.log("aAb1B2cC34oOp"
  .match(/\d+/g, "")
  .reduce((a, b) => parseInt(a) + parseInt(b), 0)); 

console.log("----------문제 6----------");

console.log('gogaooogogooo'.match(/(go)/g));
console.log('gogaooogogooo'.match(/[go]/g));

// 숫자 2자리와 알파벳 하나씩이 매칭되도록 다음의 패턴에서 문자열을 추출하시오. 숫자는 항상 2개만 있고, 알파벳은 1개 이상 있을 수 있습니다.

// 87a99b00fww89e => ["87a", "99b", "00f", "89e"]

console.log("87a99b00fww89e".match(/[0-9][0-9][a-zA-Z]/g));
console.log("87a99b00fww89e".match(/([0-9][0-9])([a-zA-Z])/g));
console.log("87a99b00fww89e".match(/([0-9]{2})([a-zA-Z])/g));
console.log("87a99b00fww89e".match(/(\d{2})([a-zA-Z])/g));

console.log("----------문제 7----------");

// https://jsalgo.co.kr/?page=2#
//'a10b9r1ce33uab8wc918v2cv11v9'

console.log('a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g));
// r,e,v뒤에 숫자가 10이 있을 경우 오답
console.log('a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev]\d+/g));
// e가 33으로 뽑혀서 오답