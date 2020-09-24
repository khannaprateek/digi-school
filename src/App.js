import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/header/Header";
import AppRoutes from "./component/appRoutes/AppRoutes";
import Loader from "./component/loader/Loader";

import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Header />
        {props.isLoading ? <Loader /> : <AppRoutes />}
      </Router>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};
// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(App);
