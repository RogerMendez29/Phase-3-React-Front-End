import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/cafe_logo.jpg";
import "./styles/nav.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <NavLink className="navbar-brand logo" to="/home">
          <a href="">
            <img className="logo-image" src={logo} />
          </a>
        </NavLink>

        <NavLink
          style={{ color: "white" }}
          activeStyle={{
            color: "red",
          }}
          to="/home"
          className="nav-link px-2  "
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
