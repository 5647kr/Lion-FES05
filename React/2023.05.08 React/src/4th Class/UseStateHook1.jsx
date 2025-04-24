import React, { useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'


export default function UseStateHook1() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
      <Example2/>
    </main>
  )
}




function UseStatePractice1() {
  return (
    <>
      <UseState1 />
      <UseState2 />
    </>
  )
}

function UseState1() {
  let like = 0;

  function clickLike() {
    like += 1;
    console.log(like);
  }

  return(
    <div>
      <button onClick={clickLike}>like <span>{like}</span></button>
    </div>
  )
}

function UseState2() {
  const [like, setLike] = useState(0);

  function clickLike() {
    setLike(like + 1);
  }

  return(
    <div>
      <button onClick={clickLike}>like 
        <span>{like}</span>
      </button>

      <button onClick={() => setLike(like + 1)}>like 
        <span>{like}</span>
      </button>
    </div>
  )
}

function Example1() {
  const codeString = `
function UseState1() {
  let like = 0;

  function clickLike() {
    like += 1;
    console.log(like);
  }

  return(
    <div>
      <button onClick={clickLike}>like <span>{like}</span></button>
    </div>
  )
}

function UseState2() {
  const [like, setLike] = useState(0);

  function clickLike() {
    setLike(like + 1);
  }

  return(
    <div>
      <button onClick={clickLike}>like 
        <span>{like}</span>
      </button>

      <button onClick={() => setLike(like + 1)}>like 
        <span>{like}</span>
      </button>
    </div>
  )
}
  `
  
  return (
    <Wrap>
      <Title>BasicHook: UseState</Title>
      <p>변수의 값이 변경될 때마다 페이지를 업데이트 하도록 만들어 주는것이 useState이다.</p>
      <p>[변수, 변수가 변경할 떄 실행할 함수] = useState(초기값)</p>
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
          <UseStatePractice1 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}













function UseStatePractice2() {
  const [txt, setTxt] = useState("hello")

  function handleTxt(event) {
    setTxt(event.target.value)
  }

  return(
    <div>
      <input type="text" value={txt} onChange={handleTxt}/>
    </div>
  )
}



function Example2() {
  const codeString = `
function UseStatePractice2() {
  const [txt, setTxt] = useState("hello")

  function handleTxt(event) {
    setTxt(event.target.value)
  }

  return(
    <div>
      <input type="text" value={txt} onChange={handleTxt}/>
    </div>
  )
}
  `
  
  return (
    <Wrap>
      <Title>BasicHook: UseState</Title>
      <p>변수의 값이 변경될 때마다 페이지를 업데이트 하도록 만들어 주는것이 useState이다.</p>
      <p>[변수, 변수가 변경할 떄 실행할 함수] = useState(초기값)</p>
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
          <UseStatePractice2 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}












