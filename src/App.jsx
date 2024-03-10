import React from 'react';
import './App.css';
import Login from './components/Login';
import { Link, NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;