import React, {useState, useMemo} from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function UseMemo() {
  return (
    <main style={{margin: "0 300px"}}>
      <Example1/>
    </main>
  )
}

/**
 *const 저장할변수 = useMemo(()=> {
    return 계산하는_무거운함수()
  }, [감시하고_있는_변수]);
 */

  function 부하() {
    console.log("값 새로 만드는중");
    let s = 0;
    for (let i = 0; i < 1000; i++) {
      s += i;
    }
    console.log("값 새로 만들기 끝");
    return s;
  }
  
  export function Memo() {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
  
    const handleCountUp = (e) => {
      setCount(count + 1);
      console.log(count);
    };
    const handleCountUpTwo = (e) => {
      setCountTwo(countTwo + 1);
      console.log(countTwo);
    };
  
    console.log("랜더링!!");
    // 평소에는 memo되어있는걸 가져다쓰고
    // countTwo가 바뀌었을때 부하 함수를 실행키는 메모
    // countTwo가 바뀌었을때 부하 함수를 실행하고 그 값을 result에 넣고
    // countTwo가 바뀌지 않을 땐 실행하지 않고 이전에 계산한 값을 가져온다.
    const result = useMemo(부하, [countTwo]);
  
    return (
      <div className="Memo">
        <h1>계산 결과 : {result}</h1>
        <div>{count}</div>
        <button onClick={handleCountUp}>up!</button>
        <div>{countTwo}</div>
        <button onClick={handleCountUpTwo}>up!</button>
      </div>
    );
  }



  function Example1() {
    const codeString = `
      const 저장할변수 = useMemo(()=> {
        return 계산하는_무거운함수()
      }, [감시하고_있는_변수]);

      function 부하() {
        console.log("값 새로 만드는중");
        let s = 0;
        for (let i = 0; i < 1000; i++) {
          s += i;
        }
        console.log("값 새로 만들기 끝");
        return s;
      }
      
      export function Memo() {
        const [count, setCount] = useState(0);
        const [countTwo, setCountTwo] = useState(0);
      
        const handleCountUp = (e) => {
          setCount(count + 1);
          console.log(count);
        };
        const handleCountUpTwo = (e) => {
          setCountTwo(countTwo + 1);
          console.log(countTwo);
        };
      
        console.log("랜더링!!");
        // 평소에는 memo되어있는걸 가져다쓰고
        // countTwo가 바뀌었을때 부하 함수를 실행키는 메모
        const result = useMemo(부하, [countTwo]);
      
        return (
          <div className="Memo">
            <h1>계산 결과 : {result}</h1>
            <div>{count}</div>
            <button onClick={handleCountUp}>up!</button>
            <div>{countTwo}</div>
            <button onClick={handleCountUpTwo}>up!</button>
          </div>
        );
      }
    `
    
    return (
      <Wrap>
        <Title>UseMemo</Title>
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
            <Memo />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }
  