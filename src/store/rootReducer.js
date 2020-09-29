export const initialState = {
  courseList: [],
  isLoading: false,
  isAuth: false,
  isAdmin: false,
  location: "",
  user: {},
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET-LOADING":
      return {
        ...state,
        isLoading: action.val,
      };
    case "SET-STATE":
      console.log(action.payload);
      if (action.payload.state.length !== 0) {
        return {
          ...action.payload.state,
        };
      } else {
        return initialState;
      }
    case "SET-COURSES":
      console.log("SET_COURSES triggered");
      return {
        ...state,
        courseList: action.payload,
        isLoading: false,
      };
    case "SIGNUP":
      return {
        ...state,
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
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
