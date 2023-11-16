import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import ReactEvent1 from './1st Class/ReactEvent1';
import ReactEvent2 from './2nd Class/ReactEvent2';
import ReactEvent3 from './3rd Class/ReactEvent3';
import ComponentList from './3rd Class/ComponentList';
// import BasicHook1 from './4th Class/BasicHook1';
// import BasicHook2 from './5th Class/BasicHook2';
// import Mood from './6th Class/Mood';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/ReactEvent1' element={<ReactEvent1 />} />
        <Route path='/ReactEvent2' element={<ReactEvent2 />} />
        <Route path='/ReactEvent3' element={<ReactEvent3 />} />
        <Route path='/ComponentList' element={<ComponentList />} />
        {/* <Route path='/BasicHook1' element={<BasicHook1 />} />
        <Route path='/BasicHook2' element={<BasicHook2/>} />
        <Route path='/Mood' element={<Mood />} /> */}
      </Routes>
    </Router>
  );
}
export default App;
