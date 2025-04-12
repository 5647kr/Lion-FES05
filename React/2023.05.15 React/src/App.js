import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Main from './Main';

import Router1, { One, Two, HojunIndex, HojunOne, HojunTwo, Blog } from './1st Class/Router1';
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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />

        <Route path='/Router1/*' element={<Outlet />}>
          <Route index element={<Router1 />} />
          <Route path="one" element={<One name="licat" />} />
          <Route path="two" element={<Two />} />
          <Route path="three" element={<Outlet />}>
            <Route index element={<HojunIndex />} />
            <Route path="hojunone" element={<HojunOne />} />
            <Route path="hojuntwo" element={<HojunTwo />} />
          </Route>
          <Route path="blog/:id" element={<Blog />}/>
        </Route>

        <Route path='/Router2/*' element={<Outlet />}>
          <Route index element={<Router2 />} />
          <Route path="cart" element={<Cart name="licat" />} />
          <Route path="users" element={<Users />} />
          <Route path="usersCoupon" element={<UsersCoupon />} />
          <Route path="usersQuestion" element={<UsersQuestion />} />
          <Route path="usersNotice" element={<UsersNotice />} />
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
    </BrowserRouter>
  );
}

export default App;
