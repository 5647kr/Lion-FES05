// document.getElementById("jasoseol")
// .value 또는 .innerhtml 로 값을 불러올 수 있다.
/*
var content = document.getElementById("jasoseol").value;
console.log(content);
*/

// 문자열의 길이: .length
/* 
var content = document.getElementById("jasoseol").value;
document.getElementById("count").innerHTML = "(" + content.length + "/200)";
*/

// 함수
/* function 함수이름() {
  명령어1;
  명령어2;
} */

function counter() {
  var content = document.getElementById("jasoseol").value;
  document.getElementById("count").innerHTML = "(" + content.length + "/200)";
};
counter();

// 이벤트
// 마우스클릭, 키보드 누름, 값변화, 페이지 로딩 등등
// 이벤트핸들링: 이벤트가 발생하면 ~을 해라
// html태그안에 '이벤트 = 이벤트 핸들링'을 작성한다.