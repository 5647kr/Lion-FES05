import React from 'react'
import styled, { css } from 'styled-components'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function StyledComponent3() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
      <Example2/>
    </main>
  )
}


const One = css`
  color: red;
`

const Two = css`
  border: 1px solid black;
`

const Three = styled.div`
  ${One}
  ${Two}
`

function StyledComponentPratice1() {
  return (
    <Three>Lorem ipsum dolor sit</Three>
  )
}


function Example1() {
  const codeString = `
const One = css\`
  color: red;
\`

const Two = css\`
  border: 1px solid black;
\`

const Three = styled.div\`
  \${One}
  \${Two}
\`

function StyledComponentPratice1() {
  return (
    <Three>Lorem ipsum dolor sit</Three>
  )
}
  `
  
  return (
    <Wrap>
      <Title>StyledComponent</Title>
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
          <StyledComponentPratice1 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}


const Base = css`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  cursor: pointer;
`;

const Btn1 = styled.button`
  ${Base}
  background-color: skyblue;
  color: white;
  &:hover {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  }
  `
const Btn2 = styled(Btn1)`
  ${Base}
  background-color: #333;
  color: yellow;
  `
const Btn3 = styled(Btn1)`
  ${Base}
  background-color: gray;
  border: 1px solid black;
`

function StyledComponentPratice2() {
  return (
    <>
      <Btn1>버튼1</Btn1>
      <Btn2>버튼2</Btn2>
      <Btn3>버튼3</Btn3>
    </>
  )
}


function Example2() {
  const codeString = `
const Base = css\`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  cursor: pointer;
\`;

const Btn1 = styled.button\`
  \${Base}
  background-color: skyblue;
  color: white;
  &:hover {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  }
\`
const Btn2 = styled(Btn1)\`
  \${Base}
  background-color: #333;
  color: yellow;
\`
const Btn3 = styled(Btn1)\`
  \${Base}
  background-color: gray;
  border: 1px solid black;
\`

function StyledComponentPratice2() {
  return (
    <>
      <Btn1>버튼1</Btn1>
      <Btn2>버튼2</Btn2>
      <Btn3>버튼3</Btn3>
    </>
  )
}
  `
  
  return (
    <Wrap>
      <Title>StyledComponent 실습</Title>
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