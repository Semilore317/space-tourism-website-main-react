import React from "react";
import Logo from "./images/logo.svg";
import { Link } from "react-router-dom";
import burgerIcon from './images/icon-hamburger.svg'

function Nav() {

    const[open, setOpen] = React.useState(false); 
    //redacted

  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul>
          <li className="active">
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
        <img src={burgerIcon} alt="burger icon" className="burger-icon"/>
      </nav>
    </header>
  );
}

export default Nav;
