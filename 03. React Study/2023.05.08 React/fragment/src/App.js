import React, { Fragment } from 'react';
import './FragmentTest.css';

function ListItem1({ item }) {
  return (
    <div>
      <dt>사과</dt>
      <dd>사과는 가을이 제철이죠!</dd>
    </div>
  );
}

function ListItem2({ item }) {
  return (
    <React.Fragment>
  {/* <React.Fragment></React.Fragment> -> <React></React> -> <></>으로 사용할 수 있다.*/}
      <dt>딸기</dt>
      <dd>딸기는 겨울이 제철이죠!</dd>
    </React.Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      <ListItem1 />
      <ListItem1 />
      <ListItem2 />
      <ListItem2 />
    </dl>
  );
}

function MyComponent() {
  return (
    <React.Fragment className="my-fragment">
      <h1 className="my-fragment">리엑트프레그먼트</h1>
      <p className="my-fragment">테스트입니다!</p>
    </React.Fragment>
  );
}

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function Component() {
  return (
    list.map((item) => {
      return (<>
        <h1>{item.area}</h1>
        <p>{item.visited ? "방문함" : "방문안함"}</p>
        </>)
    })
  )
}

const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function Fruits() {
  return (
    items.map((item) => {
      return (<>
      <dl>
        <dt>{item.name}</dt>
        <dd>{item.desc}</dd>
      </dl>
      </>)
    })
  )
}

function FruitsT() {
  const List = items.map(({id, name, desc}) => {
    return (<React.Fragment key = {id}>
    <dt>{name}</dt>
    <dd>{desc}</dd>
    </React.Fragment>)
  });

  return (
    <dl>
      {List}
    </dl>
  )
}

function App() {
  return (
    <div>
      <h1>안녕, 라이캣 1호!</h1>
			<h2>안녕, 라이캣 2호!</h2>
      <Glossary />
      <MyComponent />
      <Component />
      <Fruits />
      <FruitsT />
    </div>
  );
}
export default App;
