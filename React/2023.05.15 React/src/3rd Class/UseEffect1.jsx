import React, {useState, useEffect} from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'


export default function UseEffect1() {
  return (
    <main style={{margin: "0 300px"}}>
      <Example1/>
    </main>
  )
}

export function Counter (){
  const [count, setCount] = useState(0)
  const handleCountUp = (e) => {
    setCount(count + 1)
  }

  // count가 변할때 Effect(효과)를 발동하겠다
  useEffect(() => {
    if(count%2){
      console.log("홀수입니다")
    }else{
      console.log("짝수입니다")
    }
  // 다시 렌더링을 하기 이전에 컴포넌트를 지우고 다시 그리겠죠?
	// 이 과정에서 지우기 전에 실행되는 부분입니다! clean-up이라고도 하죠.
  // useEffect안에 있는 콜백함수는 바뀔때 실행하는 함수인데, 바뀌기 직전에 뭔갈 하고 싶을 때 return문을 사용한다.
    return () => {console.log('카운트가 바뀜')};
  }, [count]) //dependency Array(의존성 배열)
  
  //* 컴포넌트가 업데이트 될 때마다 매번 실행
  // useEffect(()=>{
  //   console.log('hello world');
  // })
  //의존을 하지 않는다

//* 처음에만 실행
  // useEffect(()=>{
  //   console.log('hello world');
  // }, [])
  //의존해야하는데 할 대상이 없어서 처음에만 실행

//* 변수들의 변화가 일어날 때마다 실행
  // useEffect(()=>{
  //   console.log('hello world');
  // }, [변수1, 변수2...])

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}





function Example1() {
  const codeString = `
    export function Counter (){
      const [count, setCount] = useState(0)
      const handleCountUp = (e) => {
        setCount(count + 1)
      }

      // count가 변할때 Effect(효과)를 발동하겠다
      useEffect(() => {
        if(count%2){
          console.log("홀수입니다")
        }else{
          console.log("짝수입니다")
        }
      // 다시 렌더링을 하기 이전에 컴포넌트를 지우고 다시 그리겠죠?
    	// 이 과정에서 지우기 전에 실행되는 부분입니다! clean-up이라고도 하죠.
      // useEffect안에 있는 콜백함수는 바뀔때 실행하는 함수인데, 바뀌기 직전에 뭔가를 하고 싶을 때 return문을 사용한다.
      // count가 변하게 되면 react는 컴포넌트를 다시 그려야 한다. setCount가 발동을 하면 react는 화면을 다시 그려야 한다. 
      // 이때 다시 그리지 직전에 return문을 실행한다.

      // 상태가 변경된다 -> clean-up 실행 -> useEffect 실행

        return () => {console.log('카운트가 바뀜')};
      }, [count]) //dependency Array(의존성 배열)

      //* 컴포넌트가 업데이트 될 때마다 매번 실행
      // useEffect(()=>{
      //   console.log('hello world');
      // })
      //의존을 하지 않는다

    //* 처음에만 실행
      // useEffect(()=>{
      //   console.log('hello world');
      // }, [])
      //의존해야하는데 할 대상이 없어서 처음에만 실행

    //* 변수들의 변화가 일어날 때마다 실행
      // useEffect(()=>{
      //   console.log('hello world');
      // }, [변수1, 변수2...])

      return (
        <>
          <div>{count}</div>
          <button onClick={handleCountUp}>Up!</button>
        </>
      )
    }
  `
  
  return (
    <Wrap>
      <Title>UseEffect</Title>
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