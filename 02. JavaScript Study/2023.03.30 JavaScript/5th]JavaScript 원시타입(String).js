console.log("----------타입(string)----------");

let test1 = "ABCDEFGHIJK";
console.log(test1 + test1);
console.log(test1[0]);
console.log(test1[2]);
// Sass는 1부터 다른언어는 0부터 시작한다.
// 공백도 포함한다.
console.log(test1[-1]); // 지원하지 않는다.

console.log("----------length----------");

let test2 = "ABCDEFGHIJK";
console.log(test2.length);
// length: 문자의 개수를 확인할 수 있다.(1부터)

console.log("----------indexOf, search----------");
// 특정한 키워드의 위치를 확인할 수 있다.
let test3 = "ABCDEFGHIJK";
console.log(test3.indexOf("E")); 
console.log(test3.search("E"));
console.log(test3.indexOf("Z")); // 없는값은 -1
console.log(test3.search("Z")); // 없는값은 -1

console.log("----------replace----------");

// 텍스트를 대체할 때 사용한다.
let test4 = "ABCDEFGHIJK";
console.log(test4);
console.log(test4.replace("ABC", "HELLO"));

console.log("----------잠깐보는 정규표현식----------");

let test5 = "abcdeHelloabcde";

let regExp1 = /CD/;
console.log(test5.search(regExp1));

// 대문자 찾기
let regExp2 = /[A-Z]/g;
console.log(test5.search(regExp2));

// 대문자 찾아서 소문자로 교체
let regExp3 = /[A-Z]/g;
console.log(test5.replace(regExp3, "h"));

/* 
mdn
prototype은 string형이 사용할 수 있는 메소드
없는건 String.을 붙여서 사용해야해요
*/