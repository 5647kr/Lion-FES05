import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/StyledComponent1')}>1교시</button>
      <button onClick={() => navigate('/StyledComponent2')}>2교시</button>
      <button onClick={() => navigate('/StyledComponent3')}>3교시</button>
      <button onClick={() => navigate('/CompositionComponent1')}>4-1교시</button>
      <button onClick={() => navigate('/CompositionComponent2')}>4-2교시</button>
      <button onClick={() => navigate('/Router1')}>5교시</button>
      <button onClick={() => navigate('/Router2')}>6교시</button>
    </div>
  )
}
