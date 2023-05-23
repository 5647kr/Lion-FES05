import { useState } from "react";

function App() {
  const [datas, setDatas] = useState([
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ]);

  function handleClick(id) {
    setDatas(
      datas.filter((item) => {
        return id !== item.id
      })
    );
  }

  return (
    <div>
      {datas.map((item, index) => {
        return (
        <li key ={item.id}>
          <h2>{index +1}  {item.title}</h2>
          <span>{item.price}</span>
          <button onClick={() => {handleClick(item.id)}}>삭제</button>
          
          {/* <button onClick={(event) => {event.target.closest('li').remove()}}>삭제</button> */}
          {/* 위와 같은 방법은 옳지 못하다 */}
        </li>)
      })}
    </div>
  );
}
export default App;
