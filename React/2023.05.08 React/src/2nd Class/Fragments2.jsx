import React, { Fragment } from 'react'

export default function Fragments2() {
  return (
    <div>
      <h1>Fragments2</h1>
        <List />
        <List1 />
      <dl>
        <h2>내풀이</h2>
        <List2 />
        <List3 />
      </dl>
        <h2>선생님 풀이</h2>
        <List3T />
    </div>
  )
}

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

export function List() {
  return (
    list.map((item) => {
      return(
      <Fragment key={item.no}>
        <h1>{ item.area }</h1>
        <p>{ item.visited ? "방문함" : "방문 안함" }</p>
      </Fragment>)
    })
  );
}

function List1() {
  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];

  return (
    <ul className='list-area'>
      {list.map((item) => {
        return (
          <li key={item.no} className={item.visited ? "area-item active" : "area-item"}>{item.area}</li>
        )
      })}
    </ul>
  )
}

// 위 두 코드의 경우 list.map은 동일하나 아래코드는 중괄호로 감싸고 있으나 윗 코드는 중괄호로 감싸고 있지 않다. 

// 그 이유는 html태그 안에 js코드를 처리하기 위해 중괄호를 사용하고 그렇지 않은 경우엔 중괄호를 사용하지 않는다.

const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

export function List2() {
  return (
    items.map((item) => {
      return (
        <React.Fragment key={item.id}>
          <dt>{item.name}</dt>
          <dd>{item.desc}</dd>
        </React.Fragment>
      )
    })
  )
}

export function List3() {
  return (
    <dl>
      {items.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <dt>{item.name}</dt>
            <dd>{item.desc}</dd>
          </React.Fragment>
        )
      })}
    </dl>
  )
}

export function List3T() {
  const itemList = items.map(({id, name, desc})=> {
    return(
      <React.Fragment key={id}>
        <dt>{name}</dt>
        <dd>{desc}</dd>
      </React.Fragment>
    )
  })

  return (
    <dl>
      {itemList}
    </dl>
  )
}