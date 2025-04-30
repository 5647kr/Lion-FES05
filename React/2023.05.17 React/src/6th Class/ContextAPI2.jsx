import React, { createContext } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle';


export default function ContextAPI2() {
  return (
    <main style={{margin: "0 300px"}}>
      <Example1 />
  </main>
  )
}

  const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

  const HelloLicat1 = () => {
    return (
      <UserInfo.Consumer>
        {(value) => (
          <div>
            {console.log(value)}
            <h2>{value.name}</h2>
            <strong>{value.id}</strong>
          </div>
        )}
      </UserInfo.Consumer>
    );
  };

  const HelloLicat2 = () => {
    return (
      <UserInfo.Consumer>
        {(value) => (
          <div>
            {console.log(value)}
            <h2>{value.name}</h2>
            <strong>{value.id}</strong>
          </div>
        )}
      </UserInfo.Consumer>
    );
  };

  function Example1() {
    const codeString = `
const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const HelloLicat1 = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
        </div>
      )}
    </UserInfo.Consumer>
  );
};
    `
    
    return (
      <Wrap>
        <Title>ContextAPI1</Title>
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
            <HelloLicat1 />
            <HelloLicat2 />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }