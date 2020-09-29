import React from "react";
import { useDispatch } from "react-redux";
import { addSchool } from "../../store/actions";
import "./addschool.css";
const AddSchool = () => {
  const dispatch = useDispatch();
  const addschool = (schoolData) => dispatch(addSchool(schoolData));

  let schoolData = {};

  const onChangeHandler = (property, value) => {
    schoolData = {
      ...schoolData,
      [property]: value,
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(schoolData);
    addschool(schoolData);
  };

  return (
    <div>
      <form
        className="form-container"
        onSubmit={(event) => handleSubmit(event)}
      >
        <label>School Name</label>
        <input
          className=".input-fields"
          type="text"
          name="name"
          placeholder="Name of the School?"
          onChange={(event) => {
            onChangeHandler(event.target.name, event.target.value);
          }}
        />
        <label>Address</label>
        <textarea
          className=".input-fields"
          name="address"
          placeholder="School Address"
          onChange={(event) => {
            onChangeHandler(event.target.name, event.target.value);
          }}
        />
        <input
          type="number"
          name="zip-code"
          placeholder="Zip Code"
          onChange={(event) => {
            onChangeHandler(event.target.name, event.target.value);
          }}
        />
        <button>Add School</button>
      </form>
    </div>
  );
};

export default AddSchool;
