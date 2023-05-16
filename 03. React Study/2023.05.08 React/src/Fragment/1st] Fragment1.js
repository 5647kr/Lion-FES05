import React, { Fragment } from 'react';
import "./MyComponent.css"

function ListItem1({ item }) {
  return (
    <div>
      <dt>사과</dt>
      <dd>사과는 가을이 제철이죠!!</dd>
    </div>
  );
}
function ListItem2({ item }) {
  return (
    <React.Fragment>
    {/* <React.Fragment>를 <></>로 작성 가능하다. */}
      <dt>딸기</dt>
      <dd>딸기는 겨울이 제철이죠!!</dd>
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
      {/* 이렇게 사용하지 않는다! */}
    </React.Fragment>
  );
}

function App() {
  return (
    <div>
      <Glossary />
      <MyComponent />
    </div>
  );
}
export default App;
