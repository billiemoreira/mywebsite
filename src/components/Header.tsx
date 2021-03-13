import React from 'react'

import logo from '../assets/logo.png'
import Links from './UI/Links'

export default function Header() {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <nav className="navbar mt-4" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} width="55" alt="logo" />
        </a>

        <span
          role="button"
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setIsActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <Links />
        </div>
      </div>
    </nav>
  )
}
