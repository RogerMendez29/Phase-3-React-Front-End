import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/menu.css";

function Menu({ appetizers, entrees, desserts }) {
  return (
    <div className="container">
      <NavLink
        style={{ color: "white" }}
        activeStyle={{
          color: "red",
        }}
        to="/appetizer"
        className="nav-link px-2  "
      >
        Appetizers
      </NavLink>
      <NavLink
        style={{ color: "white" }}
        activeStyle={{
          color: "red",
        }}
        to="/entrees"
        className="nav-link px-2  "
      >
        Entrees
      </NavLink>
      <NavLink
        style={{ color: "white" }}
        activeStyle={{
          color: "red",
        }}
        to="/desserts"
        className="nav-link px-2  "
      >
        Desserts
      </NavLink>
    </div>
  );
}

export default Menu;
