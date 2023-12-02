import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

export default function Router2() {
  return (
    <div>
      <h1>Router2</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/Router2/Cart">Cart</Link>
      <br />
      <Link to="/Router2/Users">Users</Link>
      <br />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/products/:id/notice" element={<ProductsNotice />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/coupon" element={<UsersCoupon />} />
        <Route path="/users/question" element={<UsersQuestion />} />
        <Route path="/users/notice" element={<UsersNotice />} />
      </Routes>
    </div>
  );
}

export function HomePage() {
  return <h1>홈페이지</h1>;
}

export function Cart() {
  return <h1>Cart Page</h1>;
}

export function Products() {
  return <h1>Hello products</h1>;
}

export function ProductsNotice() {
  return <h1>Hello products notice</h1>;
}

export function Users() {
  return <h1>Users Page</h1>;
}

export function UsersCoupon() {
  return <h1>UsersCoupon Page</h1>;
}

export function UsersQuestion() {
  return <h1>UsersQuestion Page</h1>;
}

export function UsersNotice() {
  return <h1>UsersNotice Page</h1>;
}
