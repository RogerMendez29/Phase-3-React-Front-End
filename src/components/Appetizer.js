import React from "react";
import "./styles/appetizers.css";
import Menu_nav from "./menu_nav";

function Appetizer({
  categories,
  appetizers,
  category,
  pageInfo,
  renderCategory,
}) {
  return (
    <div>
      <Menu_nav categories={categories} />

      <div> {pageInfo(category)}</div>
      <div className="container d-flex flex-wrap menu-items">
        {renderCategory(appetizers)}
      </div>
    </div>
  );
}

export default Appetizer;
