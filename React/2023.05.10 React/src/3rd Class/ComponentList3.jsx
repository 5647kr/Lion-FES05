import React, { useState } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function ComponentList3() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
      <Example2/>
    </main>
  )
}







function ComponentListPractice1() {
  const [userdata, setUserData] = useState(
    [
      { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
      { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
    ]
  )

  function handleRemoveList(id) {
    setUserData(
      userdata.filter((item) => {
        return id !== item.id
      })
    )

    setUserData(
      userdata.filter((item) => {
        return id !== item.id
      })
    )

    setUserData(
      userdata.filter((item) => {
        return id !== item.id
      })
    )
  }

  return (
    <ul>
      {userdata.map((item) => {
        return (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
          <button onClick={() => {handleRemoveList(item.id)}}>삭제</button>
        </li>
        )
      })}
    </ul>
  )
}


function Example1() {
  const codeString = `
function ComponentListPractice1() {
  const [userdata, setUserData] = useState(
    [
      { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
      { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
    ]
  )

  function handleRemoveList(id) {
    setUserData(
      userdata.filter((item) => {
        return id !== item.id
      })
    )

    setUserData(
      userdata.filter((item) => {
        return id !== item.id
      })
    )

    setUserData(
      userdata.filter((item) => {
        return id !== item.id
      })
    )
  }

  return (
    <ul>
      {userdata.map((item) => {
        return (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
          <button onClick={() => {handleRemoveList(item.id)}}>삭제</button>
        </li>
        )
      })}
    </ul>
  )
}
  `
  
  return (
    <Wrap>
      <Title>ComponentList</Title>
      <p>React는 state 함수의 호출의 일관성을 유지하기 위해서 내부적으로 동일한 내용의 state함수 호출이 여러번 반복되면 하나의 업데이트로 취급하여 처리한다.</p>
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
          <ComponentListPractice1 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}






function ComponentListPractice2() {
  const [userdata, setUserData] = useState(
    [
      { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
      { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
    ]
  )

  function handleRemoveList(id) {
    setUserData((prevData) => {
      return prevData.filter((item) => {
        return id !== item.id
      })
    })
  }

  return (
    <ul>
      {userdata.map((item) => {
        return (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
          <button onClick={() => {handleRemoveList(item.id)}}>삭제</button>
        </li>
        )
      })}
    </ul>
  )
}


function Example2() {
  const codeString = `
function ComponentListPractice2() {
  const [userdata, setUserData] = useState(
    [
      { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
      { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
    ]
  )

  function handleRemoveList(id) {
    setUserData((prevData) => {
      return prevData.filter((item) => {
        return id !== item.id
      })
    })
  }

  return (
    <ul>
      {userdata.map((item) => {
        return (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
          <button onClick={() => {handleRemoveList(item.id)}}>삭제</button>
        </li>
        )
      })}
    </ul>
  )
}
  `
  
  return (
    <Wrap>
      <Title>ComponentList</Title>
      <p>함수형 업데이트라고 표현한다. 함수형 업데이트를 사용하면 함수의 인자로 전달되는 state 값을 react가 이전 state의 값으로 보정한다. 따라서 상태 업데이트가 비동기적으로 처리된다고 해도 안정적으로 이전 값과 이후 값을 비교하여 처리할 수 있다.</p>
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
          <ComponentListPractice2 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}
























































































export function ItemList1() {
  const [userdata, setUserData] = useState(
    [
      { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
      { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
    ]
  )

  // function handledelectList(event) {
  //   (event.target.closest("li").remove())
  // }


  //* React는 state 함수의 호출의 일관성을 유지하기 위해서 내부적으로 동일한 내용의 state함수 호출이 여러번 반복되면 하나의 업데이트로 취급하여 처리한다.
  function handleRemoveList(id) {
    // setUserData(
    //   // 배열에 조건을 두고 만족한 원소만 새로운 배열로 반환하는것
    //   //filter(콜백함수 필요함)
    //   userdata.filter((item) => {
    //     return id !== item.id
    //   })
    // )

    //* 함수형 업데이트라고 표현한다. 함수형 업데이트를 사용하면 함수의 인자로 전달되는 state 값을 react가 이전 state의 값으로 보정한다. 따라서 상태 업데이트가 비동기적으로 처리된다고 해도 안정적으로 이전 값과 이후 값을 비교하여 처리할 수 있다.

    // setUserData(
    //   userdata.filter((item) => {
    //     return id !== item.id
    //   })
    // )
    
    setUserData((prevData) => {
      return prevData.filter((item) => {
        return id !== item.id
      })
    })
  }

  return (
    <ul>
      {userdata.map((item) => {
        return (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
          {/* <button onClick={handledelectList}>삭제</button> */}
          <button onClick={() => {handleRemoveList(item.id)}}>삭제</button>
        </li>
        )
      })}
    </ul>
  )
}

    //* 함수형 업데이트라고 표현한다. 함수형 업데이트를 사용하면 함수의 인자로 전달되는 state 값을 react가 이전 state의 값으로 보정한다. 따라서 상태 업데이트가 비동기적으로 처리된다고 해도 안정적으로 이전 값과 이후 값을 비교하여 처리할 수 있다.