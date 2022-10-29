import React from "react";
import img from "../../assets/brain.webp";
import img1 from "../../assets/alexey.gif";

import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="bg-gif">
        <img src={img} id="img" alt=""/>
        <img src={img1} id="img1" alt=""/>
      </div>
    </div>
  );
};

export default Hero;
