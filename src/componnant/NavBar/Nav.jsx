import React from 'react'
import style from './nav.module.css'
import { Link, NavLink } from 'react-router-dom'
import About from '../About/About.jsx'
import Portfolio from '../portfolio/Portfolio.jsx'
import Conatct from '../conatct/Conatct.jsx'
export default function Nav() {
  function toggleMenue() {

    const links = document.querySelector(`.links`);
    links.classList.toggle('sm:hidden');
    links.classList.toggle('flex');


  }
  return (<>
    <nav className={`${style.nav} p-6 md:fixed top-0 left-0 right-0 capitalize z-30 scroll-m-2`}>
      <div className="container flex flex-col md:flex-row mx-auto">
        <div className="name w-10/12 max-h-max md:w-4/12 justify-between  items-center flex ">
          <Link href="#" className='text-white hover:text-black text-xl md:text-4xl '>Start Framework </Link>
          <i className="fa-solid fa-bars fa-2xl cursor-pointer md:hidden " onClick={toggleMenue}></i>
        </div>
        <div className=" w-8/12 flex flex-col md:flex-row md:items-center justify-center mt-4">
          <ul className=" links sm:hidden md:flex links flex-col links md:flex-row justify-center md:space-x-10">
            <li className='py-3'>
              <NavLink className='text-white hover:text-white text-2xl' to='about'>About</NavLink>

            </li>
            <li className='py-3'>          <NavLink className='text-white hover:text-white text-2xl' to='portfolio'>Portfolio</NavLink>
            </li>
            <li className='py-3'>          <NavLink className='text-white hover:text-white text-2xl' to='conatct'>Conatct</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}


