import React from "react";
import Features from "./Features";
import featuredata from "./featuredata";
import image2 from "../images/11.png";
import image3 from "../images/22.png";
import image4 from "../images/3.png";
import image5 from "../images/4.png";
import Features1 from "./Features1";

function FeatureList() {
  const images = [image2, image3, image4, image5];
  const data = featuredata.map((item) => {
    if (item.id % 2)
      return <Features key={item.id} {...item} image={images[item.id - 1]} />;
    else
      return <Features1 key={item.id} {...item} image={images[item.id - 1]} />;
  });
  return <div className="color3">{data}</div>;
}

export default FeatureList;
