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
// import "bootstrap.bundle.min.js";

import "./App.css";

function App() {
  const [appetizers, setAppetizers] = useState([]);
  const [entrees, setEntrees] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [special, setSpecial] = useState({});
  const [categories, setCategory] = useState([]);

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
  }, []);
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
            <Favorite />
          </div>
          <Footer />
        </Route>
        <Route path="/menu">
          <div className="page-body">
            <Navbar />
            <Menu categories={categories} />
          </div>
          <Footer />
        </Route>

        <Route path="/Appetizer">
          <div className="page-body">
            <Navbar />
            {/* <Menu /> */}
            <Appetizer
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
            <Menu />
            <Entrees
              entrees={entrees}
              special={special}
              category={categories[1]}
              pageInfo={renderCategory_info}
            />
          </div>
          <Footer />
        </Route>
        <Route path="/Dessert">
          <div className="page-body">
            <Navbar />
            {/* <Menu /> */}
            <Desserts
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
