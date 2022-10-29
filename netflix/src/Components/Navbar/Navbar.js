import { React } from "react";
import "./Navbar.css";
import logo from "../../assets/Navbar/netflix.png";
import globe from "../../assets/Navbar/globe.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="nav-logo">
          <img src={logo} alt=""/>
        </div>  
        <div className="nav-links">
        <div className="nav-lang-translate">
          <img src={globe} id="nav-globe" alt=""/>
          <div id="translate" className="language"></div>
        </div>

        <div className="sign-in">
          <Link to="/sign">
            <button>Sign In</button>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
