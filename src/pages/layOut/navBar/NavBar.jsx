import { NavLink } from "react-router-dom"

import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="NavBar d-flex gap-4 my-1">
        <NavLink to='/' className='fw-bold text-dark'>Home</NavLink>
        <NavLink to='rooms' className='fw-bold text-dark'>Rooms</NavLink>
    </nav>
  )
}

export default NavBar