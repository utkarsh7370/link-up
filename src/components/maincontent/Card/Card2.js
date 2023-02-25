import { React, useState } from "react";
import "./card2.css";
import img1 from "../images/1.jpg";

function Card2(props) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      className={hovered ? "cards2__Hovered" : "cards2"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cards2image__container">
        <div className="cards2__name">Fashion</div>
        <img className="cards2__image" src={img1} alt="cards-image" />
      </div>
    </div>
  );
}

export default Card2;
