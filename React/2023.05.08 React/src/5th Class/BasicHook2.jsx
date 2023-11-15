import React, { useState } from 'react'

export default function BasicHook2() {
  return (
    <div>
      <h1>BasicHook2</h1>
      <Resume1 />
    </div>
  )
}

export function Resume1(props) {
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