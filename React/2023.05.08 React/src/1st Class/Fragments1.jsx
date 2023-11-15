import React, { Fragment } from 'react'
import './Fragments1.css'

export default function Fragments1() {
  // Fragments를 사용하면 div와 같은 별도의 노드추가없이
  // 여러 개의 자식을 감쌀 수 있다.
  return (
    <div>
      <h1>Fragments</h1>
      <ListItem />
      <Glossary />
      <MyComponent />
    </div>
  )
}

export function ListItem({ item }) {
  return (
    // React.Fragment 또는 import후 Fragment 또는 공백
    <>
      <dt>사과</dt>
      <dd>사과는 가을이 제철이죠!</dd>
    </>
  );
}

export function Glossary(props) {
  return (
    <dl>
      <ListItem />
      <ListItem />
    </dl>
  );
}

export function MyComponent() {
  return (
    // Fragment에 스타일 속성을 적용해도 출력되지 않아 무의미하다.
    // Fragment를 단축하면 속성을 적용하지 못한다.
    <React.Fragment> 
      <h1 className="my-fragment">리엑트프레그먼트</h1>
      <p className="my-fragment">테스트입니다!</p>
    </React.Fragment>
  );
}