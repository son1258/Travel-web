import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './routers';
import { RouterProvider } from 'react-router';

export default function App(){
  return(
    <RouterProvider router={router} />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

