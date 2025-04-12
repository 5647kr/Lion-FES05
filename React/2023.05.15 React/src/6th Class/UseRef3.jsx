import React, { useRef, useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function UseRef3() {
  return (
    <main style={{margin: "0 300px"}}>
      <Example1/>
    </main>
  )
}

  export function Signup() {
  const emailInput = useRef(null); // email input에 대한 useRef
  const pwInput = useRef(null); // pw input에 대한 useRef

  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값

  const inputCheck = (e) => {
    e.preventDefault();
    if (emailInput.current.value === "") {
      alert("이메일을 입력해주세요");
      emailInput.current.focus();
      return;
    } else if (pwInput.current.value === "") {
      alert("비밀번호를 입력해주세요");
      pwInput.current.focus();
      return;
    }
    setEmailValue(emailInput.current.value);
    setPwValue(pwInput.current.value);
  };

  return (
    <form onSubmit={inputCheck} style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" ref={emailInput} />
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput} />
      </label>

      <button type="submit" style={{ width: "100px" }} >
        회원가입
      </button>
      <span>{emailValue}</span>
      <span>{pwValue}</span>
    </form>
  );
};



function Example1() {
  const codeString = `
    export function Signup() {
      const emailInput = useRef(null); // email input에 대한 useRef
      const pwInput = useRef(null); // pw input에 대한 useRef

      const [emailValue, setEmailValue] = useState(""); // email state 값
      const [pwValue, setPwValue] = useState(""); // pw state 값

      const inputCheck = (e) => {
        e.preventDefault();
        if (emailInput.current.value === "") {
          alert("이메일을 입력해주세요");
          emailInput.current.focus();
          return;
        } else if (pwInput.current.value === "") {
          alert("비밀번호를 입력해주세요");
          pwInput.current.focus();
          return;
        }
        setEmailValue(emailInput.current.value);
        setPwValue(pwInput.current.value);
      };

      return (
        <form onSubmit={inputCheck} style={{ display: "flex", flexDirection: "column" }}>
          <label>
            이메일 : <input type="email" ref={emailInput} />
          </label>
          <label>
            비밀번호 : <input type="password" ref={pwInput} />
          </label>

          <button type="submit" style={{ width: "100px" }} >
            회원가입
          </button>
          <span>{emailValue}</span>
          <span>{pwValue}</span>
        </form>
      );
    };
  `
  
  return (
    <Wrap>
      <Title>UseRef</Title>
        <p>
          state가 변할 때마다 다른 효과를 주고 싶을때 useEffect를 사용한다.
        </p>
      <ContentWrap>
        <CodeWrap>
          <strong>코드</strong>
          <pre>
            <code>
              {codeString}
            </code>
          </pre>
        </CodeWrap>
        <ResultWrap>
          <strong>실행 결과</strong>
          <Signup />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}
