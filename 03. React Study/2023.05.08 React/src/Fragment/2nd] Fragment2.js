import React, { Fragment } from 'react';
import "./MyComponent.css"

let list = [
  {no: 1, area: "대전", visited: false},
  {no: 2, area: "부산", visited: true},
  {no: 3, area: "목포", visited: false},
  {no: 4, area: "제주도", visited: false},
]
function ListItem1() {
  return (
    list.map((item) => {
    return (
    <React.Fragment>
      <h1>{item.area}</h1>
      <p>{item.visited}</p>
      {/* react가 boolean값을 표시하는 방법을 모르기에 문자열로 바꿔줘야 한다. */}
      <p>{item.visited ? "방문함" : "아직 안감"}</p>
    </React.Fragment>)
    })
  );
}

const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];
function ListItem2() {
  return (
    items.map((item) => {
    return (
    <React.Fragment>
      <dt>{item.name}</dt>
      <dd>{item.desc}</dd>
    </React.Fragment>)
    })
  );
}

function ListItem2T() {
  const itemList = items.map(({id, name, desc}) => {
    return (
      <React.Fragment key={id}>
        <dt>{name}</dt>
        <dd>{desc}</dd>
      </React.Fragment>
    )
  });
  return (
    <dl>
      {itemList}
    </dl>
  )
}


function App() {
  return (
    <div>
      <ListItem1 />
      <dl> 
        <ListItem2 />
      </dl>
      {/* dl 태그 방법1 */}
      <ListItem2T />
    </div>
  );
}
export default App;
