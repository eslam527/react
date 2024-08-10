import React from 'react'
import Nav from '../NavBar/Nav.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'

export default function LayOut() {
  return (<>
      <Nav/>
      <Outlet></Outlet>

      <Footer/>
      </>
  )
}
