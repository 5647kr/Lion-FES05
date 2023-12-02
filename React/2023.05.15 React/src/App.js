import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Main from './Main';

import Router1, { One, Two, Three } from './1st Class/Router1';
import Router2, { Products, ProductsNotice, Cart, Users, UsersCoupon, UsersQuestion, UsersNotice } from './2nd Class/Router2'
import UseEffect1 from './3rd Class/UseEffect1'
import UseEffect2 from './3rd Class/UseEffect2'
import UseEffect3 from './4th Class/UseEffect3'
import UseRef1 from './5th Class/UseRef1';
import UseRef2 from './5th Class/UseRef2';
import UseRef3 from './6th Class/UseRef3';
import UseMemo from './6th Class/UseMemo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />

        <Route path='/Router1/*' element={<Outlet />}>
          <Route index element={<Router1 />} />
          <Route path="one" element={<One name="licat" />} />
          <Route path="two" element={<Two />} />
          <Route path="three" element={<Three />} />
        </Route>

        <Route path='/Router2/*' element={<Outlet />}>
          <Route index element={<Router2 />} />
          <Route path="Cart" element={<Cart name="licat" />} />
          <Route path="Users" element={<Users />} />
          <Route path="UsersCoupon" element={<UsersCoupon />} />
          <Route path="UsersQuestion" element={<UsersQuestion />} />
          <Route path="UsersNotice" element={<UsersNotice />} />
          <Route path="products/:id" element={<Products />} />
          <Route path="products/:id/notice" element={<ProductsNotice />} />
        </Route>

        <Route path='/UseEffect1' element={<UseEffect1 />} />
        <Route path='/UseEffect2' element={<UseEffect2 />} />
        <Route path='/UseEffect3' element={<UseEffect3 />} />
        <Route path='/UseRef1' element={<UseRef1 />} />
        <Route path='/UseRef2' element={<UseRef2 />} />
        <Route path='/UseRef3' element={<UseRef3 />} />
        <Route path='/UseMemo' element={<UseMemo />} />
      </Routes>
    </Router>
  );
}

export default App;
