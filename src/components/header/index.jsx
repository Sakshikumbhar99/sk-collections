import React from "react";
import "../header/style.css";
import Nav from "../header/nav/nav.jsx";
// import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo_sakshi-removebg-preview.png";
const Header = () => {
  return (
    <header className="header">
      {/* <div className="logo"> */}
      <div to="/" className="logo">
        <img src={Logo} alt="logo"/>
      </div>
      {/* </div> */}
      <Nav />
      {/* <nav className="nav">
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/portfolio">PORTFOLIO</a></li>
            <li><a href="/blog">BLOG</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </nav> */}
    </header>
  );
};
export default Header;
