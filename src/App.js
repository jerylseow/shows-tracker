import React, { useState } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import ShowsTable from "./components/ShowsTable";
import ShowsForm from "./components/ShowsForm";
import ShowsDetailPanel from "./components/ShowsDetailPanel";
import NavPanel from "./components/UI/NavPanel";

const SHOWS_LIST = [
  {
    Title: "Fruits Basket",
    comments:
      "A typical shoujo anime at first glance, but the mystery quickly draws you in.",
    rating: 10,
    Plot: "An orphaned girl finds adventure, mystery and love as she interacts with the mysterious Soma family.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTYyYmFkMGMtN2YwNi00MDVjLWFmNWUtMTRjYWNhZmY4NGI0XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg",
  },
  {
    Title: "The Witcher",
    comments: "Dark, gritty, exciting.",
    rating: 9,
    Plot: "Political stife, monster-slaying and destiny plague Geralt of Rivia.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
  },
];

const App = () => {
  const [openPanel, setOpenPanel] = useState("ShowsTable");
  const [showApiDetails, setShowApiDetails] = useState({});
  const [showDetails, setShowDetails] = useState({});
  const [showsList, setShowsList] = useState(SHOWS_LIST);

  const fetchShowHandler = (t) => {
    fetch(
      "http://www.omdbapi.com/?t=" +
        t.split(" ").join("+") +
        "&apikey=" +
        process.env.REACT_APP_OMDB_KEY
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShowApiDetails(data);
        setShowDetails(data);
      });
  };

  const addShowHandler = (showUserDetails) => {
    let combined = { ...showUserDetails, ...showApiDetails };
    setShowsList((prev) => [combined, ...prev]);
    console.log(showDetails);
  };

  const hoverShowHandler = (t) => {
    let tDetails = showsList.find((s) => s.Title === t);
    setShowDetails(tDetails);
  };

  const clickPanelHandler = (p) => {
    setOpenPanel(p);
  };

  return (
    <div className="box">
      <Header />
      <div className="content">
        <nav className="nav-content">
          <NavPanel onClickPanel={clickPanelHandler} />
        </nav>
        <main className="main-content">
          {openPanel === "ShowsTable" && (
            <div className="main-content-table">
              <ShowsTable
                showsList={showsList}
                onHoverShow={hoverShowHandler}
              />
            </div>
          )}
          {openPanel === "ShowsForm" && (
            <div className="main-content-form">
              <ShowsForm
                onTitleChange={fetchShowHandler}
                onAddShow={addShowHandler}
              />
            </div>
          )}
        </main>
        <aside className="aside-content">
          <ShowsDetailPanel show={showDetails} />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default App;
