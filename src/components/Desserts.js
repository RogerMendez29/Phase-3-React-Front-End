import React from "react";
import Menu_nav from "./menu_nav";

function Desserts({
  categories,
  desserts,
  pageInfo,
  category,
  renderCategory,
}) {
  return (
    <div>
      <Menu_nav categories={categories} />

      <div> {pageInfo(category)}</div>
      <div className="container d-flex flex-wrap menu-items">
        {renderCategory(desserts)}
      </div>
    </div>
  );
}

export default Desserts;
