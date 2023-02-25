import React from "react";
import Features from "./Features";
import featuredata from "./featuredata";
import image2 from "../images/11.png";
import image3 from "../images/22.png";
import image4 from "../images/3.png";

function FeatureList() {
  const images = [image2, image3, image4];
  const data = featuredata.map((item) => {
    return <Features key={item.id} {...item} image={images[item.id - 1]} />;
  });
  return <div class>{data}</div>;
}

export default FeatureList;
