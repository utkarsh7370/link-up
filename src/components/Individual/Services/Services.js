import React from "react";
import "./Services.css";
function Services() {
  return <div className="wrapper"></div>;
}
function Card(props) {
  return (
    <div className="influencer__card">
      <div className="influencer__card__body">
        <img src={props.img} class="influencer__card__image" />
        <h2 className="influencer__card__title">{props.title}</h2>
        <p className="influencer__card__description">{props.description}</p>
      </div>
      <button className="influencer__card__btn">View Recipe</button>
    </div>
  );
}

export default Services;
