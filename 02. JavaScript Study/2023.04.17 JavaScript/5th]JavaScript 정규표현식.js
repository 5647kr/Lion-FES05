console.log("----------문제 7----------");

// https://jsalgo.co.kr/?page=2#
//'a10b9r1ce33uab8wc918v2cv11v9'

console.log('a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g));
// r,e,v뒤에 숫자가 10이 있을 경우 오답
console.log('a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev]\d+/g));
// e가 33으로 뽑혀서 오답
console.log('a10b9r1ce33uab8wc918v2cv11v9'.match(/([rev])(10|[0-9])/g).reduce((a, b) => a + parseInt(b.slice(1)), 0));

console.log("----------reduce 보충설명----------");

// reduce의 형태
/* 
array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
*/
[10, 20, 30].reduce(
  (accumulator, currentValue) => {
      console.log(currentValue)
      return accumulator + currentValue
  },
  0
);
console.log("----------reduce 보충설명----------");
['a10', 'a20', 'a30'].reduce(
  (accumulator, currentValue) => {
      console.log(currentValue)
      console.log(currentValue.slice(1))
      return accumulator + currentValue
  },
  0
);
console.log("----------reduce 보충설명----------");
['a10', 'a20', 'a30'].reduce(
  (accumulator, currentValue) => {
      console.log(currentValue)
      console.log(currentValue.slice(1))
      console.log(parseInt(currentValue.slice(1)))
      return accumulator + parseInt(currentValue.slice(1))
  },
  0
);
console.log("----------reduce 보충설명----------");
['a10', 'a20', 'a30'].reduce(
  (accumulator, currentValue) => {
      return accumulator + parseInt(currentValue.slice(1))
  },
  0
);
console.log("----------reduce 보충설명----------");
console.log(['a10', 'a20', 'a30'].reduce((a, c) => a + parseInt(c.slice(1)), 0));


console.log("----------보충설명----------");

const string = `hojun, lee
gildong, hong
hojung, choi
junho, lee`


let result1 = string.replace(/(\w+), (\w+)/gm, "$2 $1");
console.log(result1);
let result2 = string.replace(/(\w+), (\w+)/gm, "$2 $1!!$1!!$1");
console.log(result2);