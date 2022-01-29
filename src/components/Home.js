import { React, useState, useEffect } from "react";
import "./styles/home.css";

function Home({ special }) {
  function renderSpecial(special) {
    if (special) {
      return (
        <div>
          <h1 className="special_title">Special Of The Day</h1>

          <div key={special.name} className="card image-container">
            <img src={special.image_url} className="photo" alt={special.name} />
            <div className="card-body">
              <h5 className="title">{special.name}</h5>
              <p className="item-text">{special.description}</p>
              <p className="item-price">$6.99</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="home  container main-container">
      <div className="container special-container"></div>
      <div className="d-flex flex-wrap">{renderSpecial(special)}</div>
      {/* <h3 className="slogan">
        We Bring Family Tradition And Quality To Every Table We Serve. We
        Specialize in Both Cuban And Spanish Style Cuisine.
      </h3> */}
    </div>
  );
}

export default Home;
