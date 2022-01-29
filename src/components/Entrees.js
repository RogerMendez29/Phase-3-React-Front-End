import React from "react";

function Entree({ entrees, special, pageInfo, category }) {
  function renderCategory(category) {
    const card = category.map((plate) => {
      if (plate.id !== special.id) {
        return (
          <div key={plate.id} className="card image-container">
            <img src={plate.image_url} className="photo" alt={plate.name} />
            <div className=" card-body">
              <h5 className="title">{plate.name}</h5>
              <p className="item-text">{plate.description}</p>
              <p className="item-price">${plate.price}</p>
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
      } else {
        return null;
      }
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
      category_id: plate.category_id,
    };
    console.log(plate);

    fetch("http://localhost:9292/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });
  }
  return (
    <div>
      <div>{pageInfo(category)}</div>
      <div className="container d-flex flex-wrap menu-items">
        {renderCategory(entrees)}
      </div>
    </div>
  );
}

export default Entree;
