import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function HookFlow1() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
    </main>
  )
}

  function HookFlowPratice1() {
    const [num, setNum] = useState(0);

    const onClick = () => {
      setNum(num + 1);
    }

    useLayoutEffect(() => { 
      console.log("⏱마운트 될때 브라우저에 그려주기 전에 딱 한번실행!");
      return ()=>{
        console.log("⏱🧹언마운트될때 단 한번 실행됩니다!")
      }
    }, []); 
  
    useLayoutEffect(() => {
      console.log("⏱마운트/업데이트 될때마다 브라우저에 그려주기 전에 실행!");
      return ()=>{
        console.log("⏱🧹업데이트가 될때, 언마운트될때 실행됩니다!")
      }
    });
  
    useLayoutEffect(() => {
      console.log("⏱마운트 될때, num state변경으로 인해 업데이트 될때 브라우저에 그려주기 전에 실행!");
      return ()=>{
        console.log("⏱🧹업데이트가 될때, 언마운트될때 실행됩니다!")
      }
    }, [num]);
  
    //useLayoutEffect가 모두 끝난 후에야 브라우저에 그려주기 시작합니다.
  
    useEffect(() => {
      console.log("🎈마운트 될때 브라우저에 그려진 후 딱 한번실행!");
      return ()=>{
        console.log("🎈🧹언마운트될때 단 한번 실행됩니다!")
      }
    }, []);
  
    useEffect(() => {
      console.log("🎈마운트/업데이트 될때마다 브라우저에 그려진 후 실행!");
      return ()=>{
        console.log("🎈🧹업데이트가 될때, 언마운트될때 실행됩니다!")
      }
    }); 
  
    useEffect(() => {
      console.log("🎈마운트 될 때, num state변경으로 인해 업데이트 될때 브라우저에 그려진 후 실행!");
      return ()=>{
        console.log("🎈🧹업데이트가 될때, 언마운트될때 실행됩니다!")
      }
    }, [num]);
  
    return (
        <button onClick={onClick}>{num}</button>
    );
  }
  const Container = ()=>{
    const [isVisible,setIsVisible] = useState(true)
    const handleClick = ()=> setIsVisible(!isVisible)
    return (
      <>
        <button onClick={handleClick}>{isVisible? "언마운트시키기" : "마운트시키기"}</button>
        <br></br>
        {isVisible&& <HookFlowPratice1 />}
      </>
    )
  }



  function Example1() {
    const codeString = `
    `
    
    return (
      <Wrap>
        <Title>HookFlow</Title>
          <p>
            useLayoutEffect는 화면을 그리기 이전에 실행, useEffect는 화면을 그린 이후에 실행
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
            <HookFlowPratice1 />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }