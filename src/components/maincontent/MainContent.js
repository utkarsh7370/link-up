import React from "react";
import Nav from "./Nav/Nav";
import Banner from "./Banner/Banner";
import "./MainContent.css";
import CategoriesRow from "./Row/CategoriesRow";
import BrandsRow from "./Row/BrandsRow";

function MainContent() {
  return (
    <div>
      <Nav />
      <Banner />
      <BrandsRow />
      <CategoriesRow />
    </div>
  );
}

export default MainContent;
