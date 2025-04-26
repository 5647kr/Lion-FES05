import React from 'react'
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function ComponentList1() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1/>
      <Example2/>
    </main>
  )
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];


function ComponentListPractice1(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}> 
    {/* key는 형제사이에서만 고유하면 된다. */}
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}


function Example1() {
  const codeString = `
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];


function ComponentListPractice1(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}> 
    {/* key는 형제사이에서만 고유하면 된다. */}
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
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
          <ComponentListPractice1 posts={posts} />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}






function ComponentListPractice2(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.
	
  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((i) => (
    <h1 key={i}>      
      안녕, {name} {i}호
    </h1>
  ));

  return(
    <div>
      {numComponentsArray}
    </div>
  )
}


function Example2() {
  const codeString = `
function ComponentListPractice2(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.
	
  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((i) => (
    <h1 key={i}>      
      안녕, {name} {i}호
    </h1>
  ));

  return(
    <div>
      {numComponentsArray}
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
          <ComponentListPractice2 name="재현" />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}


















function Hello(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.
	
  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((i) => (
    <h1 key={i}>      
      안녕, {name} {i}호
    </h1>
  ));

  return(
    <div>
      {numComponentsArray}
    </div>
  )
}

