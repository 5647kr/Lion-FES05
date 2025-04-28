import React from 'react'
import { createGlobalStyle } from 'styled-components'
import './styledComponent1.css'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function StyledComponent1() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
    </main>
  )
}

const GlobalStyle = createGlobalStyle`
span {
  color: red;
  font-size: 12px;
}
`

function StyledComponentPratice1() {
  return (
    <>
      <h1>hello world 3</h1>
      <span className='color-text'>hello world 4</span>
    </>
  )
}

function StyledComponentPratice2() {
  return (
    <>
      <GlobalStyle/>
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <StyledComponentPratice1 />
    </>
  )
}


function Example1() {
  const codeString = `
const GlobalStyle = createGlobalStyle\`
span {
  color: red;
  font-size: 12px;
}
\`

function StyledComponentPratice1() {
  return (
    <>
      <h1>hello world 3</h1>
      <span className='color-text'>hello world 4</span>
    </>
  )
}

function StyledComponentPratice2() {
  return (
    <>
      <GlobalStyle/>
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <StyledComponentPratice1 />
    </>
  )
}
  `
  
  return (
    <Wrap>
      <Title>StyledComponent</Title>
      <p>글로벌 스타일은 모든 컴포넌트에서 공통으로 적용되는 스타일이다.</p>
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
          <StyledComponentPratice2 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}
