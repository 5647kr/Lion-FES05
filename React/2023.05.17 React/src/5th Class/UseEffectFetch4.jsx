import React, { useEffect, useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle';
import styled from 'styled-components';


export default function UseEffectFetch4() {
  return (
    <main style={{margin: "0 300px"}}>
      <Example1 />
      <Example2 />
  </main>
  )
}

  function UseEffectApiFetch() {
    const [nations, setNations] = useState([]);

    useEffect(() => {
      async function fetchApi() {
        try {
          const response = await fetch("http://localhost:3000/nations");
          if(response.ok) {
            const data = await response.json();
            setNations(data)
          }
        } catch(error) {
          console.log(error)
        }
      }

      fetchApi();
    }, [])

    console.log("내가 푼거", nations)

    return (
      <>
        <h1>hello world</h1>
      </>
    )
  }




  function UseEffectApiFetchT1() {
    const [nations, setNations] = useState([]);
    const [url, setUrl] = useState("http://localhost:3000/nations")

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if(!response.ok) {
            throw new Error("네트워크 문제 있음")
          }
          const json = await response.json();
          setNations(json)
        } catch(error) {
          console.error(error)
        }
      }
      fetchData();
    }, [url]);

    console.log(nations)
    return (
      <Item>
        <h2>나라 목록</h2>
        <ul>
          {nations.map((nation) => {
            return (
              <li key={nation.id}>
                <h3>나라 이름: {nation.title}</h3>
                <p>인구 수: {nation.population}</p>
              </li>
            )
          })}
        </ul>
        <div>
          <button onClick={() => {setUrl("http://localhost:3000/nations?loc=Europe")}}>유럽 목록</button>
          <button onClick={() => {setUrl("http://localhost:3000/nations")}}>전체 목록</button>
        </div>
      </Item>
    )
  }

  const Item = styled.div`
    margin: 60px auto;
    position: relative;
    ul {
      padding: 10px;
    }

    li {
      margin: 20px 0;
      padding: 10px;
      border: 1px solid black;
      box-sizing: border-box;
      border-radius: 10px;
      list-style: none;
      box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
    }
    div {
      position: absolute;
      top: 0;
      right: 0;
    }
  `



  function Example1() {
    const codeString = `
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
  const [url, setUrl] = useState("http://localhost:3000/nations")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error("네트워크 문제 있음")
        }
        const json = await response.json();
        setNations(json)
      } catch(error) {
        console.error(error)
      }
    }
    fetchData();
  }, [url]);

  console.log(nations)
  return (
    <Item>
      <h2>나라 목록</h2>
      <ul>
        {nations.map((nation) => {
          return (
            <li key={nation.id}>
              <h3>나라 이름: {nation.title}</h3>
              <p>인구 수: {nation.population}</p>
            </li>
          )
        })}
      </ul>
      <div>
        <button onClick={() => {setUrl("http://localhost:3000/nations?loc=Europe")}}>유럽 목록</button>
        <button onClick={() => {setUrl("http://localhost:3000/nations")}}>전체 목록</button>
      </div>
    </Item>
  )
}

const Item = styled.div\`
  margin: 60px auto;
  position: relative;
  ul {
    padding: 10px;
  }

  li {
    margin: 20px 0;
    padding: 10px;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 10px;
    list-style: none;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  }
  div {
    position: absolute;
    top: 0;
    right: 0;
  }
\`
    `
    
    return (
      <Wrap>
        <Title>UseEffect를 이용한 API 통신T</Title>
          <p>
            api주소를 바꾸면서 새로운 데이터를 불러오는 작업
            json 서버에 질문을 던질 수 있다 "?" 키워드를 던져서 사용한다.
            예시) ?population=200
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