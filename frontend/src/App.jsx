import React from 'react'
import { RouterProvider } from 'react-router-dom'
import CustomRoutes from './Routes'
import router from './Routes/index';

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App