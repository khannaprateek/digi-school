import React from "react";
import "./addschool.css";
const AddSchool = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <form
        className="form-container"
        onSubmit={(event) => event.preventDefault()}
        method="POST"
      >
        <label>School Name</label>
        <input
          className=".input-fields"
          type="text"
          name="Course-Title"
          placeholder="Name of the School?"
        />
        <label>Address</label>
        <textarea
          className=".input-fields"
          name="School-address"
          placeholder="School Address"
        />
        <input type="number" name="zip-code" placeholder="Zip Code" />
        <button onClick={() => handleSubmit()}>Add Course</button>
      </form>
    </div>
  );
};

export default AddSchool;
