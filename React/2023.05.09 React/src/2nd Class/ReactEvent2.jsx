import React, { useState } from 'react'
import HomePage from './HomePage';

export default function ReactEvent2() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234'
  }
  const [login, setLogin] = useState(false);

  console.log(login)
  return (
    login ? <HomePage /> : <LoginEvent user={user} setLogin={setLogin}/>
  )
}

export function LoginEvent({user, setLogin}) {

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
    
    if(user.idUser === id && user.pwUser === pw) {
      setLogin(true);
    }
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