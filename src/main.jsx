import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Change from './components/Change.jsx';
import Login from './components/Login.jsx';
import AgentPage from './pages/AgentPage.jsx';
import ShdPage from './pages/ShdPage.jsx';

const router = createBrowserRouter([
  {
    path: "/mndpt-front",
    element: <App />,
    children: [
      {
        path: "/mndpt-front/change",
        element: <Change />,
      },
      {
        path: "/mndpt-front",
        element: <Login />,
      },
      {
        path: "/mndpt-front/agent",
        element: <AgentPage />,
      },
      {
        path: "/mndpt-front/shd",
        element: <ShdPage />,
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);

