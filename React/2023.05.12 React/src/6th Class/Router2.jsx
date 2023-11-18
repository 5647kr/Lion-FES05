import React from 'react';
import { Routes, Route, Link, useLocation, Outlet } from 'react-router-dom';

export default function Router2() {
  return (
    <div>
      <h1>Router2</h1>
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
    </div>
  );
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
