import React from "react";
import Nav from "./Nav/Nav";
import Banner from "./Banner/Banner";
import "./MainContent.css";
import CategoriesRow from "./Row/CategoriesRow";
import BrandsRow from "./Row/BrandsRow";
import FeatureList from "./Features/FeatureList";

function MainContent() {
  return (
    <div>
      <Nav />
      <Banner />
      <BrandsRow />
      <CategoriesRow />
      <FeatureList />
    </div>
  );
}

export default MainContent;
