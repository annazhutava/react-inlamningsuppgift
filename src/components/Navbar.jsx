import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/second" className="nav-link">
              #2
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/third" className="nav-link">
              #3
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;