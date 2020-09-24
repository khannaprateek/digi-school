/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./course.css";
import { connect } from "react-redux";

const course = (props) => {
  const { id, name, desc, img, isAdmin, isAuth, dispatchJoin } = props;
  const courseStyle = {
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    overflow: "hidden",
    height: "30em",
    width: "22em",
    margin: "1rem 0",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.26)",
    transition: "all 3s ease",
    borderRadius: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const history = useHistory();

  const handleDelete = async () => {
    //   const resp = axios.delete(
    //     `https://5f5f24e1df620f00163e5464.mockapi.io/classes/${id}`
    //   );
    //   console.log(resp.data);
  };
  const handleJoin = async () => {
    isAuth ? dispatchJoin() : history.push("/login");
  };

  return (
    <div style={courseStyle}>
      <div className="wrapper">
        <div className="header">
          <ul className="menu-content">
            <li>&#9733;</li>
            <li>&#9733;</li>
            <li>&#9733;</li>
            <li>&#9733;</li>
            <li>&#9733;</li>
          </ul>
        </div>
        <div className="data">
          <div className="content">
            <h1>{name}</h1>
            <p className="text">{desc}</p>
            <button className="btn">Read more</button>
            {isAdmin && (
              <button onClick={handleDelete} className="cancel">
                X
              </button>
            )}
            <button onClick={handleJoin} className="btn-join">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAdmin: state.isAdmin,
    isAuth: state.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchJoin: () => dispatch({ type: "JOIN" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(course);
