import React, { Fragment } from 'react'

export default function Fragments2() {
  return (
    <div>
      <h1>Fragments2</h1>
      <List />
      <dl>
        <List2 />
      </dl>
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

const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

export function List2() {
  return(
    items.map((item) => {
      return(
        <Fragment key={item.id}>
          <dt>{item.name}</dt>
          <dd>{item.desc}</dd>
        </Fragment>
      )
    })
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