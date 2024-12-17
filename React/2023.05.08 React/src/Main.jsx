import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/Fragments1')}>1교시</button>
      <button onClick={() => navigate('/Fragments2')}>2-1교시</button>
      <button onClick={() => navigate('/CreateComponent1')}>2-2교시</button>
      <button onClick={() => navigate('/CreateComponent2')}>3교시</button>
      <button onClick={() => navigate('/BasicHook1')}>4교시</button>
      <button onClick={() => navigate('/BasicHook2')}>5교시</button>
      <button onClick={() => navigate('/Mood')}>6교시</button>
      <button onClick={() => navigate('/MoodApp')}>7교시</button>
    </div>
  )
}
