import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/ComponentList1')}>1교시</button>
      <button onClick={() => navigate('/ComponentList2')}>2교시</button>
      <button onClick={() => navigate('/ComponentList3')}>3교시</button>
      <button onClick={() => navigate('/Counter')}>4교시</button>
      <button onClick={() => navigate('/Rendering')}>5교시</button>
      <button onClick={() => navigate('/LoginForm')}>6교시</button>
    </div>
  )
}
