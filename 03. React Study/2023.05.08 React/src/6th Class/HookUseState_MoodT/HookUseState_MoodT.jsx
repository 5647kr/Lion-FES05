import React from 'react'
import "./HookUseState_MoodT.css"

export default function MoodT(props) {
  return (
    <div className='container'>{props.mood ? `기분이 ${props.mood}` : "선택해주세요"}</div>
  )
}