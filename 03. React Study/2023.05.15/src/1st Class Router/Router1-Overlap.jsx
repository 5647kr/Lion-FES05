import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter> {/* 리액트 라우터를 쓰기 위해 써야한다 */}
      <Link to="/"> home </Link>
      <br />
      <Link to="/one"> one </Link>
      <br />
      <Link to="/two"> two </Link>
      <br />
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes> 
        <Route path="/" element={<Index />}/> {/* 주소창에 /를 입력하면 Index 컴포넌트를 보여준다라는 의미이다. */}
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three/*" element={<Outlet />}>
          <Route path="" element={<HojunIndex/>}/>
          <Route path="hojunone/" element={<HojunOne/>}/>
          <Route path="hojuntwo/" element={<HojunTwo/>}/>
        </Route>
        <Route path="/blog/:id" element={<Blog />}/>
      </Routes>
    </BrowserRouter>
  );
}
function Index(){
  return <h1>hello world0</h1>
}

function One({name}){
  return <h1>{name} world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

function Blog(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Blog</h1>
}

function HojunIndex(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Hojun index</h1>
}

function HojunOne(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Hojun 1</h1>
}

function HojunTwo(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Hojun 2</h1>
}

export default App;