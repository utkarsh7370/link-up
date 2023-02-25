import React from "react";
import "./Individual.css";
import Influencer from "./Influencer/Influencer";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import SocialLinks from "./Socials/Socials";

function Individual() {
  return (
    <div>
      <Influencer />
      <Services />
      <Testimonial />
      <SocialLinks />
    </div>
  );
}

export default Individual;
