import React from "react";
import { connect } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  const location = useLocation();
  const history = useHistory();

  const handleLogOut = () => {
    history.replace("/home");
    props.logOut();
  };
  console.log(props.user.name);
  return (
    <div className="header">
      <span className="header-title">DIGI SCHOOL</span>
      <div className="nav">
        {location.pathname !== "/home" && (
          <Link className="nav-link" to="/home">
            Home
          </Link>
        )}
        {!props.isAuth ? (
          location.pathname !== "/login" && (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          )
        ) : (
          <div className="drop-down">
            <div className="drop-btn">{props.user.name}</div>
            <div className="dropdown-content">
              <Link className="drop-link" to="/profile/courses">
                My Courses
              </Link>
              <Link className="drop-link" to="/profile">
                Profile
              </Link>
              <button onClick={handleLogOut} className="logout-btn">
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch({ type: "LOGOUT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
