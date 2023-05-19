import React, { useState } from 'react'

export default function Resume(props) {
  // useState(0) == like라는 변수의 초기값이 0이다. -> 배열을 전달한다
  // setLike == like라는 값을 업데이트 하는 함수이다.
  const [like, setLike] = useState(0);
  // let like = 0;

  // input태그 관련 코드
  const [txt, setTxt] = useState("hello");

  function clickLike() {
    setLike(like + 1);
    // like += 1;
    console.log(like);
  }
  return (
    <>
      <h2>{props.name} 자기소개서</h2>
      <strong>{props.hello}</strong>
      <dl>
        <dt>취미: </dt>
        <dd>{props.hobby}</dd>
        <dt>좋아하는 음식: </dt>
        <dd>{props.food}</dd>
        <dt>좋아하는 색: </dt>
        <dd>{props.color}</dd>
      </dl>
      {/* <button onClick={clickLike}>like <span>{like}</span></button> */}

      {/* like를 눌러도 숫자가 변하지 않는데 이는 변수의 값이 변해도 페이지는 랜더링하지 않기 때문이다. 
      즉, button이라는 하나의 컴포넌트가 업데이트 되고 있지 않다는걸 의미한다. 
      리액트 입장에서는 변수의 값이 바뀌는건 컴포넌트를 랜더링할때 고려할 사항이 아니므로 변수가 변할 때 마다 컴포넌트를 업데이트하라는 명령을 내려줘야 한다.
      그 명령이 바로 useState이다.*/}

      <button onClick={clickLike}>like <span>{like}</span></button>
      <input type="text" value={txt}/>
      {/* 사용자의 입력이 막히게 된다. */}
    </>
  )
}
