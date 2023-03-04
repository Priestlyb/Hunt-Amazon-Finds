import React, { useContext } from 'react';
import "./navbar.css"
import { Link } from "react-router-dom"
import logo from './logo-transparent.png'
import { Context } from "../../context/Context";

function Navbar() {

  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className='navbar-dark bg-light' id='navbar'>

      <nav className="navbar navbar-expand-md navbar-primary bg-light">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" width="150px" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav" Style="margin-left: auto;">

            <li className="nav-item">
              <Link className="nav-link active disabled">
                See the Face You Love Light Up With Hunt amazon finds Products
              </Link>
            </li>

            <li className="nav-item">
              <div className="nav_link nav-link active">
                <a href='https://www.tiktok.com/@huntamazonfinds' target='blank' className='tiktok_icon'><i class="fa-brands fa-tiktok"></i></a>  <a href='https://www.instagram.com/huntamazonfinds/' target='blank' className='instagram_icon'><i class="fa-brands fa-instagram"></i></a>
              </div>
            </li>


            <a href='./admin' className="nav-item active  nav-link">{user && "Admin"}
            </a>

            <li className="nav-item active  nav-link logout_btn" onClick={handleLogout}>{user && "Logout"}
            </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;