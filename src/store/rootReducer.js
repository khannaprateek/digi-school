import Axios from "axios";

const initialState = {
  courseList: [],
  isLoading: false,
  isAuth: false,
  isAdmin: false,
  location: "",
  user: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-LOADING":
      return {
        ...state,
        isLoading: action.val,
      };
    case "SET-COURSES":
      return {
        ...state,
        courseList: action.courseList,
        isLoading: false,
      };
    case "SIGNUP":
      return {
        ...state,
        isAuth: true,
        error: action.error,
      };
    case "LOGIN":
      return {
        ...state,
        isAuth: true,
        user: action.payload,
        error: action.error,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
        user: {},
      };
    default:
      return state;
  }
};

export default rootReducer;
