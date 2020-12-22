import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.module.css";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to="#" className="brand-logo left" style={{fontFamily:'Grand Hotel,cursive'}}>
          Task
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/residents">Residents</Link>
          </li>
          <li>
            <Link to="/films">Films</Link>
          </li>

          <li>
            <Link to="/">Planets</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
