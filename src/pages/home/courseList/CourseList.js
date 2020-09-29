import React, { useState, useEffect } from "react";
import Course from "./course/Course";
import Pagination from "../../../component/pagination/Pagination";
import { fetch } from "../../../store/actions";
import { connect } from "react-redux";
import "./courseList.css";

const CourseList = (props) => {
  const { courses } = props;
  const [coursesPerPage] = useState(6);
  const [currentPage, setcurrentPage] = useState(1);
  const indexOfLastPost = currentPage * coursesPerPage;
  const indexOfFirstPost = indexOfLastPost - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    props.fetchData(`courses`);
  }, []);

  const paginate = (pageNum) => setcurrentPage(pageNum);

  return (
    <div className="container">
      <div className="course-list">
        {currentCourses.map((course) => (
          <Course
            key={course.id}
            id={course.id}
            name={course.title}
            desc={course.description}
            img={course.img}
          />
        ))}
      </div>
      <div>
        <Pagination
          coursePerPage={coursesPerPage}
          totalCourses={props.courses.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    courses: state.courseList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (endpoint) => dispatch(fetch(endpoint)),

    setLoading: (value) => dispatch({ type: "SET-LOADING", val: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
