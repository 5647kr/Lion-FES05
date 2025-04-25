import React from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'


export default function ComponentList() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
    </main>
  )
}

function ComponentListPractice1(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.
	
  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.

  return(
    <div>
      {num.map((i)=><h1 key={i}>안녕, {name} {i}호</h1>)}
    </div>
  )
}


function Example1() {
  const codeString = `
function ComponentListPractice1(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.
	
  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.

  return(
    <div>
      {num.map((i)=><h1 key={i}>안녕, {name} {i}호</h1>)}
    </div>
  )
}
  `
  
  return (
    <Wrap>
      <Title>ComponentList</Title>
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
          <ComponentListPractice1 name="라이켓"/>
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}
