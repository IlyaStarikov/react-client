import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Main from './pages/Main/Main';
import User from './pages/User/User';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
