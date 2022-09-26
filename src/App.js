import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import ShowsTable from "./components/ShowsTable";
import ShowsForm from "./components/ShowsForm";

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

const App = () => {
  const [showsList, setShowsList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setShowsList([...SHOWS_LIST]);
  }, []);

  const toggleFormHandler = () => {
    setShowForm((prev) => !prev);
  };

  const addShowHandler = (newShow) => {
    setShowsList(prev => [newShow, ...prev])
  }

  return (
    <React.Fragment>
      <Header />
      <main>
        <button className="big-btn add-btn" onClick={toggleFormHandler}>
          + Add New Show
        </button>
        {showForm && <ShowsForm onAddShow={addShowHandler} />}
        <ShowsTable showsList={showsList} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
