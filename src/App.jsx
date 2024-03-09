import React from 'react';
import './App.css';
import Login from './components/Login';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Login />
      <Outlet />
    </>
  );
}

export default App;