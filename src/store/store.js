import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer, { initialState } from "../store/rootReducer";

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

const persistedState =
  JSON.parse(localStorage.getItem("state")) || initialState;
console.log(persistedState);
const store = createStore(
  reducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  const persist = store.getState();
  localStorage.setItem("state", JSON.stringify(persist));
});

export default store;
