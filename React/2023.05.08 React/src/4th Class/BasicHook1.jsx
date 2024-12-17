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

function Resume1() {
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

function Resume2() {
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