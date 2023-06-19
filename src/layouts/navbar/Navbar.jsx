import React from "react";
import "./navbar.css";
import logo from "../../assets/inventory.png";
import admin from "../../assets/administrator.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-main">
        <header>
          <img src={logo} alt={logo} />
          <h1>SSI-Managament System</h1>
        </header>
        <div className="navbar-link">
          <img src={admin} alt={admin} />
          <a href="/">ADMIN</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
