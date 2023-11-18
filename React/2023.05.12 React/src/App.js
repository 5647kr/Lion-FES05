import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Main from './Main';

import StyledComponent1 from './1st Class/StyledComponent1';
import StyledComponent2 from './2nd Class/StyledComponent2';
import StyledComponent3 from './3rd Class/StyledComponent3';
import CompositionComponent1 from './4th Class/CompositionComponent1';
import CompositionComponent2 from './4th Class/CompositionComponent2';
import Router1, { One, Two, Three } from './5th Class/Router1';
import Router2, { Blog, First, Second, HojunIndex, HojunOne, Hojunsecond } from './6th Class/Router2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/StyledComponent1' element={<StyledComponent1 />} />
        <Route path='/StyledComponent2' element={<StyledComponent2 />} />
        <Route path='/StyledComponent3' element={<StyledComponent3 />} />
        <Route path='/CompositionComponent1' element={<CompositionComponent1 />} />
        <Route path='/CompositionComponent2' element={<CompositionComponent2 />} />

        <Route path='/Router1/*' element={<Outlet />}>
          <Route index element={<Router1 />} />
          <Route path="one" element={<One name="licat" />} />
          <Route path="two" element={<Two />} />
          <Route path="three" element={<Three />} />
        </Route>

        <Route path='/Router2/*' element={<Outlet />}>
          <Route index element={<Router2 />} />
          <Route path="first" element={<First name="licat" />} />
          <Route path="second" element={<Second />} />
          <Route path="third/*" element={<Outlet />}>
            <Route index element={<HojunIndex />} />
            <Route path="hojunone" element={<HojunOne />} />
            <Route path="hojunsecond" element={<Hojunsecond />} />
          </Route>
          <Route path="blog/:id" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
