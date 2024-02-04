import React from "react";
import Logo from "./images/logo.svg";
import { Link } from "react-router-dom";
import burgerIcon from './images/icon-hamburger.svg'
import closeIcon from './images/icon-close.svg'

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
        <div onClick={()=>setOpen(!open)} className="burger">
        (
            //still working on this
            open === false ?

                <img src={burgerIcon} alt="burger icon" className="burger-icon"/> 
                <img src={closeIcon} alt="burger icon" className="burger-icon"/> 
          )
        </div>
        
      </nav>
    </header>
  );
}

export default Nav;
