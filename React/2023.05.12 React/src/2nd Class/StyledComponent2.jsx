import React from 'react'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export default function StyledComponent2() {
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
    <div>
      <h1>StyledComponent2</h1>

      <Example />
      <Test2 />
      <Test3 />
    </div>
  )
  }

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


export function Example() {
  return (
    <>
      <GlobalStyle/>
      <h1>hello world 1</h1>
      <span>hello world 2</span>
    </>
  )
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


const Test2 = () => {
	return (
		<ContentDiv>
      <ContentH2 name="hello">Q&A</ContentH2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
      <Hello />
    </ContentDiv>
	);
};

function Hello(){
  return <ContentH2>hello world</ContentH2>
}


function Test3() {
  return (
    <div>
      <ContentOne>hello world</ContentOne>
      <ContentTwo>hello world</ContentTwo>
      <ContentThree>hello world</ContentThree>
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