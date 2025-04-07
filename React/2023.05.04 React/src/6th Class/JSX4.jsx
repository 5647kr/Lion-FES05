import React from 'react'
import './JSX4.css'

export default function JSX4() {
  return (
    <div>
      <h1>JSX4</h1>
      <List01 />
      <List02 />
      <List03 />
    </div>
  )
}

function List01() {
  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];

  let areas = list.map((item) => {
    return <li key={item.no} className={item.visited ? 'area-item active' : 'area-item'}>{item.area}</li>
  })
  

  return (
    <div>
      <ul className='list-area'>{areas}</ul>
    </div>
  )
}

function List02() {
  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];

  return (
    <ul style={{padding: 0, margin: 0}}>
    {list.map((item) => {
      return (
        <li key = {item.no} style={{listStyle: "none", border: "1px solid black", backgroundColor: item.visited ? "blue" : "white", color: item.visited ? "white" : "black"}} >
          {item.area}
        </li>
      )
    })}
    </ul>
  )
}



function List03() {
  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];

  return (
    <ul className='list-area'>
      {list.map((item) => {
        return (
          <li key={item.no} className={item.visited ? "area-item active" : "area-item"}>{item.area}</li>
        )
      })}
    </ul>
  )
}