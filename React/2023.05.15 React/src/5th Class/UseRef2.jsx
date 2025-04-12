import React, { useRef, useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function UseRef2() {
  return (
    <main style={{margin: "0 300px"}}>
      <Example1/>
    </main>
  )
}

//* 1번째 경우 
// 컴포넌트가 다시 렌더링 되어도 초기화 되지 않아야 하는 값을 저장해야할 때 사용합니다. 

export function Counter() {
  let num1 = useRef(0);
  // Ref(reference): 참조 -> 리액트가 대신 기억한 뒤에 나중에 가져다 쓰는 방식
  const [num2, setNum2] = useState(0);
  return (
    <>
      <button onClick={() => {
        num1.current += 1; 
        console.log(num1.current)
        }}>UseRef num1 plus 버튼
      </button>
      <p>UseRef num1: {num1.current}</p>

      <button onClick={() => setNum2(num2 + 1)}>UseState num2 plus 버튼</button>
      <p>UseState num2: {num2}</p>
    </>
  )
}

//* 2번째 경우
// 컴포넌트의 특정 요소에 직접 접근하고 싶을 때 useRef를 사용한다, 리렌더링하지 않고 Dom을 제어하고 싶을 떄 ref를 사용한다.



function Example1() {
  const codeString = `
    export function Counter() {
      let num1 = useRef(0);
      // Ref(reference): 참조 -> 리액트가 대신 기억한 뒤에 나중에 가져다 쓰는 방식
      const [num2, setNum2] = useState(0);
      return (
        <>
          <button onClick={() => {
            num1.current += 1; 
            console.log(num1.current)
            }}>UseRef num1 plus 버튼
          </button>
          <p>UseRef num1: {num1.current}</p>

          <button onClick={() => setNum2(num2 + 1)}>UseState num2 plus 버튼</button>
          <p>UseState num2: {num2}</p>
        </>
      )
    }
  `
  
  return (
    <Wrap>
      <Title>UseRef</Title>
        <p>
          state가 변할 때마다 다른 효과를 주고 싶을때 useEffect를 사용한다.
        </p>
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
          <Counter />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}
