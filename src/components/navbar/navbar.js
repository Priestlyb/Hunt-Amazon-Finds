import React from 'react';
import "./navbar.css"
import { Link } from "react-router-dom"
import logo from './logo-transparent.png'

function navbar() {
  return (
    <div className='navbar-dark bg-light'  id='navbar'>

      <nav className="navbar navbar-expand-md navbar-primary bg-light">
        <Link className="navbar-brand" href="#">
          <img src={logo} alt="" width="150px" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav" Style="margin-left: auto;">
            <li className="nav-item">
              <Link className="nav-link active disabled">See the Face You Love Light Up With Hunt amazon finds Products</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default navbar