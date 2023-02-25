import { React, useState } from "react";
import "./Card1.css";
import img1 from "../images/1.jpg";

function Card1(props) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      className={hovered ? "cards1__Hovered" : "cards1"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="cards1__image" src={img1} alt="cards-image" />
    </div>
  );
}

export default Card1;
