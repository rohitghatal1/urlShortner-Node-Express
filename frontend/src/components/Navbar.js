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
            <li>Url Shortner</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

