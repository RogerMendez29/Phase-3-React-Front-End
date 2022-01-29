import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/menu.css";

function Menu({ categories }) {
  function renderCategories(array) {
    const categorylink = array?.map((category) => {
      return (
        <NavLink
          key={category.id}
          style={{ color: "white" }}
          activeStyle={{
            color: "red",
          }}
          to={category.title}
          className="nav-link px-2 "
        >
          {category.title}s
        </NavLink>
      );
    });
    return categorylink;
  }

  return (
    <div className="menu-container">
      <div className=" menu-links">{renderCategories(categories)}</div>
    </div>
  );
}

export default Menu;
