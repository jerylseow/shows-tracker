import React, { useState } from "react";
import "./ShowsForm.css";

const DEFAULT_FORM_STATE = {
  title: "",
  description: "",
  rating: "",
};

const ShowsForm = (props) => {
  const [formState, setFormState] = useState(DEFAULT_FORM_STATE);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddShow(formState);
    setFormState(DEFAULT_FORM_STATE);
    console.log("Form submitted");
  };

  return (
    <div className="form-card">
      <form onSubmit={submitHandler}>
        <label>
          <h3>Title:</h3>
          <input
            className="text-field"
            type="text"
            value={formState.title}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </label>
        <label>
          <h3>Description:</h3>
          <input
            className="text-field"
            type="text"
            value={formState.description}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </label>
        <label>
          <h3>Rating:</h3>
          <input
            className="text-field"
            type="text"
            value={formState.rating}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, rating: e.target.value }))
            }
          />
        </label>
        <input className="big-btn submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ShowsForm;
