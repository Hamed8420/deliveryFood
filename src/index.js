import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'remixicon/fonts/remixicon.css';
import "bootstrap/dist/css/bootstrap.css";
// import { DarkModeContextProvider } from "./context/darkModeContext";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    {/* <DarkModeContextProvider> */}
    <Router>
    <Provider store={store}>
        <App />
      </Provider>

    </Router>
    {/* </DarkModeContextProvider> */}
    
  </React.StrictMode>,
  document.getElementById("root")
);
