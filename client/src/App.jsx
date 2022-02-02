import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Main from './pages/Main/Main';
import User from './pages/User/User';
import Auth from './pages/Auth/Auth';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<User />} />
          <Route path="/auth" element={<Auth type="auth" />} />
          <Route path="/registration" element={<Auth type="registration" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
