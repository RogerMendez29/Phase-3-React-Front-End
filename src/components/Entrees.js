import React from "react";
import Menu_nav from "./menu_nav";


function Entree({ categories, entrees, pageInfo, category, renderCategory }) {
  return (
    <div>
      <Menu_nav categories={categories} />

      <div>{pageInfo(category)}</div>
      <div className="container d-flex flex-wrap menu-items">
        {renderCategory(entrees)}
      </div>
    </div>
  );
}

export default Entree;
