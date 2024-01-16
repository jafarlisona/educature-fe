import React from 'react'
import "./index.scss";
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
 const navigate= useNavigate()
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src="https://preview.colorlib.com/theme/educature/img/logo.png" alt="" onClick={()=>navigate("/")}/>
        </div>
        <div className="pages">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/addPage">Add</NavLink>
          <Link to="#">Blog</Link>
          <Link to="#">About</Link>
          <Link to="#">Pages</Link>
          <Link to="#">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar