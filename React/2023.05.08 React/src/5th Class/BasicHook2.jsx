import React, { useState } from 'react'

export default function BasicHook2() {
  return (
    <div>
      <h1>BasicHook: UseState</h1>
      <UseState1 />
    </div>
  )
}

function UseState1() {
  const [like, setLike] = useState(false);

  function clickLike() {
    setLike(!like);
  }

  return(
    <div>
      <button onClick={clickLike}>like</button>
      <span>{like ? "Like" : ""}</span>
    </div>
  )
}