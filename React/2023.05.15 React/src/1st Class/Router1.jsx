import { useLocation, useParams, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'


export default function Router1() {
  return (
    <main style={{margin: "0 300px"}}>
      <Example1 />
    </main>
  );
}

function Routers() {
  return (
    <div>
      <Link to="/"> home </Link>
      <Link to="/Router1/one"> one </Link>
      <Link to="/Router1/two"> two </Link>
      <Link to="/Router1/three"> three </Link>
      <Link to="/Router1/blog"> blog </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three/*" element={<Outlet />}>
          <Route index element={<HojunIndex />} />
          <Route path="hojunone" element={<HojunOne />} />
          <Route path="hojuntwo" element={<HojunTwo />} />
        </Route>
        <Route path="/blog/:id" element={<Blog />}/>
      </Routes>
    </div>
  )
}

export function Index(){
  return <h1>hello world0</h1>
}

export function One({name}){
  return <h1>{name} world1</h1>
}

export function Two(){
  return <h1>hello world2</h1>
}

export function Three(){
  return <h1>hello world3</h1>
}

export function Blog(){
  const location = useLocation();
  const {id} = useParams();
  console.log(location)
  return <h1>hello Blog {id}</h1>
}

export function HojunIndex() {
  return <h2>hello Hojun index</h2>
}

export function HojunOne() {
  return <h2>hello Hojun 1</h2>
}

export function HojunTwo() {
  return <h2>hello Hojun 2</h2>
}



function Example1() {
  const codeString = `
function Routers() {
  return (
    <div>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="Router1/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three/*" element={<Outlet />}>
          <Route index element={<HojunIndex />} />
          <Route path="hojunone" element={<HojunOne />} />
          <Route path="hojuntwo" element={<HojunTwo />} />
        </Route>
        <Route path="/blog/:id" element={<Blog />}/>
      </Routes>
    </div>
  )
}

export function Index(){
  return <h1>hello world0</h1>
}

export function One({name}){
  return <h1>{name} world1</h1>
}

export function Two(){
  return <h1>hello world2</h1>
}

export function Three(){
  return <h1>hello world3</h1>
}

export function Blog(){
  const location = useLocation();
  const {id} = useParams();
  console.log(location)
  return <h1>hello Blog {id}</h1>
}

export function HojunIndex() {
  return <h2>hello Hojun index</h2>
}

export function HojunOne() {
  return <h2>hello Hojun 1</h2>
}

export function HojunTwo() {
  return <h2>hello Hojun 2</h2>
}
  `
  
  return (
    <Wrap>
      <Title>Router</Title>
        <p>
          라우터는 URL 주소창을 지켜보며, 변화하면 변화에 알맞는 페이지를 사용자에게 안내해주는 기능이다.<br />
          라우터에는 BrowserRouter, Routes, Route등이 있다.
        </p>
        <ul>
          <li>
            BrowserRouter: URL과 URL을 연결한다. 마치 SSR과 같이 URL을 사용할 수 있다.
          </li>
          <li>
            Routes: URL이 변경되면 Routes의 모든 자식요소 Route를 살펴보고 가장 알맞는 것을 매칭한다.
          </li>
          <li>
            Route: 현재 URL과 매칭된 UI를 렌더링 하는 역할을 한다.
          </li>
          <li>
            Outlet: 자식의 경로로 들어가면 outlet이 해당 컴포넌트로 바뀐다. 메타몽같은 역할을 한다.
          </li>
        </ul>

        <p>주소창에 localhost:3000/Router1/'one' ''안을 바꾸면서 화면을 바꾼다.</p>
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
          <Routers />
        </ResultWrap>
      </ContentWrap>
    </Wrap>
  )
}