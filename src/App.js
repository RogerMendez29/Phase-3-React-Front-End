import { React, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorite from "./components/Favorites";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact_us";
import Appetizer from "./components/Appetizer";
import Entrees from "./components/Entrees";
import Desserts from "./components/Desserts";

import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [appetizers, setAppetizers] = useState([]);
  const [entrees, setEntrees] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [special, setSpecial] = useState({});
  const [categories, setCategory] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/specials`)
      .then((res) => res.json())
      .then((data) => {
        setSpecial(data);
      });

    fetch(`http://localhost:9292/category_items`)
      .then((res) => res.json())
      .then((data) => {
        setAppetizers(data[0].items);
        setEntrees(data[1].items);
        setDesserts(data[2].items);
      });
    fetch("http://localhost:9292/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
    fetch("http://localhost:9292/popular")
      .then((res) => res.json())
      .then((data) => {
        setPopular(data);
      });
  }, []);

  function renderCategory(category) {
    const card = category.map((plate) => {
      if (plate.id !== special.id && plate.availability) {
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

  function retriveFromFavorites(favorites) {

    addToFavorites(favorites)
    
  }
  function addToFavorites(plate,favorites) {
    console.log(favorites);
    
    const itemData = {
      id: plate.id,
      name: plate.name,
      description: plate.description,
      image_url: plate.image_url,
      price: plate.price,
      category_id: plate.category_id,
    };

    fetch("http://localhost:9292/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });
  }

  function renderCategory_info(category) {
    if (category) {
      return (
        <div className="app_info">
          <h1>{category.title}s</h1>
          <h3>{category.description}</h3>
        </div>
      );
    }
  }

  return (
    <>
      <Switch>
        <Route path="/contact">
          <div className="page-body">
            <Navbar />
            <Contact />
          </div>
          <Footer />
        </Route>
        <Route path="/favorites">
          <div className="page-body">
            <Navbar />
            <Favorite retriveFromFavorites={retriveFromFavorites} />
          </div>
          <Footer />
        </Route>
        <Route path="/menu">
          <div className="page-body">
            <Navbar />
            <Menu
              categories={categories}
              popular={popular}
              renderCategory={renderCategory}
            />
          </div>
          <Footer />
        </Route>

        <Route path="/Appetizer">
          <div className="page-body">
            <Navbar />
            <Appetizer
              categories={categories}
              renderCategory={renderCategory}
              appetizers={appetizers}
              category={categories[0]}
              pageInfo={renderCategory_info}
            />
          </div>
          <Footer />
        </Route>
        <Route path="/Entree">
          <div className="page-body">
            <Navbar />
            <Entrees
              categories={categories}
              renderCategory={renderCategory}
              entrees={entrees}
              category={categories[1]}
              pageInfo={renderCategory_info}
            />
          </div>
          <Footer />
        </Route>
        <Route path="/Dessert">
          <div className="page-body">
            <Navbar />
            <Desserts
              categories={categories}
              renderCategory={renderCategory}
              desserts={desserts}
              category={categories[2]}
              pageInfo={renderCategory_info}
            />
          </div>
          <Footer />
        </Route>

        <Route path="/">
          <div className="page-body">
            <Navbar />
            <Home special={special} />
          </div>
          <Footer />
        </Route>
      </Switch>
    </>
  );
}

export default App;
