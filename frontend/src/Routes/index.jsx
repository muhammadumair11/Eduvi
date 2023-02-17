import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../Layouts/DefaultLayout';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import Home from '../Pages/Home/Home';
import HighSchool from '../Pages/Home/LessonSection/HighSchool';
import College from '../Pages/Home/LessonSection/College';
import KinderGarten from '../Pages/Home/LessonSection/KinderGarten';


const router = createBrowserRouter([
      {
        path: '/',
        element: <DefaultLayout />,
        children: [
          {
            path: "/", 
            element: <Home/>,
            children: [
              {path: "/", element: <HighSchool/>},
              {path: "/college", element: <College/>},
              {path: "/kindergarten", element: <KinderGarten/>},
            ]
          },
          {path: "login", element: <Login/>},
          {path: "register", element: <Register/>},
  
        ]
      },
    ])

export default router;