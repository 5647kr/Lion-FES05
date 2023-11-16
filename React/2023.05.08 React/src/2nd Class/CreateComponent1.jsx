import React from 'react'

export default function CreateComponent1() {
  return (
    <div>
      <h1>CreateComponent</h1>
      <Refactor />
      <User name="개리" />
      <Time />
      {/* 컴포넌트 이름은 대문자로 */}
    </div>
  )
}

export function Refactor() {
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

export function User(props) {
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

export function Time() {
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