import React, { useState } from "react";
import Form from "./Form";
import Story from "./Story";

const Madlibs = () => {
  const [words, setWords] = useState();
  const add = (fillInTheBlanks) => {
    setWords(fillInTheBlanks);
  };
  const reset = () => setWords(null);

  return (
    <div>
      {words ? (
        <div>
          <Story props={words} /> <button onClick={reset}>New Madlib</button>
        </div>
      ) : (
        <Form fillInTheBlanks={add} />
      )}
    </div>
  );
};

export default Madlibs;
