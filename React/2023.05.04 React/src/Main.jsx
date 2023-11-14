import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/NodeIntro')}>1교시</button>
      <button onClick={() => navigate('InstallReact')}>2교시</button>
      <button onClick={() => navigate('JSX1')}>3교시</button>
      <button onClick={() => navigate('/JSX2')}>4교시</button>
      <button onClick={() => navigate('/JSX3')}>5교시</button>
      <button onClick={() => navigate('/JSX4')}>6교시</button>
    </div>
  );
}
