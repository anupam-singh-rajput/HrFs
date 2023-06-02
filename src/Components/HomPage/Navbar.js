import React, {useState} from "react";
import {Link} from "react-router-dom"
import './Navbar.css'

function Navbar() {

    const [isMobile, setIsMobile] = useState(false);

  return (

    <nav className="navbar">
        <Link to="" className="logo">
        <h3 className="">HrFs</h3>
        </Link>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
        >
            <Link to="" className="home">
                <li>Home</li>
            </Link>
            <Link to="host" className="host">
                <li>Host</li>
            </Link>
            <Link to="rent" className="rent">
                <li>Rent</li>
            </Link>
            <Link to="about" className="about">
                <li>About</li>
            </Link>
            <Link to="signup" className="signup">
                <li>Signup</li>
            </Link>
        </ul>
        <button className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
        >
            {isMobile ? <i className="fas fa-times"></i>: <i className="fas fa-bars"></i>}
        </button>
    </nav>
  )
}

export default Navbar