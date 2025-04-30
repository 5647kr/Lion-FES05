import React, { useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function UseMemo1() {
  return (
    <main style={{margin: "0 300px"}}>
      <Example1/>
    </main>
  )
}

  function UseMemoPractice1() {
    const [userInfo, setUserInfo] = useState([]);
    const [name, setName] = useState('');
    const [id, setId] = useState('');


    function handleSubmit(e) {
      e.preventDefault();
      const newInfo = [...userInfo, { name, id }];
      setUserInfo(newInfo);
      console.log('렌더링 - 3');
    }
    const handleInput1 = (event) => {
      console.log('렌더링 - 1');
      setName(event.target.value);
    }

    const handleInput2 = (event) => {
      console.log('렌더링 - 2');
      setId(event.target.value);
    }

    // 모든 렌더링에 함께 렌더링되는 이슈가 있습니다.
    // set함수들이 변경되면서 컴포넌트를 리렌더링되면서 불필요한 함수가 계속 실행되게 된다.
    // 즉, 등록되었을때 한번 작동하면 되지만 input에 입력을 넣기만 해도 아래 함수가 계속 렌더링 된다.
    function getNum(li) {
      console.log('렌더링!');
      return li.length;
    }

    
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='이름을 입력하세요'
            onChange={handleInput1}
            value={name}
          />
          <input
            type='text'
            placeholder='아이디를 입력하세요'
            onChange={handleInput2}
            value={id}
          />
          <button type='submit'>회원 명부 작성</button>
        </form>
        <ul>
          {
            userInfo.map((value, index) => (
              <li key={index}>
                <h3>이름 : {value.name}</h3>
                <strong>아이디 : {value.id}</strong>
              </li>
            ))
          }
        </ul>
        <span>현재 회원 수 : {getNum(userInfo)}</span>
      </>
    )
  }


function Example1() {
  const codeString = `
function UseMemoPractice1() {
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newInfo = [...userInfo, { name, id }];
    setUserInfo(newInfo);
    console.log('렌더링 - 3');
  }
  const handleInput1 = (event) => {
    console.log('렌더링 - 1');
    setName(event.target.value);
  }

  const handleInput2 = (event) => {
    console.log('렌더링 - 2');
    setId(event.target.value);
  }

  // 모든 렌더링에 함께 렌더링되는 이슈가 있습니다.
  function getNum(li) {
    console.log('렌더링!');
    return li.length;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='이름을 입력하세요'
          onChange={handleInput1}
          value={name}
        />
        <input
          type='text'
          placeholder='아이디를 입력하세요'
          onChange={handleInput2}
          value={id}
        />
        <button type='submit'>회원 명부 작성</button>
      </form>
      <ul>
        {
          userInfo.map((value, index) => (
            <li key={index}>
              <h3>이름 : {value.name}</h3>
              <strong>아이디 : {value.id}</strong>
            </li>
          ))
        }
      </ul>
      <span>현재 회원 수 : {getNum(userInfo)}</span>
    </>
  )
}
`

  return (
    <Wrap>
      <Title>UseMemo</Title>
        <p>
          어떠한 부하가 생기는 함수를 반복해서 작업할 때 기억해 두었다가 사용하는 기법을 말한다. 렌더링이 될 때 이전에 작업해우었던 결과값을 가지고 있다가 반영해준다. 최적화를 할 때 사용하는 hook중 하나이다.
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
          <UseMemoPractice1 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}