import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main.jsx'; //.jsx는 생략가능
import NodeIntro from './1st Class/NodeIntro.jsx';
import InstallReact from './2nd Class/InstallReact.jsx';
import JSX1 from './3rd Class/JSX1.jsx';
import JSX2 from './4th Class/JSX2.jsx';
import JSX3 from './5th Class/JSX3.jsx';
import JSX4 from './6th Class/JSX4.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/NodeIntro' element={<NodeIntro />} />
        <Route path='/InstallReact' element={<InstallReact />} />
        <Route path='/JSX1' element={<JSX1 />} />
        <Route path='/JSX2' element={<JSX2 />} />
        <Route path='/JSX3' element={<JSX3 />} />
        <Route path='/JSX4' element={<JSX4 />} />
      </Routes> 
    </Router>
  );
}

export default App;
