import React, { useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function Counter() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
      <Example2/>
      <Example3/>
    </main>
  )
}






function CounterPractice1() {
  const [count, setCount] = useState(0);

  function plus() {
    setCount(
      count + 1
    )
  }

  function minus() {
    setCount(
      count - 1
    )
  }
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => plus()}>+1</button>
      <button onClick={() => minus()}>-1</button>
    </div>
  )
}


function Example1() {
  const codeString = `
function CounterPractice1() {
  const [count, setCount] = useState(0);

  function plus() {
    setCount(
      count + 1
    )
  }

  function minus() {
    setCount(
      count - 1
    )
  }
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => plus()}>+1</button>
      <button onClick={() => minus()}>-1</button>
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
          <CounterPractice1 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}


function CounterPractice2() {
  const [count, setCount] = useState(0);

  function plusCount() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
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


function Example2() {
  const codeString = `
function CounterPractice2() {
  const [count, setCount] = useState(0);

  function plusCount() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
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
  `
  
  return (
    <Wrap>
      <Title>CounterT</Title>
      <p>+1을 누르면 3씩 증가할거라 생각하지만 1씩만 증가한다.</p>
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
          <CounterPractice2 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}



function CounterPractice3() {
  const [count, setCount] = useState(0);

  function plusCount() {
    setCount(count + 1);
    setCount((prevCount) => prevCount + 1)
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


function Example3() {
  const codeString = `
function CounterPractice3() {
  const [count, setCount] = useState(0);

  function plusCount() {
    setCount(count + 1);
    setCount((prevCount) => prevCount + 1)
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
  `
  
  return (
    <Wrap>
      <Title>CounterT</Title>
      <p>이전 값을 유지하는 상태로 그 값을 더하거나 뺄때 사용한다.</p>
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
          <CounterPractice3 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}
