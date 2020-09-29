import { history } from "../common/utils/history";
import services from "../services";

let url = null;
export const publish = () => {
  return {
    type: "PUBLISH",
  };
};

export const fetch = (endpoint) => {
  return (dispatch) => {
    url = decodeURIComponent(`/${endpoint}`);
    return services
      .getRequest(url)
      .then((res) => {
        if (res.data) {
          dispatch({
            type: `SET-COURSES`,
            payload: res.data,
            error: null,
          });
          console.log(res.data);
          return res.data[0];
        }
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

export const signin = (email, password) => {
  return (dispatch) => {
    url = decodeURIComponent(`/users?email=${email}`);
    return services
      .getRequest(url)
      .then((res) => {
        console.log(res);
        if (res.data.length) {
          dispatch({
            type: "LOGIN",
            payload: res.data[0],
            error: null,
          });
          history.push("/home");
          console.log(res.data[0]);
          return res.data[0];
        } else {
          alert("You are not registered with us..... \nPlease signup");
          history.push("/signup", email);
        }
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
        history.push("/login");
        alert("Your have registered successfully... Login to continue!!");
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
export const logOut = (userData) => {
  return (dispatch) => {
    let url = decodeURIComponent(`/users/${userData.id}`);
    return services
      .putRequest(url, userData)
      .then((res) => {
        dispatch({
          type: "LOGOUT",
          user: {},
          auth: false,
          error: null,
        });
        history.push("/login");
        alert("Your have been logged out successfully...!!");
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
    let url = decodeURIComponent("/courses");
    return services
      .postRequest(url, courseData)
      .then((res) => {
        dispatch({
          type: "ADD_COURSE",
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
export const addSchool = (schoolData) => {
  return (dispatch) => {
    let url = decodeURIComponent("/school");
    console.log(url);
    return services
      .postRequest(url, schoolData)
      .then((res) => {
        dispatch({
          type: "ADD_SCHOOL",
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
export const joinCourse = (user) => {
  return (dispatch) => {
    let url = decodeURIComponent(`/users/${user.id}`);
    return services
      .putRequest(url, user)
      .then((res) => {
        dispatch({
          type: "JOIN_COURSE",
          error: null,
        });
        dispatch({
          type: "UPDATE_USER",
          payload: user,
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
export const updateUser = (user) => {
  return {
    type: "UPDATE_USER",
    payload: user,
  };
};
