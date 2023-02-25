import React from "react";
import { Link } from "react-router-dom";
import "./Row.css";
import data from "../Card/data";
import data3 from "../Card/data3";
import Card from "../Card/Card";

function FeaturesRow(props) {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="rows">
      <h2 className="rows__heading"></h2>
      <p className="rows__description">
        Hire top influencers across all platforms
      </p>
      <div className="rows__list">{cards}</div>
    </div>
  );
}

export default FeaturesRow;
