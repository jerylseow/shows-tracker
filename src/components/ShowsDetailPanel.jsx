import React from "react";
import "./ShowsDetailPanel.css";

const ShowsDetailPanel = (props) => {
  return (
    <React.Fragment>
      <div className="show-poster">
        <img
          className="poster"
          src={props.showsList.Poster}
          alt={props.showsList.Title}
        />
      </div>
      <div className="show-description">{props.showsList.Plot}</div>
    </React.Fragment>
  );
};

export default ShowsDetailPanel;
