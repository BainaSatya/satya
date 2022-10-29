import { React, useState } from "react";
import "./Training.css";
import img1 from "../../assets/t1.gif";
import img2 from "../../assets/t2.gif";
import img3 from "../../assets/manage-the-risks.gif";
import img4 from "../../assets/t29.gif";
import img5 from "../../assets/t5.gif";
import img6 from "../../assets/t6.gif";
import img7 from "../../assets/slider3.gif";
import img8 from "../../assets/t12.gif";

import video1 from "../../assets/video1.mp4";

const Training = () => {
  const [display, setDisplay]= useState(false);

  const handleClick = ()=>{

  setDisplay(!display);
    
  }

  return (
    <div className="training">
      <h1>TRAINING</h1>
      <div className="training-grid">
        <div className="training-img">
          <img src={img1} alt="" />
          <h1>figure-1</h1>
        </div>
        <div className="training-img">
          <img src={img2} alt="" />
          <h1>figure-2</h1>
        </div>
        <div className="training-img">
          <img src={img3} alt="" />
          <h1>figure-3</h1>
        </div>
        <div className="training-img">
          <img src={img4} alt="" />
          <h1>figure-4</h1>
        </div>
        <div className="training-img">
          <img src={img5} alt="" />
          <h1>figure-5</h1>
        </div>
        <div className="training-img">
          <img src={img6} alt="" />
          <h1>figure-6</h1>
        </div>
        <div className="training-img">
          <img src={img7} alt="" />
          <h1>figure-7</h1>
        </div>
        <div className="training-img">
          <img src={img8} alt="" />
          <h1>figure-8</h1>
        </div>
      </div>
      <h1>ARTIFICIAL INTELLIGENCE</h1>
      <div className="video-display">
        <div className="training-video">
        {!display &&  
          <video src={video1} controls pause className="AI-video" />}
         {!display && <button
            id="button1"
            onClick={handleClick}
          >
            PLAY
          </button>}
          {display &&  
          <video src={video1} controls autoPlay className="AI-video" />}
          {display &&
          <button
            id="button2"
            onClick={handleClick}
          >
            STOP
          </button>
          }
        </div>
      </div>
    </div>
  );
};

export default Training;
