import React, { useRef, useState, useMemo } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function MemoVsEffect1() {
  return (
    <main style={{margin: "0 300px"}}>
      <Example1/>
    </main>
  )
}

  function UseMemoPractice1() {
    // const inputName = useRef(null);
    // const inputId = useRef(null);
    const [userInfo, setUserInfo] = useState([]);
    const [name, setName] = useState('');
    const [id, setId] = useState('');


    function handleSubmit(e) {
      e.preventDefault();
      const newInfo = [...userInfo, { name, id }];

      // inputName.current.value = "";
      // inputId.current.value = "";
      setName("");
      setId("");
      
      // inputName.current.focus();
      e.target[0].focus();

      setUserInfo(newInfo);
      console.log('렌더링 - 3');
    }
    const handleInputName = (event) => {
      console.log('렌더링 - 1');
      setName(event.target.value);
    }

    const handleInputId = (event) => {
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
            onChange={handleInputName}
            value={name}
            // ref={inputName}
          />
          <input
            type='text'
            placeholder='아이디를 입력하세요'
            onChange={handleInputId}
            value={id}
            // ref={inputId}
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
        const inputName = useRef(null);
        const inputId = useRef(null)
        const [userInfo, setUserInfo] = useState([]);
        const [name, setName] = useState('');
        const [id, setId] = useState('');


        function handleSubmit(e) {
          e.preventDefault();
          const newInfo = [...userInfo, { name, id }];
          setUserInfo(newInfo);
          console.log('렌더링 - 3');
        }
        const handleInputName = (event) => {
          console.log('렌더링 - 1');
          setName(event.target.value);
        }

        const handleInputId = (event) => {
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
                onChange={handleInputName}
                value={name}
                ref={inputName}
              />
              <input
                type='text'
                placeholder='아이디를 입력하세요'
                onChange={handleInputId}
                value={id}
                ref={inputId}
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
        <Title>UseMemo Vs UseEffect</Title>
          <p>
            useMemo(실행될 것)라고 할 때 useMemo는 렌더링 전에 실행되어 메모이제이션한 것을 반환해준다. 값이 바뀌었는지 확인하고 렌더링 전에 저장된 것을 보내준다.
            <br />
            useEffect는 렌더링 후에 일어난다. 렌더링 후에 상태가 업데이트 되었을 때를 감지하여 동작한다.
            `useMemo`는 렌더링에 직접적인 영향을 미칠 수 있습니다. 위의 예시처럼, 콜백함수에서 컴포넌트 등을 반환하게 했을 때, 렌더링하기 이전에 저장된 값을 확인하여 변화가 없으면 리렌더링을 하지 않도록 할 수 있기 때문이죠.
            <br />
            반면 `useEffect`는 렌더링한 이후에 동작되기 때문에 리렌더링을 방지하지 못합니다. 
            <br />
            즉, `useMemo`는 리렌더링이나 불필요한 재실행 과정을 막는 방법(최적화)에 사용하기 적합하고, `useEffect`는 상태를 이용한 관리에 사용됩니다.
            <br />
            또한 useEffect 는 별도의 clean-up 함수를 가지고 있습니다만 useMemo 는 없습니다.
            <br />
            ### 4.4 요약
            <br />
            - 렌더링 전 : `useMemo` / 렌더링 후 : `useEffect`<br />
            - 상태 변화를 감지하여 경우에 따라 콜백함수를 호출하고 싶다면 `useEffect`<br />
            - 값을 저장하여 불필요한 동작 또는 렌더링을 막아 최적화하고 싶다면 `useMemo`
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