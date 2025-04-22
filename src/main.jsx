import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root.jsx';
import Home from './pages/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <div>error</div>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch('public/lawyers-data.json'),
        Component: Home,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
