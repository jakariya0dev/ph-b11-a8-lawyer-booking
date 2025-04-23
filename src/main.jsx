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


const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      children: [
        {
          index: true,
          path: "/",
          loader: () => fetch('public/lawyers-data.json'),
          Component: Home,
        },
        {
          path: "profile/:id",
          Component: Profile,
        },
        {
          loader: () => fetch('/lawyers-data.json'),
          path: "booking",
          element: <Booking />,
        },
        {
          path: "blogs",
          element: <Blogs />,
          loader: () => fetch('/blogs-data.json'),
        },
        {
          path: "*",
          element: <Error />
        }
      ],
    },
    {
      path: "*",
      element: <Error />
    }
  ]
);

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>
)
