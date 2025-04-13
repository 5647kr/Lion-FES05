import React, { useEffect, useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function UseEffectFetch2() {
  return (
    <main style={{margin: "0 300px"}}>
      <Example1 />
      <Example2 />
  </main>
  )
}

  function UseEffectApiFetch() {
    async function fetchApi() {
      try {
        const response = await fetch("http://localhost:3000/nations");
        if(response.ok) {
          const data1 = await response.json();
          return data1;
        }
      } catch(error) {
        console.log(error)
      }
    }

    fetchApi();

    return (
      <>
        <h1>hello world</h1>
      </>
    )
  }




  function UseEffectApiFetchT1() {
    const [nations, setNations] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/nations")
      .then(response => {
        // http 상태코드가 200번대가 아닐 경우
        if(!response.ok) {
          throw new Error("네이워크 응답에 문제 있음.")
        }

        return response.json()
      })
      .then(json => setNations(json))
      .catch((error) => {
        console.error(error)
      });// 네트워크 통신에 오류가 생겼을 때
    }, [])
    console.log(nations)
    // fetch함수의 결과물로 반환되는 것은 promise이다. 
    // promise 객체를 처리하고자 할때 사용하는 키워드는 then이다.
    // 첫번째 then의 안에 가지고 있는것은 response객체를 가지고 있다.

    // const [nations, setNations] = useState([]);
    // fetch("http://localhost:3000/nations")
    // .then(response => response.json())
    // .then(json => setNations(json));
    // console.log(nations)
    // 이상태로 실행하면 api요청이 무제한으로 실행한다. 그 이유는 useState때문인데 setState함수로 상태가 바뀌면 다시 렌더링이 되기 때문이다.
    return (
      <>
        <h1>hello world</h1>
      </>
    )
  }



  function Example1() {
    const codeString = `
      function UseEffectApiFetch() {
        async function fetchApi() {
          try {
            const response = await fetch("http://localhost:3000/nations");
            if(response.ok) {
              const data1 = await response.json();
              return data1;
            }
          } catch(error) {
            console.log(error)
          }
        }

        fetchApi();

        return (
          <>
            <h1>hello world</h1>
          </>
        )
      }
    `
    
    return (
      <Wrap>
        <Title>UseEffect를 이용한 API 통신</Title>
          <p>
          json 서버와 통신을 해야한다. 그러한 이유로 터미널을 열어서 다음 명령어를 실행한다.
          </p>
          <code>json-server --watch ./data/data.json</code>
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
            <UseEffectApiFetch />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }


  function Example2() {
    const codeString = `
      function UseEffectApiFetchT1() {
        const [nations, setNations] = useState([]);

        useEffect(() => {
          fetch("http://localhost:3000/nations")
          .then(response => {
            // http 상태코드가 200번대가 아닐 경우
            if(!response.ok) {
              throw new Error("네이워크 응답에 문제 있음.")
            }

            return response.json()
          })
          .then(json => setNations(json))
          .catch((error) => {
            console.error(error)
          });// 네트워크 통신에 오류가 생겼을 때
        }, [])
        console.log(nations)
        // fetch함수의 결과물로 반환되는 것은 promise이다. 
        // promise 객체를 처리하고자 할때 사용하는 키워드는 then이다.
        // 첫번째 then의 안에 가지고 있는것은 response객체를 가지고 있다.

        // const [nations, setNations] = useState([]);
        // fetch("http://localhost:3000/nations")
        // .then(response => response.json())
        // .then(json => setNations(json));
        // console.log(nations)
        // 이상태로 실행하면 api요청이 무제한으로 실행한다. 그 이유는 useState때문인데 setState함수로 상태가 바뀌면 다시 렌더링이 되기 때문이다.

        // 
        return (
          <>
            <h1>hello world</h1>
          </>
        )
      }
    `
    
    return (
      <Wrap>
        <Title>UseEffect를 이용한 API 통신T</Title>
          <p>
          fetch를 통해 데이터를 받아오게 된다. 그럼 데이터를 setNations함수를 실행해 nations에 데이터를 넣으면서 nations를 갱신하고 있다. nations가 갱신이 되면서 컴포넌트가 다시 렌더링 되게 된다. 다시 렌더링이 되게 되면 다시 fetch요청을 처리하게 된다. 그럼 다시 setNations함수를 실행해 nations가 바뀌게 된다. 바뀌는 이유는 컴포넌트가 다시 렌더링 되게 되면 useState안에 가지고 있는 상태값도 초기화가 된다. 그래서 상태가 바뀌면서 무한 반복이 된다. 이를 useEffect로 수정할 수 있다.
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
            <UseEffectApiFetchT1 />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }