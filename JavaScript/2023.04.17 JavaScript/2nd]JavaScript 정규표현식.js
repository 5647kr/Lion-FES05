console.log("----------replace----------");

"paullab CEO leehojun hello CEO"
// 문자열 1개만 매칭되어 변경
console.log("paullab CEO leehojun hello CEO".replace("CEO", "CTO"));
// flag로 global을 주어서 전체 변경(m-다중라인, i-대소문자구분x)
console.log("paullab CEO leehojun hello CEO".replace(/CEO/g, "CTO"));

console.log("----------match----------");

// 패턴을 찾아 array로 반환
console.log("paullab CEO leehojun hello CEO".match(/CEO/g));

console.log("----------split----------");

// 패턴으로 split
// 내가 원하는 갯수보다 1개가 더 추가되어 나온다
console.log("paullab CEO leehojun hello CEO".split(/CEO/g));
console.log("!a!ab!abc!abcd".split("!")); 
console.log("!!!".split("!")); 
console.log("!a!a!a!a".split("!")); 
console.log("a!a!a!a!".split("!")); 
console.log("a!a!a!a!".split("!").length - 1); // 그래서 -1을 한다.

console.log("----------test----------");

console.log((/CEO/g).test("paullab CEO leehojun hello CEO"));