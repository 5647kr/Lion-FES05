import React from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function Rendering() {
  return (
    <main style={{margin: "0 100px"}}>
    <Example1/>
    <Example2/>
  </main>
  )
}



function RenderingPractice1() {
  return (
    <>
      <Hello1 name="재현" />
    </>
  )
}

function Hello1({name}){
  if (name) {
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
  return <NoName/>
}

function NoName(){
  return(
    <div>
      <h1>이름을 입력하지 않았습니다.</h1>
    </div>
  )
}

function Example1() {
  const codeString = `
function RenderingPractice1() {
  return (
    <>
      <Hello1 name="재현" />
    </>
  )
}

function Hello1({name}){
  if (name) {
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
  return <NoName/>
}

function NoName(){
  return(
    <div>
      <h1>이름을 입력하지 않았습니다.</h1>
    </div>
  )
}
  `
  
  return (
    <Wrap>
      <Title>Counter</Title>
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
          <RenderingPractice1 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}




function RenderingPractice2() {
  return (
    <>
      <Hello2 name="개리" />
    </>
  )
}

function Hello2(props) {
	const name = props.name;
  if(name){
    return <One name={name}/>
  } else {
    return <Two/>
  }
}

function One(props){
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

function Two(){
  return (
    <div>
      <h1>name이 입력된 것이 없습니다.</h1>
    </div>
  )
}





function Example2() {
  const codeString = `
function RenderingPractice2() {
  return (
    <>
      <Hello2 name="개리" />
    </>
  )
}

function Hello2(props) {
	const name = props.name;
  if(name){
    return <One name={name}/>
  } else {
    return <Two/>
  }
}

function One(props){
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

function Two(){
  return (
    <div>
      <h1>name이 입력된 것이 없습니다.</h1>
    </div>
  )
}
  `
  
  return (
    <Wrap>
      <Title>Counter</Title>
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
          <RenderingPractice2 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}