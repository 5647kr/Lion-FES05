import React, { useContext, createContext } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle';


export default function UseContext() {
  return (
    <main style={{margin: "0 300px"}}>
      <Example1 />
  </main>
  )
}

  const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

  const HelloLicat = () => {
    const { name, id } = useContext(UserInfo);
    return (
      <div>
        <h2>{name}</h2>
        <strong>{id}</strong>
      </div>
    );
  };


  function Example1() {
    const codeString = `
    `
    
    return (
      <Wrap>
        <Title>Hook-UseContext</Title>
          <p>
            주로 회원정보, api 주소등 공통적인 요소에 context를 사용한다.
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
            <HelloLicat />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }