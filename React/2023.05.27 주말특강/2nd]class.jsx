// function App() {
//   const root = document.getElementById("root");
//   / const header = document.createElement("h1");
//   / header.innerText = "아 이건 제목이야";
//   / root.appendChild(header);
//   ReactDOM.render(<h1>아 이건 제목이야</h1>, root);
// }
// App();

// 위 코드는 에러를 뿜어서 아래처럼 18버전에 맞게 바꾼다.
// ---------------------------------------------------------

// function App() {
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(
//   <div>
//     <h1>아 이건 제목이야!</h1>
//     <h2>이건 부제목이야!</h2>
//   </div>
//   /이걸 <Headers>로 묶고 싶다.
//   );
// }
// App();

// ---------------------------------------------------------

// function Headers(params) {
//   return (
//   <div>
//     <h1>아 이건 제목이야!</h1>
//     <h2>이건 부제목이야!</h2>
//   </div>
//   );
// }

// function App() {
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<Headers />);
// }
// App();

// ---------------------------------------------------------

// function MyHeader(params) {
//   return (
//     <div> // 접을 수 있게 만들어야 한다
//       <h1>아 이건 제목이야! 여기는 홈페이지!</h1>
//       <h2>이건 부제목이야! 여기는 홈페이지 부제목!</h2>
//     </div>
//   )
// }
// function HomePage(params) {
//   return (
//   <div>
//     <MyHeader />
//   </div>
//   );
// }

// function App() {
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<HomePage />);
// }
// App();

// ---------------------------------------------------------

// function MyHeader(params) {
//   return (
//     <React.Fragment>
//       {/* <React.Fragment> == <></> */}
//       <h1>아 이건 제목이야! 여기는 홈페이지!</h1>
//       <h2>이건 부제목이야! 여기는 홈페이지 부제목!</h2>
//     </React.Fragment>
//   )
// }
// function HomePage(params) {
//   return (
//   <div>
//     <MyHeader />
//   </div>
//   );
// }

// function App() {
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<HomePage />);
// }
// App();

// ---------------------------------------------------------

// function MyHeader(pageName) {
//   console.log(pageName);
//   console.log(pageName.pageName);

//   return (
//     <React.Fragment>
//       {/* <React.Fragment> == <></> */}
//       <h1>아 이건 제목이야! 여기는 홈페이지!</h1>
//       <h2>이건 부제목이야! 여기는 홈페이지 부제목!</h2>
//     </React.Fragment>
//   )
// }
// function HomePage(params) {
//   return (
//   <div>
//     <MyHeader pageName="홈페이지"/>
//                 {/*KEY = VALUE  */}
//   </div>
//   );
// }

// function App() {
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<HomePage />);
// }
// App();

// ---------------------------------------------------------

// function MyHeader(props) {
//   console.log(props);
//   console.log(props.pageName);

//   return (
//     <React.Fragment>
//       <h1>아 이건 제목이야! 여기는 {props.pageName}!</h1>
//       <h2>이건 부제목이야! 여기는 {props.pageName} 부제목!</h2>
//     </React.Fragment>
//   )
// }
// function HomePage(params) {
//   return (
//   <div>
//     <MyHeader pageName="홈페이지1"/>
//     <MyHeader pageName="홈페이지2"/>
//     <MyHeader pageName="홈페이지3"/>
//     <MyHeader pageName="홈페이지4"/>
//   </div>
//   );
// }

// function App() {
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<HomePage />);
// }
// App();

// ---------------------------------------------------------

// function MyHeader(props) {
//   const { pageName, a } = props;
//   console.log(props);
//   console.log(props.pageName);

//   return (
//     <React.Fragment>
//       <h1>아 이건 제목이야! 여기는 {props.pageName}!</h1>
//       <h2>이건 부제목이야! 여기는 {props.pageName} 부제목!</h2>
//     </React.Fragment>
//   )
// }
// function HomePage(params) {
//   return (
//   <div>
//     <MyHeader pageName="홈페이지1"/>
//     <MyHeader pageName="홈페이지2"/>
//     <MyHeader pageName="홈페이지3"/>
//     <MyHeader pageName="홈페이지4"/>
//   </div>
//   );
// }

// function App() {
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<HomePage />);
// }
// App();

// ---------------------------------------------------------

function MyHeader({ pageName }) {
  console.log(pageName);

  return (
    <React.Fragment>
      <h1>아 이건 제목이야! 여기는 {pageName}!</h1>
      <h2>이건 부제목이야! 여기는 {pageName} 부제목!</h2>
    </React.Fragment>
  )
}
function HomePage(params) {
  return (
  <div>
    <MyHeader pageName="홈페이지1"/>
    <MyHeader pageName="홈페이지2"/>
    <MyHeader pageName="홈페이지3"/>
    <MyHeader pageName="홈페이지4"/>
  </div>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HomePage />);
}
App();