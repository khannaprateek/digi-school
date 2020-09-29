import React from "react";
import "./accordian.css";

const Accordian = () => {
  return (
    <div className="accordian-container">
      <div className="tab">
        <input className="accord-input" type="checkbox" id="chck1" />
        <label className="tab-label" for="chck1">
          Course 1
        </label>
        <div className="tab-content">
          <button className="edit-course">Edit</button>
          <button className="edit-course">Publish/Unpublish</button>
        </div>
      </div>
      <div className="tab">
        <input className="accord-input" type="checkbox" id="chck2" />
        <label className="tab-label" for="chck2">
          Course 2
        </label>
        <div className="tab-content">
          <button className="edit-course">Edit</button>
          <button className="edit-course">Publish/Unpublish</button>
        </div>
      </div>
      <div className="tab">
        <input className="accord-input" type="checkbox" id="chck3" />
        <label className="tab-label" for="chck3">
          Course 3
        </label>
        <div className="tab-content">
          <button className="edit-course">Edit</button>
          <button className="edit-course">Publish/Unpublish</button>
        </div>
      </div>
      <div className="tab">
        <input className="accord-input" type="checkbox" id="chck4" />
        <label className="tab-label" for="chck4">
          Course 4
        </label>
        <div className="tab-content">
          <button className="edit-course">Edit</button>
          <button className="edit-course">Publish/Unpublish</button>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
