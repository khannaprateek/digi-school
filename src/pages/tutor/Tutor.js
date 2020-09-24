import React from "react";
import Accordian from "../../component/core/Accordian";

const Tutor = (props) => {
  const handleAddCourse = () => {
    props.history.push("/add-course");
  };

  const handleAddSchool = () => {
    props.history.push("/add-school");
  };

  return (
    <>
      <div>
        <button onClick={handleAddCourse}>Add Course</button>
        <button onClick={handleAddSchool}>Add School</button>
      </div>
      <Accordian />
    </>
  );
};

export default Tutor;
