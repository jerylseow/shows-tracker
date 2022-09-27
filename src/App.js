import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import ShowsTable from "./components/ShowsTable";
import ShowsForm from "./components/ShowsForm";
import ShowsDetailPanel from "./components/ShowsDetailPanel";

const API_KEY = "";

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
  const [title, setTitle] = useState("");
  const [showApiDetails, setShowApiDetails] = useState({});
  const [showsList, setShowsList] = useState(SHOWS_LIST);

  // TODO: fix async and setTimeout
  useEffect(() => {
    const fetchTimer = setTimeout(() => {
      console.log(title);
      fetch(
        "http://www.omdbapi.com/?t=" +
          title.split(" ").join("+") +
          "&apikey=" +
          API_KEY
      )
        .then((response) => response.json())
        .then((data) => {
          setShowApiDetails(data);
          console.log(showApiDetails);
        });
    }, 500);

    return () => clearTimeout(fetchTimer);
  }, [title]);

  const titleChangeHandler = (t) => {
    setTitle(t);
  };

  const addShowHandler = (showUserDetails) => {
    let showDetails = { ...showUserDetails, ...showApiDetails };
    setShowsList((prev) => [showDetails, ...prev]);
    console.log(showDetails);
  };

  return (
    <React.Fragment>
      <Header />
      <main>
        <button
          className="big-btn add-btn"
          onClick={() => setOpenForm((prev) => !prev)}
        >
          + Add New Show
        </button>
        {openForm && (
          <ShowsForm
            onTitleChange={titleChangeHandler}
            onAddShow={addShowHandler}
            showApiDetails={showApiDetails}
          />
        )}
        <ShowsTable showsList={showsList} />
        <ShowsDetailPanel showsList={showApiDetails} />
        <div></div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
