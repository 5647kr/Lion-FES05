$(function(){
  // p 엘리먼트를 선택하고 숨긴다.
  // $("p").hide();

  // test id를 가진 엘리먼트를 선택하고 표시한다.
  $("#test").show();

  // test class를 가진 엘리먼트를 선택하고 해당 엘리먼트의 내용을 변경한다.
  $('.test').text('hello world');

  // test id를 가진 엘리먼트의 내용을 변경한다.
  // $('#test').html('<b>hello</b> world');

  // test id를 가진 엘리먼트를 선택하고 폰트컬러를 red로 변경한다.
  // $('#test').css('color', 'red');

  // img 엘리먼트를 선택하고 src속성의 값을 변경한다.
  // $('img').attr('src', 'a.jpg');

  // one 클래스 하위에 존재하는 two 클래스를 가진 엘리먼트를 선택하고 내용을 변경한다.
  // $('.one .two').text('hello world');

  // two라는 id를 가진 p 엘리먼트를 선택하고 내용을 변경한다.
  // $('p#two').text('hello world');

  // test class를 가진 엘리먼트를 클릭시에 alert을 실행한다.
  // $(".test").click(function () {
  //   alert("클릭!");
  // });

  // test class를 가진 엘리먼트를 클릭시에 해당 엘리먼트의 폰트 컬러를 red로 변경한다.
  // $(".test").click(function () {
  //   $(this).css('color', 'red');
  // });
})
