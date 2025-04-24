import React from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'



export default function CreateComponent2() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
      <Example2/>
      <Example3/>
    </main>
  )
}





function ComponentPractice1() {
  return (
    <>
      <HelloProps 
      name="jaehyun" 
      age={25} 
      someFunc={() => 'awesome!!!'} 
      someJSX={<img src="https://picsum.photos/id/237/200/300" />} 
      someArr={[1, 2, 3]} 
      someObj={{ one: 1 }} />
    </>
  )
}

function HelloProps(props) {
  return (
    <div>
      <p>my name is {props.name} and age is {props.age}</p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  )
}

function Example1() {
  const codeString = `
function ComponentPractice1() {
  return (
    <>
      <HelloProps 
      name="jaehyun" 
      age={25} 
      someFunc={() => 'awesome!!!'} 
      someJSX={<img src="https://picsum.photos/id/237/200/300" />} 
      someArr={[1, 2, 3]} 
      someObj={{ one: 1 }} />
    </>
  )
}

function HelloProps(props) {
  return (
    <div>
      <p>my name is {props.name} and age is {props.age}</p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  )
}
  `
  
  return (
    <Wrap>
      <Title>Component 만들기</Title>
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
          <ComponentPractice1 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}








function ComponentPractice2() {
  return (
    <>
      <Resume 
      hello="안녕하세요" 
      name="개리" 
      hobby="게임" 
      food="고기" 
      color="blue"/>
    </>
  )
}

function Resume(props) {
  return (
    <>
      <h1>{props.name} 자기소개서</h1>
      <h2>{props.hello}</h2>
      <p>취미: {props.hobby}</p>
      <p>좋아하는 음식: {props.food}</p>
      <p>좋아하는 색: <span style={{color: "blue"}}>{props.color}</span></p>
    </>
  )
}


function Example2() {
  const codeString = `
function ComponentPractice2() {
  return (
    <>
      <Resume 
      hello="안녕하세요" 
      name="개리" 
      hobby="게임" 
      food="고기" 
      color="blue"/>
    </>
  )
}

function Resume(props) {
  return (
    <>
      <h1>{props.name} 자기소개서</h1>
      <h2>{props.hello}</h2>
      <p>취미: {props.hobby}</p>
      <p>좋아하는 음식: {props.food}</p>
      <p>좋아하는 색: <span style={{color: "blue"}}>{props.color}</span></p>
    </>
  )
}
  `
  
  return (
    <Wrap>
      <Title>Component 만들기</Title>
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
          <ComponentPractice2 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}










function ComponentPractice3() {
  return (
    <>
      <ColorText color="red"/>
      <ColorText color="green"/>
      <ColorText color="blue"/>
    </>
  )
}

function ColorText(props) {
  return(
    <>
      <h1 style={{color:props.color}}>색이 바뀌어요!</h1>
    </>
  )
}

function Example3() {
  const codeString = `
function ComponentPractice3() {
  return (
    <>
      <ColorText color="red"/>
      <ColorText color="green"/>
      <ColorText color="blue"/>
    </>
  )
}

function ColorText(props) {
  return(
    <>
      <h1 style={{color:props.color}}>색이 바뀌어요!</h1>
    </>
  )
}
  `
  
  return (
    <Wrap>
      <Title>Component 만들기</Title>
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
          <ComponentPractice3 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}