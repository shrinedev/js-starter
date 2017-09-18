//
// This is the client side entry point for the React app.
//

import React from "react";
import { render } from "react-dom";
import { routes } from "./routes";
import { Router, browserHistory } from "react-router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


//

//
// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.
//

window.webappStart = () => {
  const initialState = window.__PRELOADED_STATE__;
  const store = createStore(rootReducer, initialState);
  injectTapEventPlugin();
  render(
    <Provider store={store}>
      <MuiThemeProvider>
        <Router history={browserHistory}>{routes}</Router>
      </MuiThemeProvider>
    </Provider>,
    document.querySelector(".js-content")
  );
};
