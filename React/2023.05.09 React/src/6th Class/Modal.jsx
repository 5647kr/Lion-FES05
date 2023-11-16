import React from 'react'
import './ModalStyle.css';

export default function Modal({children, setModal}) {
  function modalEvent() {
    setModal(false)
  }

  return (
    <div className='modal-backdrop'>
      <article className='modal'>
        {children}
        {/* <h2>홈페이지에 오신것을 환영합니다</h2>
        <p>좋은 하루 되세요</p> */}
        <button onClick={modalEvent}>닫기</button>
      </article>
    </div>
  )
}
