import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Fragments1 from './1st Class/Fragments1';
import Fragments2 from './2nd Class/Fragments2';
import CreateComponent1 from './2nd Class/CreateComponent1';
import CreateComponent2 from './3rd Class/CreateComponent2';

import UseStateHook1 from './4th Class/UseStateHook1';
import UseStateHook2 from './5th Class/UseStateHook2';
import Mood from './6th Class/Mood';
import MoodApp from './7th Class/MoodApp';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Fragments1' element={<Fragments1 />} />
        <Route path='/Fragments2' element={<Fragments2 />} />
        <Route path='/CreateComponent1' element={<CreateComponent1 />} />
        <Route path='/CreateComponent2' element={<CreateComponent2 />} />
        <Route path='/UseStateHook1' element={<UseStateHook1 />} />
        <Route path='/UseStateHook2' element={<UseStateHook2/>} />
        <Route path='/Mood' element={<Mood />} />
        <Route path='/MoodApp' element={<MoodApp />} />
      </Routes>
    </Router>
  );
}
export default App;
