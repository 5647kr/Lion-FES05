console.log("----------자주 실수 하는 변수----------");

var a = 10;
var b = 20;
a = a + 10;

let c = 10;
let d = 20;

var e = 100;
console.log(a);
console.log(b);

// let a = 100; 재정의를 허락하지 않는다.
console.log(c);
// script는 다른 태그에 있어도 변수를 공유하여 var로 선언할 경우 덮어써서 코드를 작성하는데 방해가 된다.