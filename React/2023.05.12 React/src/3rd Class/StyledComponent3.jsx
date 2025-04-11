import React from 'react'
import styled, { css } from 'styled-components'
import { Wrap, Title, ContentWrap } from '../style/CommonStyle'


export default function StyledComponent3() {
  return (
    <main style={{margin: "0 300px"}}>
      <h1>StyledComponent3</h1>

      <Example1 />
    </main>
  )
}


function Example1() {
  const codeString1 = `
  function BtnPractice1() {
    return (
      <>
        <Btn1>버튼1</Btn1>
        <Btn2>버튼2</Btn2>
        <Btn3>버튼3</Btn3>
      </>
    )
  }

  const Btn1 = styled.button\`
    width: 100px;
    height: 60px;
    border: 1px solid #000;
    background-color: #ff0;
    color: #000;
  \`

  const Btn2 = styled(Btn1)\`
    border-radius: 30px;
    background-color: #00f;
    color: #fff;
  \`

  const Btn3 = styled(Btn1)\`
    border-radius: 10px;
    background-color: #bac;
    &:hover {
      background-color: #000;
      color: #fff;
      cursor: pointer;
    }
  \`
  `

  return (
    <Wrap>
      <Title>버튼 상속 실습</Title>
        <p>버튼 3개를 만든다. 그 중 2개의 버튼은 첫번째 버튼의 스타일을 확장하여 만든다.</p>
      <ContentWrap>
        <div>
          <strong>코드</strong>
          <pre>
            <code>
              {codeString1}
            </code>
          </pre>
        </div>
        <div>
          <strong>실행 결과</strong>
          <BtnPractice1 />
        </div>
      </ContentWrap>
    </Wrap>
  )
}

  function BtnPractice1() {
    return (
      <>
        <Btn1>버튼1</Btn1>
        <Btn2>버튼2</Btn2>
        <Btn3>버튼3</Btn3>
      </>
    )
  }

  const Btn1 = styled.button`
    width: 100px;
    height: 60px;
    border: 1px solid #000;
    background-color: #ff0;
    color: #000;
  `

  const Btn2 = styled(Btn1)`
    border-radius: 30px;
    background-color: #00f;
    color: #fff;
  `

  const Btn3 = styled(Btn1)`
    border-radius: 10px;
    background-color: #bac;
    &:hover {
      background-color: #000;
      color: #fff;
      cursor: pointer;
    }
  `