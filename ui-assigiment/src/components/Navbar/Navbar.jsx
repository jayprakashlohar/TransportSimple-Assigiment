import React from "react";
import logo from "./siteLogo.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logoImage">
          <img src={logo} alt="" />
        </div>
        <div className="navElement">
          <p>Home</p>
          <p style={{ color: "#5E57E2" }}>Feature</p>
          <p>Industry</p>
          <p>About</p>
          <p>Contact Us</p>
        </div>
        <div className="btnDiv">
          <button className="demoBtn">Get Demo</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
