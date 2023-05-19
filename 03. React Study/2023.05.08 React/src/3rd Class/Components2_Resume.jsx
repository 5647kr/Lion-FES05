import React from 'react'

export default function Resume({hello, name, hobby, food, color}) {
  return (
    <div>
      <h1>{name} 자기소개서</h1>
      <h2>{hello}</h2>
      <p>취미: {hobby}</p>
      <p>좋아하는 음식: {food}</p>
      <p>좋아하는 색: {color}</p>
    </div>
  )
}
