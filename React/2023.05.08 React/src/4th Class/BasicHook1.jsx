import React, { useState } from 'react'

export default function BasicHook1() {
  return (
    <div>
      <h1>BasicHook: UseState</h1>

      <p>변수의 값이 변경될 때마다 페이지를 업데이트 하도록 만들어 주는것이 useState이다.</p>
      <p>[변수, 변수가 변경할 떄 실행할 함수] = useState(초기값)</p>
      <UseState1 />
      <UseState2 />
    </div>
  )
}

function UseState1() {
  let like = 0;

  function clickLike() {
    like += 1;
    console.log(like);
  }

  return(
    <div>
      <button onClick={clickLike}>like <span>{like}</span></button>
    </div>
  )
}

function UseState2() {
  console.log(useState(0))
  const [like, setLike] = useState(0);
  const [txt, setTxt] = useState("hello")

  function clickLike() {
    setLike(like + 1);
  }

  function handleTxt(event) {
    setTxt(event.target.value)
  }

  return(
    <div>
      <button onClick={clickLike}>like 
        <span>{like}</span>
      </button>

      <button onClick={() => setLike(like + 1)}>like 
        <span>{like}</span>
      </button>
      <input type="text" value={txt} onChange={handleTxt}/>
    </div>
  )
}