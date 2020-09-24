import React, { useState, useEffect } from "react";
import Course from "./course/Course";
import Pagination from "../../../component/pagination/Pagination";
import { fetch } from "../../../store/actions";
import { connect } from "react-redux";
import axios from "axios";
import "./courseList.css";

const CourseList = (props) => {
  const [coursesPerPage] = useState(6);
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      props.setLoading(false);
      const coursesData = await axios.get(
        "https://5f5f24e1df620f00163e5464.mockapi.io/classes"
      );
      props.fetchCourse(coursesData.data);
      console.log("State Updated");
    };

    fetchData();
  }, []);

  const indexOfLastPost = currentPage * coursesPerPage;
  const indexOfFirstPost = indexOfLastPost - coursesPerPage;
  const currentCourses = props.courses.slice(indexOfFirstPost, indexOfLastPost);

  console.log(currentPage, indexOfFirstPost, indexOfLastPost);

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
            img={course.image}
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
    fetchCourse: (courses) => dispatch(fetch(courses)),
    setLoading: (value) => dispatch({ type: "SET-LOADING", val: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
