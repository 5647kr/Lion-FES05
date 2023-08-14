// Button.jsx
function Button(props) {
  console.log(props);
  console.log(props.children);
  return (
    <button
      onClick={props.onClick}
      style={{
        width: "50px",
        height: "50px",
      }}>
      {props.children}
    </button>
  );
}
function Counter(props) {
  const [num, setNum] = React.useState(0);
  const 실행시키면num증가 = () => {
    setNum(num + 1);
  };
  const 실행시키면num감소 = () => {
    setNum(num - 1);
  };
  return (
    <>
      <span>여기 숫자 {num}</span>
      <div>
        <span>이름:윤서준</span>
      </div>
      <Button onClick={실행시키면num증가}>+</Button>
      <Button onClick={실행시키면num감소}>-</Button>
    </>
  );
}
// HomePage.jsx
function HomePage() {
  return (
    <>
      <h1>숫자 카운터 만들기</h1>
      <Counter />
    </>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HomePage />);
}

App();
