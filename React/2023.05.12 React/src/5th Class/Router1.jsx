import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function Router1() {
  return (
    <div>
      <h1>Router1</h1>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="Router1/one" element={<One name="licat" />} />
        <Route path="Router1/two" element={<Two />} />
        <Route path="Router1/three" element={<Three />} />
      </Routes>
    </div>
  );
}
// 주소창에 localhost:3000'/one' ''안을 바꾸면서 화면을 바꾼다. 

export function Index() {
  return <h1>hello world0</h1>;
}

export function One({ name }) {
  return <h1>{name} world1</h1>;
}

export function Two() {
  return <h1>hello world2</h1>;
}

export function Three() {
  return <h1>hello world3</h1>;
}
