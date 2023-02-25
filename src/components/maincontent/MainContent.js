import React from "react";
import Nav from "./Nav/Nav";
import Banner from "./Banner/Banner";
import "./MainContent.css";
import CategoriesRow from "./Row/CategoriesRow";
import BrandsRow from "./Row/BrandsRow";
import FeatureList from "./Features/FeatureList";
import Footer from "./Footer/Footer";

function MainContent() {
  return (
    <div>
      <Nav />
      <Banner />
      <BrandsRow />
      <CategoriesRow />
      <FeatureList />
      <Footer />
    </div>
  );
}

export default MainContent;
