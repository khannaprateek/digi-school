import React from "react";
import Accordian from "../../component/core/Accordian";
import { useHistory } from "react-router-dom";

import "./admin.css";

const Tutor = (props) => {
  const history = useHistory();
  const handleAddCourse = () => {
    history.push("/add-course");
  };

  const handleAddSchool = () => {
    history.push("/add-school");
  };

  return (
    <>
      <div>
        <button className="add-course-btn" onClick={handleAddCourse}>
          Add Course
        </button>
        <button className="add-school-btn" onClick={handleAddSchool}>
          Add School
        </button>
      </div>
      <Accordian />
    </>
  );
};

export default Tutor;
