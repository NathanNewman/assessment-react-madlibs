import React, { useState } from "react";
import "./Form.css";
import uuid from "uuid/v1";

const Form = ({ fillInTheBlanks }) => {
  const INITIAL_STATE = { noun: "", noun2: "", adjective: "", color: "" };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const gatherInput = (evt) => {
    evt.preventDefault();
    fillInTheBlanks({ ...formData, id: uuid() });
    setFormData({ noun: "", noun2: "", adjective: "", color: "" });
  };
  return (
    <div>
      <form onSubmit={gatherInput}>
        <div>
        <label htmlFor="noun">Noun: </label>
        <input
          onChange={handleChange}
          type="text"
          name="noun"
          value={formData.noun}
        />
        </div>
        <div>
          <label htmlFor="noun2">Noun: </label>
        <input
          onChange={handleChange}
          type="text"
          name="noun2"
          value={formData.noun2}
        />
        </div>
        <div>
          <label htmlFor="adjective">Adjective: </label>
        <input
          onChange={handleChange}
          type="text"
          name="adjective"
          value={formData.adjective}
        />
        </div>
        <div>
          <label htmlFor="color">Color: </label>
        <input
          onChange={handleChange}
          type="text"
          name="color"
          value={formData.color}
        />
        </div>
        <div>
        <button id="newMadlibButton">Submit Madlib!</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
