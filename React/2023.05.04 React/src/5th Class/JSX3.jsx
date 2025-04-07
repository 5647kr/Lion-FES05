import React from 'react'

export default function JSX3() {
  // 예제1
  const name = '라이캣!'

  // 예제2
  const 변수 = 'value';
  function 함수() {
    console.log('함수 출력!')
  }
  const 값 = true;

  return (
    <div>
      <h1>JSX3</h1>

      {/* 실습1 */}
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

      {/* 예제1 */}
      <h2>{name}</h2>

      {/* 예제2 */}
      {100 + 1}
      {'hello' + 'world'}
      {`${[1, 2, 3]}`}
      {[1, 2, 3].map(x => x**2)}
      {함수()}
      {변수}
      {값?'one':'two'}

      <Time />
    </div>
  )
}

function Time() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();

  const hour = newDate.getHours();
  const min = newDate.getMinutes();
  const sec = newDate.getSeconds();

  return (
    <div style={{backgroundColor: "black"}}>
      <h2 style={{color: "red"}}>년: {year}</h2>
      <h2 style={{color: "white"}}>월/일: {month}/{date}</h2>
      <h2 style={{color: "white"}}>시간: {hour}시 {min}분 {sec}초</h2>
    </div>
  )
}