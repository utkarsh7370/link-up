import React from "react";
import loading from "../../assets/loader.gif";
import "./Loader.css";
function Loader(props) {
  return (
    <div className="loader-container">
      <div className="spinner">
        <img src={loading} alt="loader" draggable={false} />
      </div>
    </div>
  );
}

export default Loader;
