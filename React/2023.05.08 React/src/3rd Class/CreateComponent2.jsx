import React from 'react'

export default function CreateComponent2() {
  return (
    <div>
      <h1>CreateComponent2</h1>

      <HelloProps 
				name="jaehyun" 
				age={25} 
				someFunc={() => 'awesome!!!'} 
				someJSX={<img src="https://picsum.photos/id/237/200/300" />} 
				someArr={[1, 2, 3]} 
				someObj={{ one: 1 }} />

      <Resume 
        hello="안녕하세요" 
        name="개리" 
        hobby="게임" 
        food="고기" 
        color="blue"/>

        <ColorText color="red"/>
        <ColorText color="green"/>
        <ColorText color="blue"/>
    </div>
  )
}

export function HelloProps(props) {
  return (
    <div>
      <p>my name is {props.name} and age is {props.age}</p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  )
}

export function Resume(props) {
  return (
    <>
      <h1>{props.name} 자기소개서</h1>
      <h2>{props.hello}</h2>
      <p>취미: {props.hobby}</p>
      <p>좋아하는 음식: {props.food}</p>
      <p>좋아하는 색: <span style={{color: "blue"}}>{props.color}</span></p>
    </>
  )
}

export function ColorText(props) {
  return(
    <>
      <h1 style={{color:props.color}}>색이 바뀌어요!</h1>
    </>
  )
}