import React, { useState } from 'react'

export default function Resume(props) {
  {/* 버튼을 누르면 Like 문구가 뜨고 다시 누르면 사라지는 코드를 작성하라 */}
  const [like, setLike] = useState(0);

  function clickLike() {
    setLike(like + 1);
    console.log(like);
  }
  return (
    <>
      <button onClick={clickLike}>like</button>
    </>
  )
}
