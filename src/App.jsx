import { useState } from 'react'
import './App.css'
import About from './componnant/About/About.jsx'
import Home from './componnant/Home/Home.jsx'
import Conatct from './componnant/conatct/Conatct.jsx'
import LayOut from './componnant/LayOut/LayOut.jsx'
import Nav from './componnant/NavBar/Nav.jsx'
import NotFound from './componnant/NotFound/NotFound.jsx'
import Portfolio from './componnant/portfolio/Portfolio.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
let routers = createBrowserRouter([
  {
    path: '', element: <LayOut />, children: [
      { index: true, element: <Home />, },
      { path: 'about', element: <About />, },
      { path: 'portfolio', element: <Portfolio />, },
      { path: 'conatct', element: <Conatct />, },
      { path: '*', element: <NotFound />, },
    ]
  }
])










function App() {

  return (
    <>
<RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
