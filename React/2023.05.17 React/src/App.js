import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import UseMemo1 from './1st Class/UseMemo1';
import UseMemo2 from './1st Class/UseMemo2';
import MemoVsEffect1 from './2nd Class/MemoVsEffect1';
import UseEffectFetch1 from './2nd Class/UseEffectFetch1';
import UseEffectFetch2 from './3rd Class/UseEffectFetch2';
import UseEffectFetch3 from './4th Class/UseEffectFetch3';
import UseEffectFetch4 from './5th Class/UseEffectFetch4';
import ContextAPI1 from './5th Class/ContextAPI1';
import ContextAPI2 from './6th Class/ContextAPI2';
import ContextAPI3 from './6th Class/ContextAPI3';
import UseContext from './6th Class/UseContext';








function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/UseMemo1' element={<UseMemo1 />} />
        <Route path='/UseMemo2' element={<UseMemo2 />} />
        <Route path='/MemoVsEffect1' element={<MemoVsEffect1 />} />
        <Route path='/UseEffectFetch1' element={<UseEffectFetch1 />} />
        <Route path='/UseEffectFetch2' element={<UseEffectFetch2 />} />
        <Route path='/UseEffectFetch3' element={<UseEffectFetch3 />} />
        <Route path='/UseEffectFetch4' element={<UseEffectFetch4 />} />
        <Route path='/ContextAPI1' element={<ContextAPI1 />} />
        <Route path='/ContextAPI2' element={<ContextAPI2 />} />
        <Route path='/ContextAPI3' element={<ContextAPI3 />} />
        <Route path='/UseContext' element={<UseContext />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
