import React from 'react'

export default function JSX3() {
  const name = '라이캣!'

  const 변수 = 'value';
  function 함수() {
    console.log('함수 출력!')
  }
  const 값 = true;

  return (
    <div>
      <h1>JSX3</h1>

      {/* 틀린거 고쳐보기 */}

      {/* <textarea
        readonly
        maxlength=3
        style={"background-color: blue;"}
      /> */}

      <textarea
        readOnly
        maxLength= {3}
        style={{backgroundColor: 'blue'}} 
      />

      <h2>{name}</h2>


      {100 + 1}
      {'hello' + 'world'}
      {[1, 2, 3].map(x => x**2)}
      {함수()}
      {변수}
      {값?'one':'two'}

      <Time />
    </div>
  )
}

function Time() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours()
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return (
    <div style={{backgroundColor : "black", color: "white"}}>
      <h2 style={{color : "red"}}>년: {year}</h2>
      <h2>월/일: {month}/{day}</h2>
      <h2>시간: {hour}시 {min}분 {sec}초</h2>
    </div>
  )
}