import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/root';
import NewNote from './routes/NewNote';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/new',
    element: <NewNote />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
