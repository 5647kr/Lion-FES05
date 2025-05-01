import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function UseEffect1() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
    </main>
  )
}

  function EffectVsLayoutEffect() {
    const [num, setNum] = useState(0)

    useEffect(() => {
      setNum(10)
    }, [num])

    return (
      <>
        <div>{num}</div>
        <button onClick={() => setNum(prevNum => prevNum + 1)}>클릭</button>
      </>
    )
  }



  function Example1() {
    const codeString = `
function EffectVsLayoutEffect() {
  const [num, setNum] = useState(0)

  useEffect(() => {
    setNum(10)
  }, [num])

  return (
    <>
      <div>{num}</div>
      <button onClick={() => setNum(prevNum => prevNum + 1)}>클릭</button>
    </>
  )
}
    `
    
    return (
      <Wrap>
        <Title>useEffect VS useLayoutEffect</Title>
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
            <EffectVsLayoutEffect />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
}