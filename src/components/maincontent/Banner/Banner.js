import React from "react";
import Card1 from "../Card/Card1";
import "./Banner.css";

function Banner() {
  return (
    <div className="container mt-5">
      <div className="banner row mt-2">
        <div className="banner__search col-lg-5 col-md-10 col-10 offset-1">
          <h1 className="banner__title">
            Linkup with Creators <br />A new way to discover creators,
            influencers, or makers
          </h1>
          <div className="banner__find">
            <input
              className="banner__input"
              placeholder="Enter platform, keywords, niches or categories"
            ></input>
            <button className="bannerButton">Go</button>
          </div>
        </div>
        <div className="banner__card col-lg-5 col-md-10 col-10 offset-1">
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
      </div>
    </div>
  );
}

export default Banner;
