import { React, useState, useEffect } from "react";
import "./styles/home.css";

function Home() {
  const [special, setSpecial] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/specials`)
      .then((res) => res.json())
      .then((data) => {
        setSpecial(data);
      });
  }, []);

  function renderSpecials() {
    let card = special.map((plate) => {
      return (
        <div key={plate.name} className="card">
          <img
            src={plate.image_url}
            className="card-img-top"
            alt={plate.name}
          />
          <div className="card-body card">
            <h5 className="card-title">{plate.name}</h5>
            <p className="card-text">{plate.description}</p>
            <p className="card-text">${plate.price}</p>
          </div>
        </div>
      );
    });
    return card;
  }

  return (
    <div className="container main-container">
      <div className="container picture-container"></div>
      <h1>Daily Specials</h1>
      <div className="d-flex flex-wrap">{renderSpecials()}</div>
    </div>
  );
}

export default Home;
