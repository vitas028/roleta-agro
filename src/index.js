import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from 'react-router-dom';

import PaginaPerguntas from './pages/PaginaPerguntas';
import App from './pages/App';
import RespostaCerta from './pages/RespostaCerta';
import RespostaErrada from './pages/RespostaErrada';

const router = createHashRouter(
  [
    { path: '/', element: <App /> },
    { path: '/:tema', element: <PaginaPerguntas /> },
    { path: '/correct', element: <RespostaCerta /> },
    { path: '/incorrect', element: <RespostaErrada /> },
  ],
  { basename: '/' }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
