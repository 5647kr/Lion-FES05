import React from 'react'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'



const GlobalStyle = createGlobalStyle`
${reset}

span {
color: red;
font-size: 12px;
}

a{
  text-decoration : none;
  color : inherit;
}

button{
  border : none;
  cursor : pointer;
}

* {
box-sizing: border-box;
}
`


export default function StyledComponent2() {
  return (
    <div>
      <h1>StyledComponent2</h1>

      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
    </div>
  )
  }

export function Example1() {
  const name = '이호준'
  const age = 10

  function 인사(문구, 이름, 나이){
    console.log(문구[0])
    console.log(문구[1])
    console.log(문구[2])
    console.log(문구, 이름, 나이)
    return `${문구[0]}${이름}${문구[1]}${나이+나이}${문구[2]}`
  }

  const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age+age}입니다.`

  console.log(인사문구)
  return (
    <>
      <h2>Example1</h2>
      <strong>{인사`이름은 ${name}이고 나이는 ${age+age}입니다.`}</strong>
      <p>==========================</p>
    </>
  )
}


export function Example2() {
  return (
    <>
      <GlobalStyle/>
      <h1>Example2</h1>
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <p>==========================</p>
    </>
  )
}

export function Example3() {
  return (
    <ContentDiv>
      <h1>Example3</h1>
      <ContentH2 name="hello">Q&A</ContentH2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia blanditiis fugit recusandae officiis maiores quidem similique amet alias quam excepturi dolore, veniam soluta maxime perspiciatis, labore cum adipisci porro.</p>
      <ContentHello />
      <p>==========================</p>
    </ContentDiv>
  )
}

function ContentHello() {
  return <ContentH2>hello world</ContentH2>
}

const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  color: ${(props) => (props.name === 'hello'? 'red' : 'black')};
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;



function Example4() {
  return (
    <div>
      <h1>Example4</h1>
      <ContentOne>hello world</ContentOne>
      <ContentTwo>hello world</ContentTwo>
      <ContentThree>hello world</ContentThree>
      <p>==========================</p>
    </div>
  );
  
}
const ContentOne = styled.div`
  margin: 40px;
`;

const ContentTwo = styled.div`
  color:red;
`;

const ContentThree = styled(ContentTwo)`
  border: 1px solid black;
`
