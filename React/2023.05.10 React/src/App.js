import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';

import ComponentList1 from './1st Class/ComponentList1';
import ComponentList2 from './2nd Class/ComponentList2';
import ComponentList3 from './3rd Class/ComponentList3';
import Counter from './4th Class/Counter';
import Rendering from './5th Class/Rendering';
import LoginForm from './6th Class/LoginForm';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/ComponentList1' element={<ComponentList1 />} />
        <Route path='/ComponentList2' element={<ComponentList2 />} />
        <Route path='/ComponentList3' element={<ComponentList3 />} />
        <Route path='/Counter' element={<Counter />} />
        <Route path='/Rendering' element={<Rendering />} />
        <Route path='/LoginForm' element={<LoginForm />} />
      </Routes>
    </Router>
  );
}
export default App;
