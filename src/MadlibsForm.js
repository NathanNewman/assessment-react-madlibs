import React, { useState } from "react";

const MadlibsForm = () => {
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
    createBox({ ...formData, id: uuid() });
    setFormData({ noun: "", noun2: "", adjective: "", color: "" });
  };
  return (
    <div>
      <form onSubmit={gatherInput}>
        <label htmlFor="noun">Noun: </label>
        <input
          onChange={handleChange}
          type="text"
          name="noun"
          value={formData.noun}
        />
        <input
          onChange={handleChange}
          type="text"
          name="noun2"
          value={formData.noun2}
        />
        <input
          onChange={handleChange}
          type="text"
          name="adjective"
          value={formData.adjective}
        />
        <input
          onChange={handleChange}
          type="text"
          name="color"
          value={formData.color}
        />
        <button id="newMadlibButton">
          Submit Madlib!
        </button>
      </form>
    </div>
  );
};

export default MadlibsForm;
