import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./login.css";
import { signin } from "../../store/actions";

const Login = (props) => {
  const { signin } = props;
  let user;
  const onChangeHandler = (property, value) => {
    user = {
      ...user,
      [property]: value,
    };
  };
  const handleLogIn = (event) => {
    event.preventDefault();
    console.log(user);
    if (user.email !== "" || user.password !== "") {
      signin(user.email, user.password);
    } else {
      alert("Please enter the necessary details");
    }
  };

  return (
    <div>
      <form className="login-container" onSubmit={handleLogIn}>
        <input
          className="input email"
          type="email"
          name="email"
          placeholder="Email-Id"
          onChange={(event) =>
            onChangeHandler(event.target.name, event.target.value)
          }
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) =>
            onChangeHandler(event.target.name, event.target.value, event.target)
          }
        />
        <button className="login-btn">Log In</button>
        <p className="signup-span">
          Not an existing User?
          <Link className="link-signup" to="/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuth: () => dispatch({ type: "LOGIN" }),
    setLoading: (value) => dispatch({ type: "SET-LOADING", val: value }),
    signin: (email, password) => dispatch(signin(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
