import React from "react";

const NotFound = (props) => {
  const handleClick = () => {
    props.history.replace("/home");
  };

  return (
    <div>
      <h1>Your are trying to access a url that doesn't exist</h1>
      <button onClick={handleClick}>Return to Home page</button>
    </div>
  );
};

export default NotFound;
