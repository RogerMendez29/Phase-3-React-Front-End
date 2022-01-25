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

// import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js"

import "./App.css";

function App() {
  const [appetizers, setAppetizers] = useState([]);
  const [entrees, setEntrees] = useState([]);
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/categories`)
      .then((res) => res.json())
      .then((data) => {
        setAppetizers(data[0].items);
        setEntrees(data[1].items);
        setDesserts(data[2].items);
      });
  }, []);

  return (
    <>
      <Switch>
        <Route path="/contact">
          <Navbar />
          <Contact />
        </Route>
        <Route path="/favorites">
          <Navbar />
          <Favorite />
        </Route>
        <Route path="/menu">
          <Navbar />
          <Menu appetizers={appetizers} entrees={entrees} desserts={desserts} />
        </Route>

        <Route path="/appetizer">
          <Navbar />
          <Menu />
          <Appetizer appetizers={appetizers} />
        </Route>
        <Route path="/entrees">
          <Navbar />
          <Menu />
          <Entrees entrees={entrees} />
        </Route>
        <Route path="/desserts">
          <Navbar />
          <Menu />
          <Desserts desserts={desserts} />
        </Route>

        <Route path="/">
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
