// 글자수 제한: .substring(시작, 끝)

function counter() {
  var content = document.getElementById("jasoseol").value;
  if (content.length > 200) {
    content = content.substring(0, 200);
    document.getElementById("jasoseol").value = content;
  }
  document.getElementById("count").innerHTML = "(' + content.length + '/200)";
};
counter();