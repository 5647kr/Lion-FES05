import React, { createContext } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle';


export default function ContextAPI1() {
  return (
    <main style={{margin: "0 300px"}}>
      <Example1 />
      <Example2 />
  </main>
  )
}

  function UseContextApi1() {
    return (
      <>
        <HelloLicat1 value={{ name: "gary", id: "garyIsFree" }} />
      </>
    )
  }

  const HelloLicat1 = (props) => {
    console.log(props)
    return (
      <div>
        <h2>{props.value.id}</h2>
        <strong>{props.value.name}</strong>
        <HelloLicatTwo1 value={{name:props.value.name, id: props.value.id}}/>
      </div>
    );
  };
  
  const HelloLicatTwo1 = (props) => {
    return (
      <div>
        <h2>Two : {props.value.id}</h2>
        <strong>Two : {props.value.name}</strong>
      </div>
    );
  };


  function Example1() {
    const codeString = `
      function UseContextApi1() {
        return (
          <>
            <HelloLicat1 value={{ name: "gary", id: "garyIsFree" }} />
          </>
        )
      }

      const HelloLicat1 = (props) => {
        console.log(props)
        return (
          <div>
            <h2>{props.value.id}</h2>
            <strong>{props.value.name}</strong>
            <HelloLicatTwo1 value={{name:props.value.name, id: props.value.id}}/>
          </div>
        );
      };
      
      const HelloLicatTwo1 = (props) => {
        return (
          <div>
            <h2>Two : {props.value.id}</h2>
            <strong>Two : {props.value.name}</strong>
          </div>
        );
      };
    `
    
    return (
      <Wrap>
        <Title>ContextAPI1</Title>
          <p>
            최적화와 관련된 기능이다.
            프로젝트가 커질수록 부모가 n번째 자손에게 넘겨줘야할 데이터가 있다면 n-1번째 자손에게까지 props를 전달해야 한다. 이러한 경우 계속해서 불필요한 props를 사용해야하고 의미 없는 값들이 컴포넌트를 스쳐가게 된다. 
            이때 사용하는 것이 context이다. context는 props를 사용하지 않고 데이터를 전달하도록 도와준다.
          <br />
          정리하자면 context는 props에 대한 전역 데이터 저장소라 할 수 있다.
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
            <UseContextApi1 />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }

  const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

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

  function Example2() {
    const codeString = `
      const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

      const HelloLicat2 = () => {
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
        <Title>ContextAPI2</Title>
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
            <HelloLicat2 />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }