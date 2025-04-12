import React, { useState, useEffect } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function UseEffect3() {
  return (
    <main style={{margin: "0 300px"}}>
      <Example1/>
    </main>
  )
}

function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  console.log("렌더링이 됩니다..?");

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      setToday(today);
      setHour(today.getHours())
      setMin(today.getMinutes())
      setSec(today.getSeconds())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [today])

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}


function Example1() {
  const codeString = `
    function Time(props) {
      const [today, setToday] = useState(new Date());
      const [hour, setHour] = useState(today.getHours());
      const [min, setMin] = useState(today.getMinutes());
      const [sec, setSec] = useState(today.getSeconds());
      console.log("렌더링이 됩니다..?");

      useEffect(() => {
        const interval = setInterval(() => {
          const today = new Date();
          setToday(today);
          setHour(today.getHours())
          setMin(today.getMinutes())
          setSec(today.getSeconds())
        }, 1000)
        return () => {
          clearInterval(interval)
        }
      }, [today])

      return (
        <div>
          <h1>
            시간 : {hour}시 {min}분 {sec}초
          </h1>
        </div>
      );
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
          <Time />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}