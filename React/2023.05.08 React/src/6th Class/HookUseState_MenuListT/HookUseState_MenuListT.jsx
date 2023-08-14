import React from 'react'
import MenuListItemT from '../HookUseState_MenuListItemT/HookUseState_MenuListItemT'
import "./HookUseState_MenuListT.css"

export default function MenuListT(props) {
  const menus = ["좋아요", "정말 좋아요!", "최고에요!", "미쳤어요!"]
  return (
    <ul className='container-list'> 
      {menus.map((moodEl) => {
        // mood: 기분의 txt 
        // isSelected: 현재 사용자의 기분이 맞는지 전달, 
        // onClickEvt: 현재 기분을 변경하는 함수
        return <MenuListItemT mood={moodEl} isSelected={props.mood === moodEl} onClickEvt={props.onItemClick}/>
      })}
    </ul>
  )
}
