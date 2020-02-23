import React from "react";
import ReactDOM from "react-dom";
// import App from "./AppClass";
// import App from "./AppFunction";
// App from "./Login";
//import App from "./Register";
//import App from "./Api";
import App from "./ReactHooks";
//import App from "./AppDemoClass";
//import App from "./AppDemoFunc";
import * as serviceWorker from "./serviceWorker";

export const UserContext = React.createContext();

const userName = "Diwakar";

ReactDOM.render(
  <UserContext.Provider value={userName}>
    <App />
  </UserContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
