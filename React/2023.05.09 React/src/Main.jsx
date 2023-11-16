import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/Exam1')}>1교시</button>
      <button onClick={() => navigate('/Exam2')}>2교시</button>
      <button onClick={() => navigate('/Exam3')}>3교시</button>
      <button onClick={() => navigate('/ReactEvent1')}>4교시</button>
      <button onClick={() => navigate('/ReactEvent2')}>5교시</button>
      <button onClick={() => navigate('/ReactEvent3')}>6-1교시</button>
      <button onClick={() => navigate('/ComponentList')}>6-2교시</button>
    </div>
  )
}
