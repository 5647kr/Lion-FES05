import React, { Fragment } from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'



export default function Fragments1() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
      <Example1T/>
      <Example3/>
      <Example2T/>
    </main>
  )
}

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function FragmentsPractice1() {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.no}>
            <p>{item.area}</p>
          </li>
        )
      })}
    </ul>
  )
}

function FragmentsPractice2() {
  return (
    list.map((item) => {
      return(
      <Fragment key={item.no}>
        <p>{ item.area }</p>
      </Fragment>)
    })
  );
}


function Example1() {
  const codeString = `
let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function FragmentsPractice1() {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.no}>
            <p>{item.area}</p>
          </li>
        )
      })}
    </ul>
  )
}

function FragmentsPractice2() {
  return (
    list.map((item) => {
      return(
      <Fragment key={item.no}>
        <p>{ item.area }</p>
      </Fragment>)
    })
  );
}
  `
  
  return (
    <Wrap>
      <Title>Fragments 실습</Title>
      <p>위 두 코드의 경우 list.map은 동일하나 아래코드는 중괄호로 감싸고 있으나 윗 코드는 중괄호로 감싸고 있지 않다.</p>
      <p>그 이유는 html태그 안에 js코드를 처리하기 위해 중괄호를 사용하고 그렇지 않은 경우엔 중괄호를 사용하지 않는다.</p>
      <ContentWrap>
        <CodeWrap>
          <strong>코드</strong>
          <pre>
            <code>
              {codeString}
            </code>
          </pre>
        </CodeWrap>
        <ResultWrap>
          <strong>실행 결과</strong>
          <FragmentsPractice1 />
          <FragmentsPractice2 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}



function FragmentsPractice1T() {
  return (
    list.map((item) => {
      return(
      <Fragment key={item.no}>
        <p>{ item.area }</p>
        <p>{ item.visited ? "방문함" : "방문 안함" }</p>
      </Fragment>)
    })
  );
}


function Example1T() {
  const codeString = `
let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function FragmentsPractice3T() {
  return (
    list.map((item) => {
      return(
      <Fragment key={item.no}>
        <p>{ item.area }</p>
        <p>{ item.visited ? "방문함" : "방문 안함" }</p>
      </Fragment>)
    })
  );
}
  `
  
  return (
    <Wrap>
      <Title>Fragments 실습T</Title>
      <ContentWrap>
        <CodeWrap>
          <strong>코드</strong>
          <pre>
            <code>
              {codeString}
            </code>
          </pre>
        </CodeWrap>
        <ResultWrap>
          <strong>실행 결과</strong>
          <FragmentsPractice1T />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}











let items = [
  { id: 1, name: "Apple", desc: "사과는 빨갛다." },
  { id: 2, name: "Banana", desc: "바나나는 길다." },
  { id: 3, name: "Cherry", desc: "체리는 비싸다." },
];

function FragmentsPractice3() {
  return (
    <dl>
      {items.map((item) => {
        return (
          <Fragment key={item.id}>
            <dt>{item.name}</dt>
            <dt>{item.desc}</dt>
          </Fragment>
        )
      })}
    </dl>
  )
}


function Example3() {
  const codeString = `
let items = [
  { id: 1, name: "Apple", desc: "사과는 빨갛다." },
  { id: 2, name: "Banana", desc: "바나나는 길다." },
  { id: 3, name: "Cherry", desc: "체리는 비싸다." },
];

function FragmentsPractice3() {
  return (
    <dl>
      {items.map((item) => {
        return (
          <Fragment key={item.id}>
            <dt>{item.name}</dt>
            <dt>{item.desc}</dt>
          </Fragment>
        )
      })}
    </dl>
  )
}
  `
  
  return (
    <Wrap>
      <Title>Fragments 실습2</Title>
      <ContentWrap>
        <CodeWrap>
          <strong>코드</strong>
          <pre>
            <code>
              {codeString}
            </code>
          </pre>
        </CodeWrap>
        <ResultWrap>
          <strong>실행 결과</strong>
          <FragmentsPractice3 />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}



function FragmentsPractice2T() {
  const itemList = items.map(({id, name, desc}) => {
    return (
      <React.Fragment key={id}>
        <dd>{name}</dd>
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


function Example2T() {
  const codeString = `
function FragmentsPractice2T() {
  const itemList = items.map(({id, name, desc}) => {
    return (
      <React.Fragment key={id}>
        <dd>{name}</dd>
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
  `
  
  return (
    <Wrap>
      <Title>Fragments 실습2T</Title>
      <ContentWrap>
        <CodeWrap>
          <strong>코드</strong>
          <pre>
            <code>
              {codeString}
            </code>
          </pre>
        </CodeWrap>
        <ResultWrap>
          <strong>실행 결과</strong>
          <FragmentsPractice2T />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}








































