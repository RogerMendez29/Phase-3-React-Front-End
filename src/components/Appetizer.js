import React from "react";

function Appetizer({ appetizers }) {
  function renderCategory(category) {
    const card = category.map((plate) => {
      return (
        <div key={plate.name} className="card position-relative">
          <img
            src={plate.image_url}
            className="card-img-top"
            alt={plate.name}
          />
          <div className=" card-body">
            <h5 className="card-title">{plate.name}</h5>
            <p className="card-text">{plate.description}</p>
            <p className="card-text">${plate.price}</p>
            <button
              className="btn heart-btn"
              style={{ position: "absolute", top: "0", right: "0" }}
              onClick={() => addToFavorites(plate)}
            >
              ❤️
            </button>
          </div>
        </div>
      );
    });
    return card;
  }
  function addToFavorites(plate) {
    const itemData = {
      id: plate.id,
      name: plate.name,
      description: plate.description,
      image_url: plate.image_url,
      price: plate.price,
    };
    fetch("http://localhost:9292/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });
  }

  return (
    <div className="container d-flex flex-wrap">
      {renderCategory(appetizers)}
    </div>
  );
}

export default Appetizer;
