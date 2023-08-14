import React, { Fragment } from 'react';
import "./Fragments.css"

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
      <dt>딸기</dt>
      <dd>딸기는 겨울이 제철이죠!</dd>
    </React.Fragment>
    // <React.Fragment></React.Fragment> == <></>
    
  );
}

function Result(props) {
  return (
    <dl>
      <ListItem1 />
      <ListItem1 />
      <ListItem2 />
      <ListItem2 />
    </dl>
  );
}

function Component1() {
  return (
    <React.Fragment>
      <h1 className="fragment">리엑트프레그먼트</h1>
      <p className="fragment">테스트입니다!</p>
    </React.Fragment>
  );
}

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function App() {
  return (
    <div>
      <h1>안녕, 라이캣 1호!</h1>
			<h2>안녕, 라이캣 2호!</h2>

      <Result />
      <Component1 />
    </div>
    // 2개 이상의 요소를 반환할 수 없다.
    // 따라서 감싸는 단일한 루트요소가 필요하다.
  );
}
export default App;
