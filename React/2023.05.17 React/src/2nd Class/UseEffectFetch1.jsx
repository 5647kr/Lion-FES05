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
        <code>
          데이터 생성함
        </code>
      </>
    )
  }



  function Example1() {
    const codeString = `
[
  {
    "id": "1",
    "title": "France",
    "population": "100",
    "loc": "Europe"
  },
  {
    "id": "2",
    "title": "Italy",
    "population": "200",
    "loc": "Europe"
  },
  {
    "id": "3",
    "title": "England",
    "population": "300",
    "loc": "Europe"
  },
  {
    "id": "4",
    "title": "USA",
    "population": "400",
    "loc": "America"
  },
  {
    "id": "5",
    "title": "Korea",
    "population": "500",
    "loc": "Asia"
  }
]
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