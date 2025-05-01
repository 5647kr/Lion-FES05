import React, { useEffect, useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function LazyInitialize2() {
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

    const [name, setName] = useState(getName);
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

  const [name, setName] = useState(getName);
  const [num, setNum] = useState(0);
  return(
    <>
      <div>안녕하세요 {name}! 현재 숫자는{num}입니다</div>
      <button onClick={()=>setNum((prevNum)=>prevNum+1)}>{num}</button>
    </>
  )
}
  `
  
  return (
    <Wrap>
      <Title>Lazy initialize</Title>
        <p>
        useState()의 인수로 getName함수자체를 값으로 넘겨주게 되면 useState(getName)이 진행되면서 최초 초기화 진행 과정에서 getName을 실행하게 된다. 이후 업데이트에서 초기화가 진행되지 않기 때문에 getName을 싱행하는 부분이 생략된다.
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