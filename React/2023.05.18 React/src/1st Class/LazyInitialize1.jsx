import React, { useEffect, useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function LazyInitialize1() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
    </main>
  )
}

  function LazyPratice1() {
    
    function getName(){
      console.log("사실은 겁나 오래기다리는중...");
      return "개리";
    }

    const [name, setName] = useState(getName());
    const [num, setNum] = useState(0);
    return(
      <>
        <div>안녕하세요 {name}! 현재 숫자는{num}입니다</div>
        <button onClick={()=>setNum((prevNum)=>prevNum+1)}>{num}</button>
      </>
    )
  }



  function Example1() {
    const codeString = `
function LazyPratice1() {
  
  function getName(){
    console.log("사실은 겁나 오래기다리는중...");
    return "개리";
  }

  const [name, setName] = useState(getName());
  const [num, setNum] = useState(0);
  return(
    <>
      <div>안녕하세요 {name}! 현재 숫자는{num}입니다</div>
      <button onClick={()=>setNum((prevNum)=>prevNum+1)}>{num}</button>
    </>
  )
}

(prevNum)=>prevNum+1) <- 함수형 업데이트라 한다.
함수자체를 전달하게 되면 인자의 이전 값을 보장한다.
    `
    
    return (
      <Wrap>
        <Title>Lazy initialize</Title>
          <p>
          Lazy initialize는 useState를 사용하여 state를 초기화하는 과정을 lazy(게으르게)하게 실행하는 것입니다.
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
            <LazyPratice1 />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }