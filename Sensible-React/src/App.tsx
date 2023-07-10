// import { useState } from 'react'
import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'

import Form from './features/Form/Form';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Form formName="Sample"/></>,
  },
]);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
