import React, { useState } from 'react'

export default function Counter() {
  return (
    <>
      <Counter1 />
      <Counter2T />
    </>
  )
}


function Counter1() {
  const [counter, setCounter] = useState(0);

  function plus() {
    setCounter (
      counter + 1
    )
  }

  function minus() {
    setCounter (
      counter - 1
    )
  }

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={() => plus()}>+1</button>
      <button onClick={() => minus()}>-1</button>
    </>
  )
}


function Counter2T() {
  const [count, setCount] = useState(0);

  function plusCount() {
    // setCount(count + 1);
    // setCount(count + 1);
    // 두코드 주석 풀어보면서 비교해보기
    

    // 이전 값을 유지하는 상태로 그 값을 더하거나 뺄때 사용한다.
    // setCount(count + 1);
    setCount((prevCount) => {
      return prevCount + 1
    })
  }

  function minusCount() {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>CounterT: <span>{count}</span></h1>

      <button onClick={plusCount}>+1</button>
      <button onClick={minusCount}>-1</button>
    </div>
  )
}