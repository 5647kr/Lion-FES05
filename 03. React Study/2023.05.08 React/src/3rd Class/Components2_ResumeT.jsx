import React from 'react'

export default function ResumeT(props) {
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
    </>
  )
}
