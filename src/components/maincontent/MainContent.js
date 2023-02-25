import React from "react";
import Nav from "./Nav/Nav";
import Banner from "./Banner/Banner";
import "./MainContent.css";
import CategoriesRow from "./Row/CategoriesRow";
import BrandsRow from "./Row/BrandsRow";
<<<<<<< HEAD
import FeatureList from "./Features/FeatureList";
=======
import Footer from "./Footer/Footer"
>>>>>>> c2113b94dffa4b147eb839149fd72af9cc56f0d8

function MainContent() {
  return (
    <div>
      <Nav />
      <Banner />
      <BrandsRow />
      <CategoriesRow />
      <FeatureList />
      <Footer/>
    </div>
  );
}

export default MainContent;
