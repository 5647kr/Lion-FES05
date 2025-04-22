import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { Wrap, Title, ContentWrap, CodeWrap, ResultWrap } from '../style/CommonStyle'

export default function Router2() {
  return (
    <main style={{margin: "0 300px"}}>
      <Example1 />
    </main>
  );
}

function Routers() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/Router2/cart">Cart</Link>
      <br />
      <Link to="/Router2/users">Users</Link>
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
  )
}

export function HomePage() {
  return <h1>홈페이지</h1>;
}

export function Cart() {
  return <h1>Cart Page</h1>;
}

export function Products() {
  const { id } = useParams();
  return <h1>Hello products {id}</h1>;
}

export function ProductsNotice() {
  const { id } = useParams();
  return <h1>Hello products {id} notice</h1>;
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



function Example1() {
  const codeString = `
function Routers() {
  return (
    <div>
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
  )
}

export function HomePage() {
  return <h1>홈페이지</h1>;
}

export function Cart() {
  return <h1>Cart Page</h1>;
}

export function Products() {
  const { id } = useParams();
  return <h1>Hello products {id}</h1>;
}

export function ProductsNotice() {
  const { id } = useParams();
  return <h1>Hello products {id} notice</h1>;
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
  `
  
  return (
    <Wrap>
      <Title>Router 실습</Title>
        <p>
        Quiz - Route 사용하여 페이지 경로 만들기
        <br />
        - **Home Page :** /<br />
        - **Product Detail Page** : /products/:id<br />
            - ex) /products/1 , /products/2, /products/3, /products/4<br />
        - **Product Detail Notice Page :** /products/:id/notice<br />
            - ex) /products/1/notice , /products/2/notice…<br />
        - **Cart Page :** /cart<br />
        - **Coupon Page :** /users/coupon<br />
        - **Question Page :** /users/question<br />
        - **Notice Page :** /users/notice<br />
        - **User Page :** /users<br />
        </p>
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