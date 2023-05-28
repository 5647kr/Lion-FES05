  const root = document.getElementById("root");
  const header = document.createElement("h1");
  header.innerText = "아 이건 제목이야!";
  root.appendChild(header);

  // 윗 4줄을 react로 바꿔본다.
  ReactDOM.render(<h1>"아 이건 제목이야!!!"</h1>, root);
  // 문법을 모른다고 에러를 뿜는다.
