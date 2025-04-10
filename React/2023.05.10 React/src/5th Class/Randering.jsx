import React, { useState } from 'react'

export default function Randering() {
  return (
    <div>
      <h1>Randering</h1>

      <Hello1 name="재현" />
      <Hello2 name="개리" />
    </div>
  )
}

function Hello1({name}){
  if (name) {
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
  return <NoName/>
}

function NoName(){
  return(
    <div>
      <h1>이름을 입력하지 않았습니다.</h1>
    </div>
  )
}

function Hello2(props) {
	const name = props.name;
  if(name){
    return <One name={name}/>
  } else {
    return <Two/>
  }
}

function One(props){
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

function Two(){
  return (
    <div>
      <h1>name이 입력된 것이 없습니다.</h1>
    </div>
  )
}

