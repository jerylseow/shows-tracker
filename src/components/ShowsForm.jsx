import React, { useState, useEffect } from "react";
import "./ShowsForm.css";

const DEFAULT_FORM_STATE = {
  title: "",
  comments: "",
  rating: "",
};

const ShowsForm = (props) => {
  const [showUserDetails, setShowUserDetails] = useState(DEFAULT_FORM_STATE);
  const [title, setTitle] = useState("");
  const fetchHandler = props.onTitleChange;

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchHandler(title);
    }, 1000);

    return () => clearTimeout(timer);
  }, [title, fetchHandler]);

  const formChangeHandler = (e) => {
    if (e.target.name === "title") setTitle(e.target.value);
    setShowUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddShow(showUserDetails);
    setShowUserDetails(DEFAULT_FORM_STATE);
    console.log("Form submitted");
  };

  return (
    <div className="form-card">
      <form className="shows-form" onSubmit={submitHandler}>
        <label>
          <h3>Title:</h3>
          <input
            className="text-field"
            name="title"
            type="text"
            value={showUserDetails.title}
            onChange={formChangeHandler}
          />
        </label>
        <label>
          <h3>Comments:</h3>
          <textarea
            className="text-area"
            name="comments"
            value={showUserDetails.comments}
            onChange={formChangeHandler}
          />
        </label>
        <label>
          <h3>Rating:</h3>
          <select
            className="select"
            name="rating"
            value={showUserDetails.rating}
            onChange={formChangeHandler}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ShowsForm;
