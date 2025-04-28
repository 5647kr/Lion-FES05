import React from 'react'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function StyledComponent2() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
      <Example2/>
      <Example3/>
      <Example4/>
    </main>
  )
}




function StyledComponentPratice1() {
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
    </>
  )
}


function Example1() {
  const codeString = `
function StyledComponentPratice1() {
  const name = '이호준'
  const age = 10

  function 인사(문구, 이름, 나이){
    console.log(문구[0])
    console.log(문구[1])
    console.log(문구[2])
    console.log(문구, 이름, 나이)
    return \`\${문구[0]}\${이름}\${문구[1]}\${나이+나이}\${문구[2]}\`
  }

  const 인사문구 = 인사\`이름은 \${name}이고 나이는 \${age+age}입니다.\`

  console.log(인사문구)
  return (
    <>
      <h2>Example1</h2>
      <strong>{인사\`이름은 \${name}이고 나이는 \${age+age}입니다.\`}</strong>
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
          <StyledComponentPratice1 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
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


function StyledComponentPratice2() {
  return (
    <>
      <GlobalStyle/>
      <h1>Example2</h1>
      <h1>hello world 1</h1>
      <span>hello world 2</span>
    </>
  )
}


function Example2() {
  const codeString = `
const GlobalStyle = createGlobalStyle\`
\${reset}

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
\`


function StyledComponentPratice2() {
  return (
    <>
      <GlobalStyle/>
      <h1>Example2</h1>
      <h1>hello world 1</h1>
      <span>hello world 2</span>
    </>
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
          <StyledComponentPratice2 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}




function ContentHello() {
  return <ContentH2>hello world</ContentH2>
}

const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  color: ${(props) => (props.name === 'hello'? 'red' : 'blue')};
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

function StyledComponentPratice3() {
  return (
    <ContentDiv>
      <ContentH2 name="hello">Q&A</ContentH2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia blanditiis fugit recusandae officiis maiores quidem similique amet alias quam excepturi dolore, veniam soluta maxime perspiciatis, labore cum adipisci porro.</p>
      <ContentHello />
    </ContentDiv>
  )
}


function Example3() {
  const codeString = `
function ContentHello() {
  return <ContentH2>hello world</ContentH2>
}

const ContentDiv = styled.div\`
  margin: 40px;
\`;

const ContentH2 = styled.h2\`
  color: \${(props) => (props.name === 'hello'? 'red' : 'blue')};
  width: 200px;
  margin: 0 auto;
  text-align: center;
\`;
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
          <StyledComponentPratice3 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
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

function StyledComponentPratice4() {
  return (
    <div>
      <ContentOne>hello world</ContentOne>
      <ContentTwo>hello world</ContentTwo>
      <ContentThree>hello world</ContentThree>
    </div>
  );
}


function Example4() {
  const codeString = `
const ContentOne = styled.div\`
  margin: 40px;
\`;

const ContentTwo = styled.div\`
  color:red;
\`;

const ContentThree = styled(ContentTwo)\`
  border: 1px solid black;
\`

function StyledComponentPratice4() {
  return (
    <div>
      <ContentOne>hello world</ContentOne>
      <ContentTwo>hello world</ContentTwo>
      <ContentThree>hello world</ContentThree>
    </div>
  );
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
          <StyledComponentPratice4 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}
















































































































































