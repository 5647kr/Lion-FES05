import React, {useState, useEffect} from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function UseEffect2() {
  return (
    <main style={{margin: "0 300px"}}>
      <Example1/>
    </main>
  )
}

export function Counter (){
  const [count, setCount] = useState(0)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const handleCountUp = (e) => {
    setCount(count + 1)
  }

  useEffect(() => {
    if(isFirstRender) {
      setIsFirstRender(false)
      console.log('처음 실행')
      console.log(isFirstRender)
    } else {
      if(count % 2){
        alert("홀수입니다")
      }else{
        alert("짝수입니다")
      }
    }
  }, [count]) 
  // 의존성 배열에 isFirstRender를 넣게 되면 처음 페이지에 접속했을 때 알라트가 뜨기 때문에 원하는방향이 아니고 꼭 무조건 다 넣을 필요는 없다.

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
      const [isFirstRender, setIsFirstRender] = useState(true)
      const handleCountUp = (e) => {
        setCount(count + 1)
      }
    
      useEffect(() => {
        if(isFirstRender) {
          setIsFirstRender(false)
          console.log('처음 실행')
          console.log(isFirstRender)
        } else {
          if(count % 2){
            alert("홀수입니다")
          }else{
            alert("짝수입니다")
          }
        }
      }, [count]) 
      // 의존성 배열에 isFirstRender를 넣게 되면 처음 페이지에 접속했을 때 알라트가 뜨기 때문에 원하는방향이 아니고 꼭 무조건 다 넣을 필요는 없다.
    
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