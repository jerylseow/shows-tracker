import React from "react";
import "./NavPanel.css";

const NavPanel = (props) => {
  return (
    <div className="nav-panel">
      <button
        className="nav-btn"
        onClick={() => props.onClickPanel("ShowsTable")}
      >
        My Shows
      </button>
      <button
        className="nav-btn add-btn"
        onClick={() => props.onClickPanel("ShowsForm")}
      >
        + Add New Show
      </button>
      <button className="nav-btn">Edit Show</button>
    </div>
  );
};

export default NavPanel;
