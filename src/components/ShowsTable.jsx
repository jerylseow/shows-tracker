import React from "react";
import "./ShowsTable.css";

const SHOWS_LIST = [
  {
    title: "Fruits Basket",
    description:
      "An orphaned girl finds adventure, mystery and love as she interacts with the mysterious Soma family.",
    rating: 10,
  },
  {
    title: "The Witcher",
    description:
      "Political stife, monster-slaying and destiny plague Geralt of Rivia.",
    rating: 9,
  },
];

const ShowsTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {SHOWS_LIST.map((show) => {
          return (
            <tr key={show.title}>
              <td>{show.title}</td>
              <td>{show.description}</td>
              <td>{show.rating}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ShowsTable;
