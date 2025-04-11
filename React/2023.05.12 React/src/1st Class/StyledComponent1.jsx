import React from 'react'
import { createGlobalStyle } from 'styled-components'
import './styledComponent1.css'

export default function StyledComponent1() {
  return (
    <div>
      <h1>StyledComponent1</h1>

      <GlobalStyle/>
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example/>
    </div>
  )
}


// 글로벌 스타일은 모든 컴포넌트에서 공통으로 적용되는 스타일이다.
const GlobalStyle = createGlobalStyle`
span {
  color: red;
  font-size: 12px;
}
`

export function Example() {
  return (
    <>
      <h1>hello world 3</h1>
      <span className='color-text'>hello world 4</span>
    </>
  )
}