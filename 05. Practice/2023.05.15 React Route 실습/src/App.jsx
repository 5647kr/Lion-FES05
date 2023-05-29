import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> HomePage </Link>
      <Link to="/Product"> Product Detail Page </Link>
      <Link to="/cart"> CartPage </Link>
      <Link to="/users"> UserPage </Link>
      <Routes>
        <Route path="/" element={<HomePage name="Home" />}/>
        <Route path="/Product/:id" element={<Product />}/>
        <Route path="/cart" element={<Cart name='Cart' />}/>
        <Route path="/users/*" element={<Outlet />}>
          <Route path="" element={<Users/>}/>
          <Route path="coupon/" element={<Coupon/>}/>
          <Route path="question/" element={<Question />}/>
          <Route path="notice/" element={<Notice/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function HomePage(){
  return <h1>Homepage</h1>
}

function Cart(){
  return <h1>Cartpage</h1>
}

function Users(){
  return (
    <ul>
      <li>
        <Link to="/users/Coupon"> Coupon </Link>
      </li>
      <li>
        <Link to="/users/Question"> Question </Link>
      </li>
      <li>
        <Link to="/users/Notice"> Notice </Link>
      </li>
    </ul>
  )
}

function Coupon(){
  const location = useLocation();
  console.log(location)
  return <h1>Coupon Page</h1>
}

function Question(){
  const location = useLocation();
  console.log(location)
  return <h1>Question Page</h1>
}

function Notice(){
  const location = useLocation();
  console.log(location)
  return <h1>Notice Page</h1>
}

function Product(){
	const location = useLocation();
  console.log(location)
  return <h1>Product</h1>
}


export default App;