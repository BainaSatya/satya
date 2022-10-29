import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <h1 className="heading">CONTACT US</h1>
      <section className="Contact">
        <form>
          <div className="field">
            <p>Name</p>
            <input type="text" placeholder="Enter your Name"/>
          </div>
          <div className="field" >
            <p>Email</p>
            <input type="email" placeholder="Enter your Email"/>
          </div>
          <div className="field">
            <p>Mobile</p>
            <input type="tel" placeholder="Enter your Number"/>
          </div>

          <div className="form-button">
            <button>Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
