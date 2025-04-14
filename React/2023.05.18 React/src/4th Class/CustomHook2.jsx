import React, { useState, useEffect } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function CustomHook2() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
    </main>
  )
}

  function CustomHookPractice1() {
    const loc = useMouseLoc();
    
    return (
      <>
        <HookBox1 />
        {`X축 위치: ${loc.x}, Y축 위치: ${loc.y}`}
      </>
    )
  }
  
  function HookBox1() {
    const loc = useMouseLoc()

    console.log(loc)
    return (
      <div style={{height: 100, width: 100, backgroundColor: loc.y > 200 ? 'royalblue' : 'hotpink'}}></div>
    )
  }

  function useMouseLoc(init) {
    const [mouseLoc, setMouseLoc] = useState(init || {x: 0, y: 0});

    useEffect(() => {
      window.addEventListener("mousemove", (event) => {
        setMouseLoc({x: event.x, y: event.y})
      })
    }, [])

    return mouseLoc;
  }


  function Example1() {
    const codeString = `
      function CustomHookPractice1() {
        const loc = useMouseLoc();
        
        return (
          <>
            <HookBox1 />
            {\`X축 위치: \${loc.x}, Y축 위치: \${loc.y}\`}
          </>
        )
      }
      
      function HookBox1() {
        const loc = useMouseLoc()

        console.log(loc)
        return (
          <div style={{height: 100, width: 100, backgroundColor: loc.y > 200 ? 'royalblue' : 'hotpink'}}></div>
        )
      }

      function useMouseLoc(init) {
        const [mouseLoc, setMouseLoc] = useState(init || {x: 0, y: 0});

        useEffect(() => {
          window.addEventListener("mousemove", (event) => {
            setMouseLoc({x: event.x, y: event.y})
          })
        }, [])

        return mouseLoc;
      }
    `
    
    return (
      <Wrap>
        <Title>CustomHook</Title>
          <p>
            CustomHook 만들어보기
            마우스의 위치를 잡는 Hook
            커스텀훅은 소문자로 작성한다.
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
            <CustomHookPractice1 />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }
