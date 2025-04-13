import React from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function UseEffectFetch1() {
  return (
    <main style={{margin: "0 300px"}}>
    <Example1/>
  </main>
  )
}

  function UseEffectApiFetch() {
    return (
      <>
        <h1>hello world</h1>
      </>
    )
  }



  function Example1() {
    const codeString = `
    
    `
    
    return (
      <Wrap>
        <Title>UseEffect를 이용한 API 통신</Title>
          <p>
          json 서버와 통신을 해야한다. 그러한 이유로 터미널을 열어서 다음 명령어를 실행한다.
          </p>
          <code>json-server --watch ./data/data.json</code>
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
            <UseEffectApiFetch />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }