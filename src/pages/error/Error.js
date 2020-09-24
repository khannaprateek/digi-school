import React from "react";

const Error = (props) => {
  const handleClick = () => {
    props.history.replace("/home");
  };
  return (
    <div>
      <h1>An error has occured</h1>
      <button onClick={handleClick}>Return to Home page</button>
    </div>
  );
};

export default Error;
