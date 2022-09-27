import React from "react";
import "./ShowsTable.css";

const ShowsTable = (props) => {
  return (
    <table className="shows-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Comments</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {props.showsList.map((show) => {
          return (
            <tr key={show.title}>
              <td>{show.title}</td>
              <td>{show.comments}</td>
              <td>{show.rating}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ShowsTable;
