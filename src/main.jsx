import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Root from './routes/root.jsx'
import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Lab from './components/Lab';
import Read from './components/Read';
import Module2 from './components/Module2';
import Module1 from './components/Module1';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: 'labs/',
        element: <Lab />
      },
      {
        path: 'read',
        element: <Read />,
        children: [
          {
            path: 'module1',
            element: <Module1/>
          },
          {
            path: 'module2',
            element: <Module2 />
          }
        ]
      },
    ],
  },
  {
    path: "labs/",
    element: <Lab />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
