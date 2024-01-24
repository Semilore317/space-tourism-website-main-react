import React from "react";
import Logo from "./images/logo.svg";
import { Link } from "react-router-dom";
import burgerIcon from './images/icon-hamburger.svg'

function Nav() {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul>
          <li>
            <Link to='/'>00 Home</Link>
          </li>

          <li>
            <Link to='/destination'>01 Destination</Link>
          </li>

          <li>
            <Link to='/crew'>02 Crew</Link>
          </li>

          <li>
            <Link to='/technology'>03 Technology</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
