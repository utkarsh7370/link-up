import React, { useEffect, useRef, useState } from "react";
import "./Features.css";

function Features(props) {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef(null);
  const toggleAnimation = (e) => {
    if (e[0].isIntersecting) {
      setShowAnimation(true);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    const curr = ref.current;
    if (curr) {
      observer.observe(curr);
    }
    return () => {
      if (curr) {
        observer.unobserve(curr);
      }
    };
  });
  return (
    <div className="container color3">
      <div className="row">
        <div className="feature__text col-lg-6 col-md-12 col-12">
          <h2 className="feature__title color3">{props.title}</h2>
          <h1 className="feature__heading">{props.heading}</h1>
          <h5 className="feature__body">{props.body}</h5>
        </div>
        <div
          className={`non-mobile col-lg-6 col-md-12 col-10 offset-1 offset-lg-0 ${
            showAnimation ? "scale-in-bottom" : ""
          }`}
          ref={ref}
        >
          {showAnimation && (
            <img className="feature__image" src={props.image} alt="" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Features;
