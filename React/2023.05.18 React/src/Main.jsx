import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/LifeCycle1')}>1교시</button>
      <button onClick={() => navigate('/LazyInitialize1')}>1-1교시</button>
      <button onClick={() => navigate('/LazyInitialize2')}>2교시</button>
      <button onClick={() => navigate('/HookFlow1')}>2-1교시</button>
      <button onClick={() => navigate('/UseEffect1')}>3교시</button>
      <button onClick={() => navigate('/UseLayoutEffect1')}>3-1교시</button>
      <button onClick={() => navigate('/CustomHook1')}>3-2교시</button>
      <button onClick={() => navigate('/CustomHook2')}>4교시</button>
      <button onClick={() => navigate('/CustomHook3')}>4-1교시</button>
      <button onClick={() => navigate('/CustomHook4')}>5교시</button>
      <button onClick={() => navigate('/CustomHook5')}>5교시 결과</button>
      <button onClick={() => navigate('/CustomHook6')}>6교시</button>
      <button onClick={() => navigate('/CustomHook7')}>6교시 결과</button>
    </div>
  )
}
