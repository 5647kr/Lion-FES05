console.log("----------변수----------");
//! 변수는 저장공간으로 비유하면 안되고, 포스트잇과 같이 가르키는 요소로 비유하는것이 맞다.
// 변할 수 있는 수 , 변할 수 있는 정보를 변수라 한다.

let hojun = console.log
hojun("hello");
//console.log()가 가르키고 있는 특정기능을 hojun도 가르키게 되는것이다.

console.log("----------변수 선언 3가지 방법(var, let, const----------");
var x = 3; // x가 3을 가르키는 것이다.(사용하지 않기를 권고한다.)
console.log(x);
let y = 4;
console.log(y);
const z = 5;
console.log(z);