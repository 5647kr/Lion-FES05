const { useState } = React;

// function MyHeader({ pageName }) {
//   console.log(pageName);
//   return (
//     <React.Fragment>
//       <h1>아 이건 제목이야! 여기는 {pageName}!</h1>
//       <h2>이건 부제목이야! 여기는 {pageName} 부제목!</h2>
//     </React.Fragment>
//   )
// }
// function HomePage(params) {
//   const title = useState("타이틀");
//   console.log(title);
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

// function MyHeader({ pageName}) {

//   return (
//     <>
//       <h1>아 이건 제목이야 여기는 {pageName}!</h1>
//       <h2>이건 부제목이야 여기는 {pageName} 부제목!</h2>
//     </>
//   );
// }

// function HomePage(params) {
//   const [title, setTitle] = useState("홈페이지");
//   const buttonHandler = () => {
//     setTitle("버튼이 눌린 페이지");
//   }
//   return (
//     <div>
//       <MyHeader pageName={title} a="a" />
//       <input type="text" />
//       <button onClick={buttonHandler}>버튼</button>
//       {title}
//     </div>
//   );
// }

// function App() {
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<HomePage />);
// }

// App();

// ---------------------------------------------------------

function MyHeader({ pageName}) {

  return (
    <>
      <h1>아 이건 제목이야 여기는 {pageName}!</h1>
      <h2>이건 부제목이야 여기는 {pageName} 부제목!</h2>
    </>
  );
}

function HomePage(params) {
  const [title, setTitle] = useState("홈페이지");
  const buttonHandler = () => {
    setTitle("버튼이 눌린 페이지");
  }
  return (
    <div>
      <MyHeader pageName={title} a="a" />
      <input type="text" />
      <button onClick={buttonHandler}>버튼</button>
      {title}
    </div>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HomePage />);
}

App();