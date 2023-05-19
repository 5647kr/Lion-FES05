import React, { useState } from 'react'

export default function ResumeT(props) {
  {/* 버튼을 누르면 Like 문구가 뜨고 다시 누르면 사라지는 코드를 작성하라 */}
  const [like, setLike] = useState("");
  function clickLike() {
    if (like === "") {
      setLike("Like");
    } else {
      setLike("");
    }
  }
  return (
    <>
      <button onClick={clickLike}>like</button>
      <span>{like}</span>
    </>
  )
}
