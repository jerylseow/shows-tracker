import React from "react";
import "./ShowsDetailPanel.css";

const ShowsDetailPanel = (props) => {
  return (
    <React.Fragment>
      <div className="show-poster">
        <img
          className="poster"
          src={props.show.Poster}
          alt={props.show.Title}
          width="50%"
          height="auto"
        />
      </div>
      <div className="show-description">{props.show.Plot}</div>
    </React.Fragment>
  );
};

export default ShowsDetailPanel;
