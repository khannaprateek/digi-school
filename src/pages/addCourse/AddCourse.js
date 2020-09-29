import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCourse } from "../../store/actions";
import "./addcourse.css";

const AddCourse = () => {
  const dispatch = useDispatch();
  const [course, setcourse] = useState({});
  const onChangeHandler = (property, value) => {
    setcourse({
      ...course,
      [property]: value,
    });
  };

  const addcourse = (courseData) => dispatch(addCourse(courseData));
  const handlePublish = (course) => {
    console.log(course);
    addcourse(course);
  };

  return (
    <div>
      <form
        className="addcourse-form"
        onSubmit={(event) => event.preventDefault()}
        method="POST"
      >
        <input
          className="course-title"
          type="text"
          name="title"
          placeholder="Title of the course"
          onChange={(event) =>
            onChangeHandler(event.target.name, event.target.value)
          }
        />
        <textarea
          className="course-desc"
          name="description"
          placeholder="What is this course about..."
          onChange={(event) =>
            onChangeHandler(event.target.name, event.target.value)
          }
        />
        <label>Start Time </label>
        <input
          clasName="start-time"
          name="start"
          type="time"
          onChange={(event) =>
            onChangeHandler(event.target.name, event.target.value)
          }
        />
        <label>End Time </label>
        <input
          clasName="class-time"
          name="end"
          type="time"
          onChange={(event) =>
            onChangeHandler(event.target.name, event.target.value)
          }
        />
        <span className="age-range">
          <input
            type="number"
            name="min"
            placeholder="Min Age"
            onChange={(event) =>
              onChangeHandler(event.target.name, event.target.value)
            }
          />
          <input
            type="number"
            name="max"
            placeholder="Max Age"
            onChange={(event) =>
              onChangeHandler(event.target.name, event.target.value)
            }
          />
        </span>
        <label>School</label>
        <select
          name="school"
          value="School 5"
          onChange={(event) =>
            onChangeHandler(event.target.name, event.target.value)
          }
        >
          <option value="School 1">School 1</option>
          <option value="School 2">School 2</option>
          <option value="School 3">School 3</option>
          <option value="School 4">School 4</option>
          <option value="School 5">School 5</option>
        </select>
        <label>Location</label>
        <select
          name="location"
          onChange={(event) =>
            onChangeHandler(event.target.name, event.target.value)
          }
        >
          <option value="New York">New York</option>
          <option value="California">California</option>
          <option value="New Jersy">New Jersy</option>
          <option selectedvalue="San-franshico">San-franshico</option>
        </select>
        <button onClick={() => handlePublish(course)}>Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
