import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Card.css";
import img1 from "../images/1.jpg";

function Card(props) {
  const handleClick = () => {
    window.location = "/individual";
    console.log("Button clicked!");
  };

  return (
    <div className="cards__layout" onClick={handleClick}>
      <div className="cards">
        <div className="cardsimage__container">
          <div className="cards__name">{props.name}</div>
          <div className="cards__location">{props.location}</div>
          <img className="cards__image" src={img1} alt="cards-image" />
        </div>
      </div>
      <div className="cards__details">
        <div className="cards__flex">
          <div className="cards__platform">{props.platform}</div>
          <div className="cards__price">{props.price}</div>
        </div>
        <div className="cards__description">{props.description}</div>
      </div>
    </div>
  );
}

export default Card;
