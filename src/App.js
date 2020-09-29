import React from "react";
import { Router } from "react-router-dom";
import Header from "./component/header/Header";
import AppRoutes from "./component/appRoutes/AppRoutes";
import { history } from "./common/utils/history";
import store from "./store/store";
import { Provider } from "react-redux";

import "./App.css";

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history}>
          <Header />
          <AppRoutes />
        </Router>
      </div>
    </Provider>
  );
}
export default App;
