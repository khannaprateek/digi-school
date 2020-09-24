import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CourseList from "../../pages/home/courseList/CourseList";
import Login from "../../pages/logIn/Login";
import SignUp from "../../pages/signUp/signUp";
import Profile from "../../pages/profile/Profile";
import MyCourses from "../../pages/profile/myCourses/MyCourses";
import NotFound from "../../pages/notFound/NotFound";
import AddCourse from "../../pages/addCourse/AddCourse";
import AddSchool from "../../pages/addSchool/AddSchool";
import Tutor from "../../pages/tutor/Tutor";
import Error from "../../pages/error/Error";
import "./approute.css";

const AppRoute = ({ props }) => {
  return (
    <>
      <Switch>
        <Route path="/home" component={CourseList} />
        <Route path="/add-course" component={AddCourse} />
        <Route path="/add-school" component={AddSchool} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile/courses" component={MyCourses} />
        <Route path="/profile" component={Profile} />
        <Route path="/tutor" component={Tutor} />
        <Route path="/error" component={Error} />
        <Redirect exact from="/" to="/home" />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default AppRoute;
