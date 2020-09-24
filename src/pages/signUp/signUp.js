import React, { useState } from "react";
import { connect } from "react-redux";
import "./signup.css";
import { signup } from "../../store/actions";

const SignUp = (props) => {
  const [user, setUser] = useState({});
  const onChangeHandler = (property, value) => {
    setUser({
      ...user,
      [property]: value,
    });
  };
  const handleSubmit = (event) => {
    props.signup(user);
    event.preventDefault();
  };
  return (
    <div className="signup-bg">
      <form className="signup-container" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="name"
          onChange={(event) =>
            onChangeHandler(event.target.name, event.target.value, event.target)
          }
          placeholder="Full Name"
        />
        <input
          className="input"
          type="email"
          name="email"
          onChange={(event) =>
            onChangeHandler(event.target.name, event.target.value)
          }
          placeholder="Email Address"
        />
        <input
          className="input"
          type="date"
          name="dob"
          onChange={(event) =>
            onChangeHandler(event.target.name, event.target.value)
          }
          placeholder="Date of Birth"
        />
        <span className="radio">
          <input type="radio" name="gender" value="male" />{" "}
          <span className="radio-txt">Male</span>
          <input type="radio" name="gender" value="female" />
          <span className="radio-txt">Female</span>
        </span>
        <input
          className="input"
          type="number"
          name="zip-code"
          onChange={(event) =>
            onChangeHandler(event.target.name, event.target.value)
          }
          placeholder="Zip Code"
        />
        <input
          className="input"
          type="password"
          name="password"
          onChange={(event) =>
            onChangeHandler(event.target.name, event.target.value)
          }
          placeholder="Password"
        />
        <input className="signup-btn" type="submit" value="Sign-Up" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (userData) => dispatch(signup(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
