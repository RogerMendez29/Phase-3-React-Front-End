import React from "react";
import { useState, useEffect } from "react";

function Favorite() {
  const [favorite, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/favorites")
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, []);

  function renderFavorites() {
    let card = favorite.map((plate) => {
      return (
        <div key={plate.id} className="card">
          <img
            src={plate.image_url}
            className="card-img-top"
            alt={plate.name}
          />
          <div className="card-body">
            <h5 className="card-title">{plate.name}</h5>
            <p className="card-text">{plate.description}</p>
            <p className="card-text">${plate.price}</p>
            <button
              className="btn delete-btn"
              onClick={() => deleteFromFav(plate.id)}
            >
              ❌
            </button>
          </div>
        </div>
      );
    });
    return card;
  }
  function deleteFromFav(id) {
    fetch(` http://localhost:9292/favorites/${id}`, {
      method: "DELETE",
    }).then(() => {
      setFavorites((favorite) =>
        favorite.filter((fav) => {
          return fav.id !== id;
        })
      );
    });
  }

  return (
    <div className="container">
      <h1>Favorites</h1>
      <div className="d-flex flex-wrap">{renderFavorites()}</div>
    </div>
  );
}

export default Favorite;
