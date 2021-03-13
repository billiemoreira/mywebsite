import React from 'react'
import { Link } from 'react-router-dom'

export default function Links() {
  return (
    <>
      <Link to="/" className="navbar-item">
        Projects
      </Link>

      <Link to="/about" className="navbar-item">
        About Me
      </Link>

      <a href="mailto:bilianemoreira@gmail.com" className="navbar-item">
        Contact
      </a>
    </>
  )
}
