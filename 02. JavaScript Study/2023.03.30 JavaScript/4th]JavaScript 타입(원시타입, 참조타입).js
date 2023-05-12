console.log("----------string----------");

/* 
특징:
1. 순서가 있으며 0부터 시작하고, 띄어쓰기도 포함한다.
*/

console.log(typeof "hello");
// 타입을 알고 싶을 경우, typeof로 알 수 있다.
console.log('i\'m so happy');
console.log('h\ne\nl\nl\no');
/* 
이스케이프 문자
\' 작은따옴표
\" 큰따옴표
\t 가로탭
\n 줄바꿈
*/

console.log("----------number----------");

console.log(typeof 10);   // int
console.log(typeof 10.1); // float
console.log(typeof NaN); // number

console.log("----------boolean----------");

console.log(typeof true);
console.log(typeof false);

console.log("----------undefined----------");

console.log(typeof undefined);
let a;
console.log(a); // a에 값이 없어 undefined로 출력된다.

console.log("----------null----------");
// null(값이 비어있음을 명시적으로 나타낸다.)

console.log(typeof null); // 설계오류

console.log("----------bigint----------");

console.log(90071992547409960n + 90071992547409960n);
console.log(90071992547409960 + 90071992547409960);
// 자바스크립트에서 취급하는 최대수를 넘어가서 그렇다.
console.log(typeof 90071992547409960n);
console.log(2**53 -1); // 자바스크립트에서 취급하는 최대수

console.log("----------symbol----------");

// 고유한 값을 만들 때 symbol을 사용한다.
console.log(typeof Symbol());

console.log("----------참조타입----------");

// 객체타입(object types): object
/* 
참조타입: 객체로서 저장한다.
종류: Array, function
특징: 
1. 값을 변수에 저장할 때 값의 위치가 저장된다.
2. 원시값을 다른 변수에 할당할때는 값의 자체가 저장되는것이 아닌 값의 참조(위치)가 저장된다.
*/
// function
console.log(typeof function () {}); 

// object
console.log(typeof [10, 20, 30]); // array 인데 typeof로 출력하면 object로 나온다.
console.log(typeof {a: 10, b: 20});
console.log(typeof /정규표현식/gi);

console.log("----------형 변환----------");

// (num => string / string => num)

let hojun = 10;
console.log(hojun.toString());

console.log(typeof "10");
console.log(typeof +"10"); // 실무팁
console.log(typeof Number("10")); // 권하지 않는다.
console.log(typeof parseInt("10")); // 권함
console.log(typeof parseFloat("10.1"));

