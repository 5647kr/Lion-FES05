import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/Router1')}>1교시</button>
      <button onClick={() => navigate('/Router2')}>2교시</button>
      <button onClick={() => navigate('/UseEffect1')}>3교시</button>
      <button onClick={() => navigate('/UseEffect2')}>3-1교시</button>
      <button onClick={() => navigate('/UseEffect3')}>4교시</button>
      <button onClick={() => navigate('/UseRef1')}>5교시</button>
      <button onClick={() => navigate('/UseRef2')}>5-1교시</button>
      <button onClick={() => navigate('/UseRef3')}>6교시</button>
      <button onClick={() => navigate('/UseMemo')}>6-1교시</button>
    </div>
  )
}
