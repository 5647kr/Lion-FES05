import React from 'react'
import './JSX2.css';

export default function JSX2() {
  // 주석입니다
  return (
    <div className="App">
      {/* 주석입니다 */}
      <h1 hello={10}>JSX</h1>
      {/* 문자를 제외한 속성값은 중괄호를 사용한다. */}
      <h2>안녕하세요!</h2>
      {/* <input type="text" checked/>
      <input type="text" checked = {false} /> */}
      {/* 속성명만 쓰면 true로 인식한다. */}
      
      <h3 style={{ color: 'red' }}>스타일 속성 적용</h3>

      <ul className='newClass1'>
        <li>짜장면</li>
        <li>짬뽕</li>
      </ul>

      <ul className='newClass2'>
        <li>탕수육</li>
        <li>볶음밥</li>
      </ul>
    </div>
  )
}
