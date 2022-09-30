import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import ShowsTable from "./components/ShowsTable";
import ShowsForm from "./components/ShowsForm";
import ShowsDetailPanel from "./components/ShowsDetailPanel";

const SHOWS_LIST = [
  {
    title: "Fruits Basket",
    comments:
      "A typical shoujo anime at first glance, but the mystery quickly draws you in.",
    rating: 10,
    Plot: "An orphaned girl finds adventure, mystery and love as she interacts with the mysterious Soma family.",
  },
  {
    title: "The Witcher",
    comments: "Dark, gritty, exciting.",
    rating: 9,
    Plot: "Political stife, monster-slaying and destiny plague Geralt of Rivia.",
  },
];

const App = () => {
  const [openForm, setOpenForm] = useState(false);
  const [showApiDetails, setShowApiDetails] = useState({});
  const [showDetails, setShowDetails] = useState({});
  const [showsList, setShowsList] = useState(SHOWS_LIST);

  const fetchShowHandlerDelayed = (t) => {
    const fetchTimer = setTimeout(() => {
      fetchShowHandler(t);
    }, 1000);

    return () => clearTimeout(fetchTimer);
  };

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

  return (
    <div className="box">
      <Header className="header" />
      <div className="content">
        <button
          className="big-btn add-btn"
          onClick={() => setOpenForm((prev) => !prev)}
        >
          + Add New Show
        </button>
        <main className="main-content">
          {openForm && (
            <ShowsForm
              onTitleChange={fetchShowHandlerDelayed}
              onAddShow={addShowHandler}
            />
          )}
          <div className="main-content-table">
            {!openForm && (
              <ShowsTable
                showsList={showsList}
                onHoverShow={fetchShowHandler}
              />
            )}
          </div>
        </main>
        <aside className="aside-content">
          <ShowsDetailPanel show={showDetails} />
        </aside>
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default App;
