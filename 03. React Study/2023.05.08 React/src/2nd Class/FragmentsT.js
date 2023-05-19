import React, { Fragment } from 'react';

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function Component1() {
  return (
    list.map((item) => {
      return (
      <div>
        <h1>{item.area}</h1>
        <p>{item.visited ? "방문함" : "방문안함"}</p>
      </div>)
    })
  );
}

const list2 = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function Component2() {
  const itemList = list2.map(({id, name, desc}) => {
    return (
      <React.Fragment key = {id}>
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

function App() {
  return (
    <div>
      <Component1 />
      <Component2 />
    </div>
  );
}
export default App;
