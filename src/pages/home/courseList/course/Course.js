/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useHistory } from "react-router-dom";
import { joinCourse } from "../../../../store/actions";
import { updateUser } from "../../../../store/actions";
import "./course.css";
import { connect } from "react-redux";

const course = (props) => {
  const { id, name, desc, img, isAdmin, isAuth, dispatchJoin, user } = props;
  const enrolled = user.courses;
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
  const handleJoin = () => {
    if (isAuth) {
      const updatedUser = {
        ...props.user,
        courses: props.user.courses.concat(id),
      };
      console.log(updatedUser);
      dispatchJoin(updatedUser);
    } else {
      history.push("/login");
    }
  };
  let joinOrEnrolled = (
    <button onClick={handleJoin} className="btn-join">
      Join
    </button>
  );
  if (isAuth && enrolled.indexOf(id) >= 0) {
    joinOrEnrolled = <div className="enrolled">Enrolled</div>;
  }
  return (
    <div style={courseStyle}>
      <div className="wrapper">
        <div className="card-header">
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
            {joinOrEnrolled}
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
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchJoin: (user) => dispatch(joinCourse(user)),
    updateUser: (user) => dispatch(updateUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(course);
