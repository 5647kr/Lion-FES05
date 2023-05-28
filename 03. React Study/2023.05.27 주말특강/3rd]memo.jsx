const { useState } = React;

function Memo({title,idx}) {
  return (
    <>
      <div>{idx+1}메모</div>
      <article>{title}</article>
    </>
  )
}

function HomePage(params) {
  const [title, setTitle] = useState("");
  const [titles, setTitles] = useState([]);
  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const onClickButtonHandler = () => {
    const NewTitles = [...titles, title]
    setTitles(NewTitles);
  }
  console.log(titles);

  return (
    <div>
      <input type="text" onChange={onChangeHandler}/>
      <button onClick={onClickButtonHandler}>버튼</button>
      <br />
      {titles.map((title, idx) => {
        return <Memo title={title} idx={idx} />
      })}
    </div>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HomePage />);
}

App();