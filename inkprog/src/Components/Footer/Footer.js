import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="input">
        <h1>How can we help ?</h1>
        <input type="text" placeholder="Help me find something"></input>
        <button>Search</button>
      </div>
    </div>
  );
};

export default Footer;
