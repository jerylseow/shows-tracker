import React from "react";
import "./Header.css";
import icon from "../../images/popcorn.png";

const Header = (props) => {
  return (
    <header>
      <img className="header-icon" src={icon} alt="" />
      <h1 className="header-title">Shows Tracker App</h1>
    </header>
  );
};

export default Header;
