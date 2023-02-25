import React from "react";
import { Link } from "react-router-dom";
import data3 from "../Card/data3";
import Row from "./Row";

function BrandsRow(props) {
  const rows = data3.map((item) => {
    return <Row key={item.id} {...item} />;
  });

  return <div>{rows}</div>;
}

export default BrandsRow;
