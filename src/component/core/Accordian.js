import React from "react";
import "./accordian.css";

const Accordian = () => {
  return (
    <div className="accordian-container">
      <ul className="accordian">
        <input type="radio" />
        <button className="edit-btn">Edit</button>

        <input type="radio" />
        <button className="edit-btn">Edit</button>

        <input type="radio" />
        <button className="edit-btn">Edit</button>

        <input type="radio" />
        <button className="edit-btn">Edit</button>

        <input type="radio" />
        <button className="edit-btn">Edit</button>
      </ul>
    </div>
  );
};

export default Accordian;
