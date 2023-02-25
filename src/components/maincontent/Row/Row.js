import React from "react";
import { Link } from "react-router-dom";
import "./Row.css";
import data from "../Card/data";
import Card from "../Card/Card";

function Row(props) {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="rows">
      <h2 className="rows__heading">{props.heading}</h2>
      <p className="rows__description">{props.description}</p>
      <div className="rows__list">{cards}</div>
    </div>
  );
}

export default Row;
