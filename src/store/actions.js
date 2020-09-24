import services from "../services";

export const publish = () => {
  return {
    type: "PUBLISH",
  };
};

export const fetch = (courses) => {
  return {
    type: "SET-COURSES",
    courseList: courses,
  };
};

export const signin = (email, password) => {
  return (dispatch) => {
    let url = decodeURIComponent(`/users?email=${email}`);
    return services
      .getRequest(url)
      .then((res) => {
        dispatch({
          type: "LOGIN",
          payload: res.data[0],
          error: null,
        });
        console.log(res.data[0]);
        return res.data[0];
      })
      .catch((error) => {
        // dispatch({
        //   type: LOGIN_ERROR,
        //   payload: null,
        //   error: error,
        // });
      });
  };
};
export const signup = (userData) => {
  return (dispatch) => {
    let url = decodeURIComponent("/users");
    return services
      .postRequest(url, userData)
      .then((res) => {
        dispatch({
          type: "SIGNUP",
          error: null,
        });
        return res.data;
      })
      .catch((error) => {
        // dispatch({
        //   type: LOGIN_ERROR,
        //   payload: null,
        //   error: error,
        // });
      });
  };
};

export const addCourse = (courseData) => {
  return (dispatch) => {
    let url = decodeURIComponent("/classes");
    return services
      .postRequest(url, courseData)
      .then((res) => {
        dispatch({
          type: "SIGNUP",
          error: null,
        });
        return res.data;
      })
      .catch((error) => {
        // dispatch({
        //   type: LOGIN_ERROR,
        //   payload: null,
        //   error: error,
        // });
      });
  };
};
