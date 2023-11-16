import React from 'react'

export default function ComponentList() {
  return (
    <div>
      <h1>ComponentList</h1>
      <Hello />
    </div>
  )
}

function Hello(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.
	
  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.

  return(
    <div>
      {num.map((i)=><h1>안녕, {name} {i}호</h1>)}
    </div>
  )
}