import React from 'react';
import { Routes, Route, Link, useLocation, Outlet } from 'react-router-dom';
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function Router2() {
  return (
    <main style={{margin: "0 100px"}}>
      <Example1 />
    </main>
  );
}

function Example1() {
  const codeString = `
function RouterPractice() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/Router2/first">first</Link>
      <Link to="/Router2/second">second</Link>
      <Link to="/Router2/third">third</Link>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/first" element={<First name="licat" />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third/*" element={<Outlet />}>
          <Route index element={<HojunIndex />} />
          <Route path="hojunone" element={<HojunOne />} />
          <Route path="hojunsecond" element={<Hojunsecond />} />
        </Route>
        <Route path="/blog/:id" element={<Blog />} />
        {/* :/id에 값이 들어오면서 해당되는 페이지를 출력한다. */}
        {/* *: 모든 url을 처리하며 부모 router에는 outlet을 넣어줘야
        중첩된 url을 처리할 수 있다.
        Route 안에 Route가 있는데
        Three 뒤에 아무것도 없으면 hojunindex를
        hojunone이 있으면 hojunone
        hojuntwo가 있으면 hojuntwo 를 출력한다 */}
      </Routes>
    </>
  )
}

export function Index() {
  return <h1>Hello World 0</h1>;
}

export function First({ name }) {
  return <h1>{name} World 1</h1>;
}

export function Second() {
  return <h1>Hello World 2</h1>;
}

export function Blog() {
  const location = useLocation();
  console.log(location);
  return <h1>Hello Blog</h1>;
}

export function HojunIndex() {
  const location = useLocation();
  console.log(location);
  return <h1>Hello Hojun Index</h1>;
}

export function HojunOne() {
  const location = useLocation();
  console.log(location);
  return <h1>Hello Hojun 1</h1>;
}

export function Hojunsecond() {
  const location = useLocation();
  console.log(location);
  return <h1>Hello Hojun 2</h1>;
}

  `
  
  return (
    <Wrap>
      <Title>Router</Title>
        <p>
          Link는 React Router에서 제공하는 컴포넌트 중 하나로, 클릭하면 애플리케이션 내에서 새로운 경로로 이동하는 링크를 생성하는 컴포넌트이다.
          <br />
          Link에는 다양한 속성이 존재한다.
        </p> 

        <ul>
        <li>pathName: 이동할 경로를 나타내는 문자열이다.</li>
        <li>search: 쿼리스트링을 나타내는 문자열이다.</li>
        <li>hash: URL 해시를 나타내는 문자열이다.</li>
        <li>state: 이동할 경로와 함께 전달할 상태 정보이다.</li>
        </ul>
        
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
          <RouterPractice />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}






function RouterPractice() {
  return (
    <>
      <Link to="/"> Home </Link>
      <Link to="/Router2/one"> one </Link>
      <Link to="/Router2/two"> two </Link>
      <Link to="/Router2/three"> three </Link>
      <Link to="/blog/1"> blog_1 </Link>
      <Link to="/blog/2"> blog_2 </Link>
      <Link to="/blog/3"> blog_3 </Link>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One2 name="licat" />} />
        <Route path="/two" element={<Two2 />} />
        <Route path="/three" element={<Three2 />} />
        <Route path="/blog/:id" element={<Blog2 />} />
      </Routes>
    </>
  )
}

export function Index() {
  return <h1>Hello World 0</h1>;
}

export function One2({ name }) {
  return <h1>{name} World 1</h1>;
}

export function Two2() {
  return <h1>Hello World 2</h1>;
}

export function Three2() {
  return <h1>Hello World 3</h1>;
}

export function Blog2() {
  const location = useLocation();
  console.log(location);
  return <h1>Hello Blog</h1>;
}