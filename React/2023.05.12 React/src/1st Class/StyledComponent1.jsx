import React from 'react'
import { createGlobalStyle } from 'styled-components'
import './styledComponent1.css'

export default function StyledComponent1() {
  return (
    <div>
      <h1>StyledComponent1</h1>

      <GlobalStyle/>
      <Example/>
    </div>
  )
}

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