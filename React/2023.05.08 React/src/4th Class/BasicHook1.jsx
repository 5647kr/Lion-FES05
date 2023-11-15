import React, { useState } from 'react'

export default function BasicHook1() {
  return (
    <div>
      <h1>BasicHook1</h1>

      <Resume1 />
      <Resume2 />
    </div>
  )
}

export function Resume1(props) {
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

export function Resume2(props) {
  const [like, setLike] = useState(0);
  const [txt, setTxt] = useState("hello")

  function clickLike() {
    setLike(like + 1);
  }

  return(
    <div>
      <button onClick={clickLike}>like 
        <span>{like}</span>
      </button>

      <button onClick={() => setLike(like + 1)}>like 
        <span>{like}</span>
      </button>
      <input type="text" value={txt}/>
    </div>
  )
}