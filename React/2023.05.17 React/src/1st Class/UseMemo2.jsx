import React, { useState, useMemo } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function UseMemo2() {
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
  function getNum(li) {
    console.log('렌더링!');
    return li.length;
  }

  const num = useMemo(() => {
    return getNum(userInfo)
  }, [userInfo])
  
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
      <span>현재 회원 수 : {num}</span>
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

  // 이 부분 추가
  const num = useMemo(() => {
    return getNum(userInfo)
  }, [userInfo])

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
      <span>현재 회원 수 : {num}</span>
    </>
  )
}
    `
    
    return (
      <Wrap>
        <Title>UseMemo</Title>
          <p>
            최적화할 함수와 함수가 의존하게 될 값을 useMemo에 전달하면 된다. useMemo는 렌더링 중에 실행되어서 의존하는 값이 변경되었는지를 확인하고, 의존성 값이 변경되었을 때만 값을 다시 계산한다.

            이 부분 추가에서 useMemo를 사용한 뒤로
            콘솔에 getNum에 렌더링콘솔이 찍히지 않는것을 확인할 수 있다.
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