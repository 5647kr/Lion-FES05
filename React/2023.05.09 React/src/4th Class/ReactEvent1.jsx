import React, { useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'



export default function ReactEvent1() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
      <Example2/>
      <Example3/>
    </main>
  )
}

function EventPractice1() {
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


function Example1() {
  const codeString = `
function EventPractice1() {
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
  `
  
  return (
    <Wrap>
      <Title>React Event</Title>
      <p>JSX를 사용하여 함수로 이벤트 핸들러를 전달한다.</p>
      <h2>이벤트 종류</h2>
      <ul>
        <li>onClick</li>
        <li>onChange</li>
        <li>onInput</li>
        <li>onFocus</li>
        <li>onMouseEnter</li>
        <li>onMouseLeave</li>
      </ul>
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
          <EventPractice1 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}


function EventPractice2() {
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


function Example2() {
  const codeString = `
function EventPractice2() {
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
  `
  
  return (
    <Wrap>
      <Title>React Event</Title>
      <p>useState과 이벤트를 같이 사용해보기</p>


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
          <EventPractice2 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}





















function EventPractice3() {
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


function Example3() {
  const codeString = `
function EventPractice3() {
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
    alert(\`id : \${id}, pw : \${pw}\`);
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
  `
  
  return (
    <Wrap>
      <Title>React Event</Title>
      <p>실무와 연관된 로그인 form 이벤트</p>


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
          <EventPractice3 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}