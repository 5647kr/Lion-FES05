import React, { useState } from 'react'

export default function Mood() {

  const [like, setLike] = useState(0);
  function btn1() {
    if (like === "") {
      setLike("a");
    } else {
      setLike("");
    }
  }
  return (
    <div>
      <button onClick={btn1}>a</button>
      <button>b</button>
      <button>c</button>
      <button>d</button>

      <div>
        {like}
      </div>
    </div>
  )
}
