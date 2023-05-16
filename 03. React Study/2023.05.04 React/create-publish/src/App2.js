
function App() {
  const name = "라이켓!";

  const 변수 = "value";
  function 함수() {
    console.log("함수 실행");
  }
  const 값 = true;

  return (
  <div>
    <h1>안녕 {name}!!</h1>

    {100 + 1}
    {'hello' + 'world'}
    {[1, 2, 3].map(x => x**2)}
    {함수()}
    {변수}
    {값?'one':'two'}
  </div>
  );
}


export default App;
