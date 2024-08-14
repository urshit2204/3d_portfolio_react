import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
     <NavLink to='/' className='w-20 h-12 rounded-md bg-white items-center justify-center flex font-bold shadow-lg text-center'>
     <p className='blue-gradient_text'>3D<br />Portfolio</p>
     </NavLink>
     <nav className=" text-lg gap-7  w-80 h-12 rounded-md bg-white items-center justify-center flex font-bold shadow-lg text-center">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-black' : 'blue-gradient_text'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-black' : 'blue-gradient_text'}>
                Projects
            </NavLink>
            <NavLink to="/skills" className={({ isActive }) => isActive ? 'text-black' : 'blue-gradient_text'}>
                Skills
            </NavLink>
            </nav>
    </header>
  )
}

export default Navbar
