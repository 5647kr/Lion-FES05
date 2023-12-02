import React, { useState } from 'react'

export default function UseRef1() {
  return (
    <div>
      <h1>UseRef1</h1>
      <Counter />
    </div>
  )
}

export function Counter() {
  let num1 = 0;
  const [num2, setNum2] = useState(0);
  return (
    <>
      {/* 눌러도 변하지 않는 이유는? => 함수이기 때문에 재랜더링 되면서 콘솔에 아무리 찍어도 다시 0으로 초기화 된다. -> 콘솔에 찍은 수를 기억하고 싶을때 useRef를 사용한다*/}
      <button onClick={() => {
        num1 += 1; 
        console.log(num1)
        }}>num1 plus 버튼</button>
      <p>num1: {num1}</p>

      <button onClick={() => setNum2(num2 + 1)}>num2 plus 버튼</button>
      <p>num2: {num2}</p>
    </>
  )
}

