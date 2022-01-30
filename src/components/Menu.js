import React from "react";
import "./styles/menu.css";
import Menu_nav from "./menu_nav";

function Menu({ categories, renderCategory, popular }) {
  return (
    <div className="menu-container">
      <div>
        <Menu_nav categories={categories} />

        <h1 className="popular-title">Most Popular</h1>
      </div>
      <div className="container d-flex flex-wrap menu-items">
        {renderCategory(popular)}
      </div>
    </div>
  );
}

export default Menu;
