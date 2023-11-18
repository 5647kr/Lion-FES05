import React from 'react'
import styled, { css } from 'styled-components'

export default function StyledComponent3() {
  return (
    <div>
      <h1>StyledComponent3</h1>

      <Test1 />
      <Test2 />
    </div>
  )
}

const Test1 = () => {
	return (
    <Three>Lorem ipsum dolor</Three>
	);
};
  const One = css`
    color: red;
  `;
  
  const Two = css`
    border: 1px solid black;
  `;
  
  const Three = styled.div`
    ${One}
    ${Two}
  `

const Test2 = () => {
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
    height: 40px;
    background-color: skyblue;
    color: #fff;
    box-shadow: inset 1px 1px 0 black;
    cursor: pointer;
  `

  const Btn2 = styled(Btn1)`
    background-color: aquamarine;
    border-radius: 30px;
    border: none;
    box-shadow: none;
    font-weight: bold;
    color: #000;
`

  const Btn3 = styled(Btn2)`
    background-color: greenyellow;
    color: #fff;
  `