import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="rnd-btn"></div>
      <NavLink
        style={{ color: "black" }}
        activeStyle={{
          color: "grey",
        }}
        to="/home"
        className="nav-link px-2  "
      >
        Home
      </NavLink>
      <NavLink
        style={{ color: "black" }}
        activeStyle={{
          color: "Grey",
        }}
        to="/menu"
        className="nav-link px-2  "
      >
        Menu
      </NavLink>
      <NavLink
        style={{ color: "black" }}
        activeStyle={{
          color: "grey",
        }}
        to="/favorites"
        className="nav-link px-2  "
      >
        Favorites
      </NavLink>
      <NavLink
        style={{ color: "black" }}
        activeStyle={{
          color: "grey",
        }}
        to="/contact"
        className="nav-link px-2  "
      >
        Contact Us
      </NavLink>
    </nav>
  );
}

export default Navbar;
