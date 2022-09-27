import React, { useState } from "react";
import "./ShowsForm.css";

const DEFAULT_FORM_STATE = {
  title: "",
  comments: "",
  rating: "",
};

const ShowsForm = (props) => {
  const [showUserDetails, setShowUserDetails] = useState(DEFAULT_FORM_STATE);

  const formChangeHandler = (e) => {
    if (e.target.name === "title") props.onTitleChange(e.target.value);
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
      <form onSubmit={submitHandler}>
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
          <input
            className="text-field"
            name="comments"
            type="text"
            value={showUserDetails.comments}
            onChange={formChangeHandler}
          />
        </label>
        <label>
          <h3>Rating:</h3>
          <input
            className="text-field"
            name="rating"
            type="text"
            value={showUserDetails.rating}
            onChange={formChangeHandler}
          />
        </label>
        <input className="big-btn submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ShowsForm;
