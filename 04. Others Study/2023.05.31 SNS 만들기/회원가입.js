// 회원가입을 구현할 것이다.
// 회원가입하려면 뭐 필요함? -> email, password

// API란 application을 만드는데 도와주는 도구

// {
// 		"user": {
//       "username": String*,
//       "email": String*,
//       "password": String*,
//       "accountname": String*,
//       "intro": String,
//       "image": String // 예시) https://api.mandarin.weniv.co.kr/1641906557953.png
//   }
// } 

// 1. 감귤마켓 시작하기를 눌렀을 때 회원가입이 되어야함.
// 1-1. 버튼을 클릭했을 때 뭔가 일어나야 함
// 1-2. 버튼을 찾는다
const btnSubmit = document.querySelector(".submit-btn");

const handleBtnSubmit = () => {
  // 1-5. 값을 불러와서 데이터를 만든다.
  const email = emailInput.value;
  const password = passwordInput.value;
  const userName = userNameInput.value;
  const userId = userIdInput.value;
  const intro = introInput.value;
  const imageUrl = document.querySelector("#imagePre").src;

  console.log("클릭이 되었다!");
  console.log(email, password, userName, userId, intro);
  // 버튼 눌렀을때 인풋 요소에서 입력된 값들을 가져온다.

  // 1-6. 데이터 형식으로 요청용 데이터를 만든다.
  const data = {
    "user": {
      "username": userName,
      "email": email,
      "password": password,
      "accountname": userId,
      "intro": intro,
      "image": imageUrl
    }
  };
  console.log(data);

  // 1-7. API를 요청한다.(headers, body)
  fetch("https://api.mandarin.weniv.co.kr/user", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data) //data 에서 JSON.stringify로 변경한다.
    // 요청
  }).then((res) => res.json()).then((json) => console.log(json)); //응답
  //! 콘솔창 네트워크 응답에 보면 타입이 "entity.parse.failed" 뜬다
  //! 그 이유는 데이터값이 object object이기 때문이다. 
  //! http요청은 모두 다 text로 보내기 때문에 데이터를 문자열로 바꿔야한다.
  // 1-8. 54번째 줄 변경
};

btnSubmit.addEventListener("click", handleBtnSubmit);

// 1-3. 버튼을 클릭했을 때 입력창에 있는 데이터를 받아와야 한다.
// 1-4. 인풋요소를 선택한다.
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const userNameInput = document.querySelector("#userNameInput");
const userIdInput = document.querySelector("#userIdInput");
const introInput = document.querySelector("#userIntroInput");

// 2. 프로필 이미지 작업하기

// 2-1. 이미지 파일을 선택한다.
const imageInput = document.querySelector("#profileImg");

// 2-2. 선택된 이미지 파일을 서버로 업로드 한다.
// 2-2-1. 내가 input에 파일을 선택 했을 때 파일 업로드가 이루어져야한다.
// 2-2-2. 파일 확인해야한다.
const handleImageInput = async (e) => {
  // 2-2-3 postman에서 form-data 형식으로 불러왔기 떄문에 form-data를 만들어야한다.
  const formData = new FormData();
  const imageFile = e.target.files[0];
  formData.append("image", imageFile); // 데이터 완성

  // 완성되어서 fetch 80번줄에 async 추가, 88번줄 부터 이어서 작성

  const res = await fetch("https://api.mandarin.weniv.co.kr/image/uploadfile", {
    method: "POST",
    body: formData
  });
  const json = await res.json();
  console.log(json);

  // 2-3. 이미지 태그에 주소를 바꿔준다.
  document.querySelector("#imagePre").src = "https://api.mandarin.weniv.co.kr/"+json.filename;
  // 위 주소를 프로필 이미지에 사용한다. 29번째 줄 추가 / data에 이미지 주소 추가

  console.log("파일바뀜");
  console.log(e.target.files);
}
imageInput.addEventListener("change", handleImageInput);