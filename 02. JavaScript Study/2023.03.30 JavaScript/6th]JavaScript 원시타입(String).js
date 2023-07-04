console.log("----------slice----------");

// slice(시작인덱스, 종료인덱스): 시작인덱스 ~ 종료인덱스-1

let text1 = "ABCDEFGHIJK";
console.log(text1.slice(1, 3)); 
// 1부터 시작해서 3전에 잘린다. start, end(-1)
console.log(text1.slice(3)); // 1부터 마지막까지 start
console.log(text1.slice(3, 1)); // 안됨
console.log(text1.slice(2, -3)); // -3을 인식해서 2번째부터 뒤에서 -3번째 이전까지 잘라낸다.

console.log("----------substring----------");

// substring(시작인덱스, 종료인덱스): 시작인덱스 ~ 종료인덱스-1

let text2 = "ABCDEFGHIJK";
console.log(text2.substring(1, 3));
console.log(text2.substring(3));
console.log(text2.substring(3, 1)); // 작동한다.
console.log(text2.substring(2, -3)); 
// -3을 0으로 인식한다. 즉(2, 0)와 마찬가지이다.

console.log("----------replace(All)----------");

let text3 = "paullab CEO Leehojun CEO";
console.log(text3.replace("CEO", "COO")); //! 첫번째 CEO만 바뀐다.
console.log(text3.replace(/CEO/g, "COO")); // g: global(정규표현식)
console.log(text3.replaceAll("CEO", "COO")); 
// replaceAll은 21년도에 추가되어 아직은 replace사용을 권장한다.

console.log("----------toLowercase,toUppercase----------");

let text4 = "paullab CEO Leehojun CEO";
console.log(text4.toLowerCase());
console.log(text4.toUpperCase());

console.log("----------includes----------");

let text5 = "paullab CEO Leehojun CEO";
console.log(text5.includes("CEO"));
console.log(text5.includes("CDO"));

// 많이 사용되는것 특히 알고리즘 문제
console.log("----------메서드 채이닝----------");

// .찍어서 계속 이어나가는 것을 의미한다.

let text6 = "paullab CEO Leehojun CEO";
console.log(text6.replace("CEO", "CDO").includes("CDO").toString().toUpperCase());

console.log("----------split----------");

// 정말 많이 사용되는 메서드

let text7 = "paullab CEO Leehojun CEO";
console.log(text7.split(" "));

console.log("----------split 문제----------");

let test1 = "aa bb cc dd";
let test2 = "aa-bb-cc-dd";
let test3 = "aa,bb,cc,dd";
let test4 = "aa,bb-cc-dd"; // 중급자만
["aa", "bb", "cc", "dd"]
console.log(test1.split(" "));
console.log(test2.split("-"));
console.log(test3.split(","));
// 4번 자주 볼것
console.log(test4.split(/[,-]/g));
console.log(test4.replace(",", "-").split("-"));

// 자주 사용하진 않지만, 이걸 몰라서 직접 구현하면 번거로운 메서드

console.log("----------trim----------");

// 앞 뒤 공백 제거

let text8 = "                       hello world              ";
console.log(text8.replaceAll(" ", ""));
// 이렇게 쓰지 말것 hello 와 world사이 띄어쓰기도 삭제해버림
console.log(text8.trim());

console.log("----------padStart 1----------");

let text9 = '99'
console.log(text9.padStart(5, '0'));
// 5자리 맞춰주고 그 빈 자리는 0 으로 채운다.

console.log("----------padStart 2----------");

let text10 = '99'
console.log(text10.padStart(5, '-'));