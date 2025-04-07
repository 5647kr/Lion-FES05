import React from 'react'

export default function JSX1() {
  // 주석입니다
  return (
    <div className="App">
      {/* 주석입니다 */}
      <h1 >JSX</h1>

      <h2>JSX 문법</h2>
      <ul>
        <li>컴포넌트의 최상위 부모 요소는 1개, 단일해야 한다.</li>
        <li>모든 프로퍼티 이름은 카멜 케이스(CamelCase) 대문자로 구분한다.</li>
        <li>문자를 제외한 속성값은 중괄호({})를 사용한다.</li>
        <li>true값을 가진 속성은 속성 이름만으로 표현할 수 있다. 만약 false라면 중괄호를 사용한다.</li>
        <li>class속성은 className으로 표기한다.</li>
        <li>인라인 스타일은 객체 형태를 사용한다.</li>
      </ul>
    </div>
  )
}
