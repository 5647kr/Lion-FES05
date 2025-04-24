import React, { Fragment } from 'react'
import './Fragments1.css'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'



export default function Fragments1() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
    </main>
  )
}

function FragmentsPractice() {
  return (
    <>
      <React.Fragment className="my-fragment">
        <h2>안녕 라이켓!</h2>
        <p>안녕 루디?</p>
      </React.Fragment>

      <Fragment>
        <h2>안녕 라이켓!</h2>
        <p>안녕 루디?</p>
      </Fragment>

      <>
        <h2 className='my-fragment'>안녕 라이켓!</h2>
        <p className='my-fragment'>안녕 루디?</p>
      </>
    </>
  )
}


  function Example1() {
    const codeString = `
function FragmentsPractice() {
  return (
    <>
      <React.Fragment className="my-fragment">
        <h2>안녕 라이켓!</h2>
        <p>안녕 루디?</p>
      </React.Fragment>

      <Fragment>
        <h2>안녕 라이켓!</h2>
        <p>안녕 루디?</p>
      </Fragment>

      <>
        <h2 className='my-fragment'>안녕 라이켓!</h2>
        <p className='my-fragment'>안녕 루디?</p>
      </>
    </>
  )
}
    `
    
    return (
      <Wrap>
        <Title>Fragments</Title>
        <p>Fragments를 사용하면 div와 같은 별도의 노드 추가 없이 여러개의 자식을 감쌀 수 있다.</p>
      <p>Fragment사용시, React.Fragment 또는 Fragment 방법으로 작성할 수 있다.</p>
      <p>단, 스타일 속성을 적용해도 출력되지 않으며, key값을 부여하는데 사용된다.</p>

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
            <FragmentsPractice />
          </ResultWrap>
        </ContentWrap>
      </Wrap>
    )
  }