import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="navbarContainer"></div>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/urlshort">
            <li></li>
          </NavLink>
          <NavLink>
            <li></li>
          </NavLink>
          <NavLink>
            <li></li>
          </NavLink>
          <NavLink>
            <li></li>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

