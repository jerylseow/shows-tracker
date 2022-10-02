import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://www.flaticon.com/free-icons/popcorn"
        title="popcorn icons"
      >
        Popcorn icons created by Freepik - Flaticon
      </a>
      <p style={{ display: "inline-block", float: "right" }}>
        Using the <a href="http://www.omdbapi.com/">OMDb API</a>
      </p>
    </footer>
  );
};

export default Footer;
