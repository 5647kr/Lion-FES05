/* 
mdn
prototype은 string형이 사용할 수 있는 메소드
없는건 String.을 붙여서 사용해야해요
*/

let txt = "ABCDEFGHIJK";
console.log(txt + txt);
console.log(txt[0]);
console.log(txt[2]);
// Sass는 1부터 다른언어는 0부터 시작한다.
console.log(txt[-1]); // 지원하지 않는다.
console.log(txt.length);
console.log(txt.indexOf("E"));
console.log(txt.search("E"));
console.log(txt.indexOf("Z")); // 없는값은 -1
console.log(txt.search("Z")); // 없는값은 -1

let regExp = /CD/;
console.log(txt.search(regExp));
console.log(txt.replace("ABC", "HELLO"));

    let txt2 = "abcdeHelloabcde";
    // 대문자 찾기
    let regExp2 = /[A-Z]/g;
    console.log(txt2.search(regExp2));

    let txt3 = "abcdeHelloabcde";
    // 대문자 찾기
    let regExp3 = /[A-Z]/g;
    console.log(txt3.replace(regExp3, 'h'));