import React from "react";
import { useState, useEffect } from "react";
import "./styles/favorites.css";

function Favorite() {
  const [favorites, setFavorites] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedNotes, setUpdatedNotes] = useState("");
  const [editableNotes, setEditableNotes] = useState(new Set());

  useEffect(() => {
    fetch("http://localhost:9292/favorites")
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, []);

  function updatingNotes(updatedItem) {
    const updatedItems = favorites.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });
    setFavorites(updatedItems);
  }

  function handleFormEdit(event, id) {
    event.preventDefault();
    setIsEditing(false);
    fetch(`http://localhost:9292/favorites/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ notes: updatedNotes }),
    })
      .then((resp) => resp.json())
      .then((updatedItem) => updatingNotes(updatedItem));
  }

  function renderFavorites() {
    let card = favorites.map((plate) => {
      return (
        <div key={plate.id} className="card image-container">
          <img src={plate.image_url} className="photo" alt={plate.name} />
          <div className="card-body">
            <h5 className="title">{plate.name}</h5>
            <p className="item-text">{plate.description}</p>
            <p className="item-price">${plate.price}</p>
            <p className="item-text">Notes:{plate.notes}</p>
            {editableNotes.has(plate.id) && (
              <form
                onSubmit={(event) => {
                  handleFormEdit(event, plate.id);
                }}
              >
                <input
                  id="amount"
                  type="text"
                  placeholder="Add Notes Here"
                  name="notes"
                  onChange={(event) => setUpdatedNotes(event.target.value)}
                />

                <input type="submit" value="Save" />
              </form>
            )}
            <button
              className="btn delete-btn"
              onClick={() => deleteFromFav(plate.id)}
            >
              ❌
            </button>
            <button className="notes-btn"
              onClick={() => {
                if (editableNotes.has(plate.id)) {
                  editableNotes.delete(plate.id);
                } else {
                  editableNotes.add(plate.id);
                }

                setEditableNotes(new Set([...editableNotes]));
                setIsEditing(!isEditing);
              }}
            >
              Add Notes
            </button>
          </div>
        </div>
      );
    });
    return card;
  }
  function deleteFromFav(id) {
    fetch(`http://localhost:9292/favorites/${id}`, {
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
      <h1 className="favorites-title">Favorites</h1>
      <div className="d-flex flex-wrap menu-items">{renderFavorites()}</div>
    </div>
  );
}

export default Favorite;
