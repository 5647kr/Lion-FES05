import React, { Fragment } from 'react';

let list1 = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function Component1() {
  return (
    list1.map((item) => {
      return (
      <div>
        <dt>{item.area}</dt>
        <dd>{item.visited ? "방문함" : "방문안함"}</dd>
      </div>
    )
  })
    //? 왜 화면에 출력이 안될까?
    //! 출력하려는걸 return 하지 않아서 출력되지 않았다!
  );
}

const list2 = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function Component2() {
  return (
    list2.map((item) => {
      return (
        <>
          <dt>{item.name}</dt>
          <dd>{item.desc}</dd>
        </>
      )
    })
  )
}

function App() {
  return (
    <div>
      <Component1 />
      <dl>
        <Component2 />
      </dl>
    </div>
  );
}
export default App;
