import React, { useState } from "react";
import img2 from "../../assets/facescan.gif";
import img3 from '../../assets/faceman.gif';

import "../About/About.css";
const About = () => {

  const [img, setImg]= useState(false);

  const handleClick = ()=>{

  setImg(!img);
    
  }

  return (
    <div>
      <div className="content">
        <h1>ARTIFICIAL INTELLIGENCE</h1>
{!img &&         <img src={img2} className="face1" alt=""/>
}
      </div>
      <div className="about-gif">
        {img && <img src={img3} className="face" alt=""/>
        
}
        <div>
        {!img &&  <button className="face-btn" onClick={handleClick}>Face Recognition</button>}
        {img &&  <button className="face-btn" onClick={handleClick}>DONE</button>}
        </div>
      </div>
    </div>
  );
};

export default About;
