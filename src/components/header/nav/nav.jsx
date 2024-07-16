import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenu, CgCloseR } from "react-icons/cg";
import "../nav/nav.css"; // Import the CSS file

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className={openMenu ? "menuIcon active" : "menuIcon"}>
      <ul className="navbar-list">
        <li>
          <NavLink
            className="navbar-link"
            onClick={() => setOpenMenu(false)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            onClick={() => setOpenMenu(false)}
            to="/portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            onClick={() => setOpenMenu(false)}
            to="#"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            onClick={() => setOpenMenu(false)}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            onClick={() => setOpenMenu(false)}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      {/* //nav icon */}
      <div className="mobile-navbar-btn">
        <CgMenu
          name="menu-outline"
          className="open-outline mobile-nav-icon"
          onClick={() => setOpenMenu(true)}
        />
        <CgCloseR
          name="close-outline"
          className="close-outline mobile-nav-icon"
          onClick={() => setOpenMenu(false)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
