import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/ReactEvent1')}>1교시</button>
      <button onClick={() => navigate('/ReactEvent2')}>2교시</button>
      <button onClick={() => navigate('/ReactEvent3')}>3-1교시</button>
      <button onClick={() => navigate('/ComponentList')}>3-2교시</button>
      <button onClick={() => navigate('/BasicHook1')}>4교시</button>
      <button onClick={() => navigate('/BasicHook2')}>5교시</button>
      <button onClick={() => navigate('/Mood')}>6교시</button>
    </div>
  )
}
