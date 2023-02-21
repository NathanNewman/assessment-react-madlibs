import React from "react";
import "./Story.css";

const Story = (props) => {
  console.log(props.props.noun);
  const noun = props.props.noun;
  const noun2 = props.props.noun2;
  const adjective = props.props.adjective;
  const color = props.props.color;
  return (
    <div>
      <p>
        There was a {color} {noun} that loved a {adjective} {noun2}.
      </p>
    </div>
  );
};

export default Story;
