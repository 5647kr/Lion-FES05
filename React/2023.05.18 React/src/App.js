import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import LifeCycle1 from './1st Class/LifeCycle1';
import LazyInitialize1 from './1st Class/LazyInitialize1';
import LazyInitialize2 from './2nd Class/LazyInitialize2';
import HookFlow1 from './2nd Class/HookFlow1';
import UseEffect1 from './3rd Class/UseEffect1';
import UseLayoutEffect1 from './3rd Class/UseLayoutEffect1';
import CustomHook1 from './3rd Class/CustomHook1';
import CustomHook2 from './4th Class/CustomHook2';
import CustomHook3 from './4th Class/CustomHook3';
import CustomHook4 from './5th Class/CustomHook4';
import CustomHook5 from './5th Class/CustomHook5';
import CustomHook6 from './6th Class/CustomHook6';
import CustomHook7 from './6th Class/CustomHook7';







function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/LifeCycle1' element={<LifeCycle1 />} />
        <Route path='/LazyInitialize1' element={<LazyInitialize1 />} />
        <Route path='/LazyInitialize2' element={<LazyInitialize2 />} />
        <Route path='/HookFlow1' element={<HookFlow1 />} />
        <Route path='/UseEffect1' element={<UseEffect1 />} />
        <Route path='/UseLayoutEffect1' element={<UseLayoutEffect1 />} />
        <Route path='/CustomHook1' element={<CustomHook1 />} />
        <Route path='/CustomHook2' element={<CustomHook2 />} />
        <Route path='/CustomHook3' element={<CustomHook3 />} />
        <Route path='/CustomHook4' element={<CustomHook4 />} />
        <Route path='/CustomHook5' element={<CustomHook5 />} />
        <Route path='/CustomHook6' element={<CustomHook6 />} />
        <Route path='/CustomHook7' element={<CustomHook7 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
