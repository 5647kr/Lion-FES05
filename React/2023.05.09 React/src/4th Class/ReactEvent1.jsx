import React, { useState } from 'react'

export default function ReactEvent1() {
  return (
    <div>
      <h1>ReactEvent1</h1>

      <Event1 />
      <Event2 />
      <LoginEvent />
    </div>
  )
}

export function Event1() {
  const handleOnMouseEnter = () => {
    console.log("안녕하세요!");
  };
  
  const handleOnMouseLeave = () => {
    console.log("안녕히가세요!");
  };
  
  return (
    <div>
      <p 
        onMouseEnter={handleOnMouseEnter} 
        onMouseLeave={handleOnMouseLeave}
      >
        여기에 마우스를 올려보세요! 콘솔창 확인
      </p>
    </div>
  );
}

export function Event2() {
  const [message, setMessage] = useState("여기를 주목하세요");
  //set은 상태를 갱신한다. -> 배열 전달
  //useState는 컴포넌트를 랜더링하는데 목적이 있다.

  const handleOnMouseEnter = () => {
    setMessage("안녕하세요!");
  };

  const handleOnMouseLeave = () => {
    setMessage("안녕히가세요!");
  };

  return (
    <div>
      <p 
        onMouseEnter={handleOnMouseEnter} 
        onMouseLeave={handleOnMouseLeave}
      >
        여기에 마우스를 올려보세요!
      </p>
      <div>{message}</div>
    </div>
  );
}

export function LoginEvent() {

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    //태그의 기능을 막아준다.

    console.log("submit");
    if(id === ''){
      alert('아이디를 입력하지 않았습니다.')
    }
    if(pw === ''){
      alert('패스워드를 입력하지 않았습니다.')
    }
    alert(`id : ${id}, pw : ${pw}`);
  };

  const handleLoginInput = (e) => {
    console.log("id", e.target.value);
    setId(e.target.value)
  };

  const handlePasswordInput = (e) => {
    console.log("pw", e.target.value);
    setPw(e.target.value)
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 : <input type="text" value={id} onChange={handleLoginInput} />
      </label>
      <br/>
      <label>
        비밀번호 :
        <input type="password" value={pw} onChange={handlePasswordInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}