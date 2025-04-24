import React from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'



export default function CreateComponent1() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
      <Example2/>
    </main>
  )
}

function ComponentPractice1() {
  const name = '라이캣!';
  const someStyle = {backgroundColor:"black", color:"white"};
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div>
      <div>
        <h1 style={someStyle}>안녕, {name} 1호</h1>
        <h1>안녕, 라이캣 2호!</h1>
        <div className="newClass"/>
      </div>
      <div style={{backgroundColor:"black", color:"white"}}>
        <h1 style={{color:'red'}}>년 : {year}</h1>
        <h1>월/일 : {month}/{date}</h1>
        <h1>시간 : {hour}시 {min}분 {sec}초</h1>
      </div>
    </div>
  );
}


function Example1() {
  const codeString = `
function ComponentPractice1() {
  const name = '라이캣!';
  const someStyle = {backgroundColor:"black", color:"white"};
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div>
      <div>
        <h1 style={someStyle}>안녕, {name} 1호</h1>
        <h1>안녕, 라이캣 2호!</h1>
        <div className="newClass"/>
      </div>
      <div style={{backgroundColor:"black", color:"white"}}>
        <h1 style={{color:'red'}}>년 : {year}</h1>
        <h1>월/일 : {month}/{date}</h1>
        <h1>시간 : {hour}시 {min}분 {sec}초</h1>
      </div>
    </div>
  );
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
    <div>
      <User name="개리" />
      <Time />
    </div>
  )
}

function User(props) {
  const name2 = '라이캣!';
  const someStyle2 = {backgroundColor:"black", color:"white"};
  
  return (
    <div>
      <h1 style={someStyle2}>안녕, {name2} 1호</h1>
      <h1>안녕, {props.name} 2호!</h1>
      <div className="newClass"/>
    </div>
  )
}

function Time() {
  const today1 = new Date();
  const year1 = today1.getFullYear();
  const month1 = today1.getMonth()+1;
  const date1 = today1.getDate();
  const hour1 = today1.getHours();
  const min1 = today1.getMinutes();
  const sec1 = today1.getSeconds();

  return (
    <div style={{backgroundColor:"black", color:"white"}}>
      <h1 style={{color:'red'}}>년 : {year1}</h1>
      <h1>월/일 : {month1}/{date1}</h1>
      <h1>시간 : {hour1}시 {min1}분 {sec1}초</h1>
  </div>
  )
}

function Example2() {
  const codeString = `
function ComponentPractice2() {
  return (
    <div>
      <User name="개리" />
      <Time />
    </div>
  )
}

function User(props) {
  const name2 = '라이캣!';
  const someStyle2 = {backgroundColor:"black", color:"white"};
  
  return (
    <div>
      <h1 style={someStyle2}>안녕, {name2} 1호</h1>
      <h1>안녕, {props.name} 2호!</h1>
      <div className="newClass"/>
    </div>
  )
}

function Time() {
  const today1 = new Date();
  const year1 = today1.getFullYear();
  const month1 = today1.getMonth()+1;
  const date1 = today1.getDate();
  const hour1 = today1.getHours();
  const min1 = today1.getMinutes();
  const sec1 = today1.getSeconds();

  return (
    <div style={{backgroundColor:"black", color:"white"}}>
      <h1 style={{color:'red'}}>년 : {year1}</h1>
      <h1>월/일 : {month1}/{date1}</h1>
      <h1>시간 : {hour1}시 {min1}분 {sec1}초</h1>
  </div>
  )
}
  `
  
  return (
    <Wrap>
      <Title>Component 나눠보기</Title>
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