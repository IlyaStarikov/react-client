import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Main from './pages/Main/Main';
import User from './pages/User/User';
import Auth from './pages/Auth/Auth';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<User type="profile" />} />
        <Route path="/users/:id" element={<User type="user" />} />
        <Route path="/auth" element={<Auth type="login" />} />
        <Route path="/registration" element={<Auth type="registration" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
