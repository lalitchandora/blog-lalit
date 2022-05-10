import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';

import HomePage from './pages/Home';
import Nav from './shared/navbar';
import Create from './pages/Create';
import Edit from './pages/Edit';

function App() {
  return (
    <div className='app'>  
      <div className='nav-bar'>
        <Nav />
      </div>
      <div className='routes'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:blogId' element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
