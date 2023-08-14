import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
			<Link to="/blog/1"> four_1 </Link>
      <Link to="/blog/2"> four_2 </Link>
      <Link to="/blog/3"> four_3 </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two name='licat' />}/>
        <Route path="/three" element={<Three name='licat' />}/>
        <Route path="/blog/:id" element={<Blog />}/>
        {/* :/id에 값이 들어오면서 해당되는 페이지를 출력한다. */}
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

function Two({name}){
  return <h1>{name} world2</h1>
}

function Three({name}){
  return <h1>{name} world3</h1>
}

function Blog(){
	const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];
  console.log(location.pathname.split("/"));
  console.log(path);
  return <h1>hello Blog this is blog page {path}</h1>
}

export default App;