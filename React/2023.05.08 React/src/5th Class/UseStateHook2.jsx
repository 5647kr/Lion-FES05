import React, { useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'


export default function UseStateHook2() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
    </main>
  )
}



function UseStatePractice1() {
  const [like, setLike] = useState(false);

  function clickLike() {
    setLike(!like);
  }

  return(
    <div>
      <button onClick={clickLike}>like</button>
      <span>{like ? "Like" : ""}</span>
    </div>
  )
}


function Example1() {
  const codeString = `
function UseStatePractice1() {
  const [like, setLike] = useState(false);

  function clickLike() {
    setLike(!like);
  }

  return(
    <div>
      <button onClick={clickLike}>like</button>
      <span>{like ? "Like" : ""}</span>
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






