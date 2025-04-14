import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function UseLayoutEffect1() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
    </main>
  )
}

  function LayoutEffect() {
    const [value, setValue] = useState(100);
  
    useLayoutEffect(() => {
      if (value >= 1000) {
        setValue(300);
      }
    }, [value]);
    
    return (
      <div>
      <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div>
        <button onClick={() => {setValue(1000)}}>커져랏!</button>
        <button onClick={() => {setValue(200)}}>작아져랏!</button>
      </div>
    )
  }



  function Example1() {
    const codeString = `
      function LayoutEffect() {
        const [value, setValue] = useState(100);
      
        useLayoutEffect(() => {
          if (value >= 1000) {
            setValue(300);
          }
        }, [value]);
        
        return (
          <div>
          <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div>
            <button onClick={() => {setValue(1000)}}>커져랏!</button>
            <button onClick={() => {setValue(200)}}>작아져랏!</button>
          </div>
        )
      }
    `
    
    return (
      <Wrap>
        <Title>useEffect VS useLayoutEffect</Title>
          <p>
            uselayoutEffect를 useEffect로 바꾸게 되면 커져랏을 누르고 다시 누르면 화면이 깜빡인데 이를 방지하기 위해 useLayoutEffect를 사용한다.
            이는 uselayoutEffect가 화면을 그리기 이전에 작동하기 때문에 깜빡이지 않는다.
            <br />
            이럼 uselayoutEffect를 사용하는게 좋지 않을까 싶지만 아니다.<br />
            이는 useEffect는 비동기적으로 동작하지만, useLayoutEffect는 동기적으로 동작하기 때문입니다. 따라서 useLayoutEffect가 오래걸리는 작업이라면 화면도 늦게 렌더링됩니다.
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
            <LayoutEffect />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }