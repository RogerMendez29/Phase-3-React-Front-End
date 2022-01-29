import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/cafe_logo.jpg";
import "./styles/nav.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="  nav-content container-fluid">
        <NavLink className="navbar-brand logo" to="/home">
          <img className="logo-image" src={logo} />
          <h2 className="name">Cafe Masaryktown</h2>
        </NavLink>

        <NavLink
          style={{ color: "white" }}
          activeStyle={{
            color: "red",
          }}
          className="nav-link"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          style={{ color: "white" }}
          activeStyle={{
            color: "red",
          }}
          to="/Menu"
          className="nav-link px-2  "
        >
          Menu
        </NavLink>

        <NavLink
          style={{ color: "white" }}
          activeStyle={{
            color: "red",
          }}
          to="/favorites"
          className="nav-link px-2  "
        >
          Favorites
        </NavLink>
        <NavLink
          style={{ color: "white" }}
          activeStyle={{
            color: "red",
          }}
          to="/contact"
          className="nav-link px-2  "
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
