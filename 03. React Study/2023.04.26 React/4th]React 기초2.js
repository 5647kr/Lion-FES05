function HelloButton(props) {
  // 인자로 props
  return (
    <button onClick={()=>console.log('실행')}>
      Hello
    </button>
  );
}

const app = (
  <div>
    <HelloButton/>
    <HelloButton/>
    <HelloButton/>
    <HelloButton/>
    <HelloButton/>
  </div>
);

// DOM에 리액트 컴포넌트 랜더링하기
const domContainer = document.querySelector('#root');
ReactDOM.render(app, domContainer);