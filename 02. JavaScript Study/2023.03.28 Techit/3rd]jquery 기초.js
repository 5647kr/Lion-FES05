// jquery의 기본문법
// $(선택자).행위;
console.log($("#content").val());

// jquery 이벤트
/* 
<button id="click">클릭</button>
$("#click").click(hello);
*/
function hello() {
  console.log("hello");
}

// jquery로 변환
$("#click2").click(hello);

// 익명함수: 이름이 없는 함수
$("#click3").click(function() {
  console.log("hello");
});