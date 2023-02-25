import React from "react";
import { Link } from "react-router-dom";
import "./Row.css";
import data2 from "../Card/data2";
import Card2 from "../Card/Card2";

function CategoriesRow() {
  const cards = data2.map((item) => {
    return <Card2 key={item.id} {...item} />;
  });

  return (
    <div className="rows">
      <h2 className="rows__heading">Categories</h2>
      <div className="rows__list">{cards}</div>
    </div>
  );
}

export default CategoriesRow;
