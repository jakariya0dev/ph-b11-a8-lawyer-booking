import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Booking from './pages/Booking.jsx';
import Blogs from './pages/Blogs.jsx';
import ErrorPage from './pages/ErrorPage.jsx';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          path: "/",
          loader: () => fetch('lawyers-data.json'),
          element: <Home />,
        },
        {
          path: "profile/:id",
          element: <Profile />,
        },
        {
          loader: () => fetch('lawyers-data.json'),
          path: "booking",
          element: <Booking />,
        },
        {
          path: "blogs",
          element: <Blogs />,
          loader: () => fetch('blogs-data.json'),
        },
        {
          path: "profile/*",
          element: <div className='w-10/12 mx-auto'>404</div>,
        },
      ],
    },
  ]
);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
