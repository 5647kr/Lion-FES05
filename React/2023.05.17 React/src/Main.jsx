import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/UseMemo1')}>1교시</button>
      <button onClick={() => navigate('/UseMemo2')}>1-1교시</button>
      <button onClick={() => navigate('/MemoVsEffect1')}>2교시</button>
      <button onClick={() => navigate('/UseEffectFetch1')}>2-1교시</button>
      <button onClick={() => navigate('/UseEffectFetch2')}>3교시</button>
      <button onClick={() => navigate('/UseEffectFetch3')}>4교시</button>
      <button onClick={() => navigate('/UseEffectFetch4')}>5교시</button>
      <button onClick={() => navigate('/ContextAPI1')}>5-1교시</button>
      <button onClick={() => navigate('/ContextAPI2')}>6교시</button>
      <button onClick={() => navigate('/ContextAPI3')}>6-1교시</button>
      <button onClick={() => navigate('/UseContext')}>6-2교시</button>
    </div>
  )
}
