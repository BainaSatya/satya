import React from "react";
import "../AI/AI.css";
import aiImg from "../../assets/AI_gif.gif";

const AI = () => {
  return (
    <div className="ai">
      <div className="ai-img">
        <img src={aiImg} alt=""/>
      </div>
      <div className="ai-content">
        <div className="intro">
          <h1>Introduction of AI</h1>
          <p>
            Artificial intelligence allows machines to replicate the
            capabilities of the human mind. From the development of self-driving
            cars to the proliferation of smart assistants like Siri and Alexa,
            AI is a growing part of everyday life. As a result, many tech
            companies across various industries are investing in artificially
            intelligent technologies.
          </p>
        </div>
        <div className="what">
          <h3>WHAT IS ARTIFICIAL INTELLIGENCE</h3>
          <p>
            Artificial intelligence is a wide-ranging branch of computer science
            concerned with building smart machines capable of performing tasks
            that typically require human intelligence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AI;
