import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';

import Exam1 from './1st Class/Exam1';
import Exam2 from './2nd Class/Exam2';
import Exam3 from './3rd Class/Exam3';
import ReactEvent1 from './4th Class/ReactEvent1';
import ReactEvent2 from './5th Class/ReactEvent2';
import ReactEvent3 from  './6th Class/ReactEvent3';
import ComponentList from './6th Class/ComponentList'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Exam1' element={<Exam1 />} />
        <Route path='/Exam2' element={<Exam2 />} />
        <Route path='/Exam3' element={<Exam3 />} />
        <Route path='/ReactEvent1' element={<ReactEvent1 />} />
        <Route path='/ReactEvent2' element={<ReactEvent2 />} />
        <Route path='/ReactEvent3' element={<ReactEvent3 />} />
        <Route path='/ComponentList' element={<ComponentList />} />
      </Routes>
    </Router>
  );
}
export default App;
