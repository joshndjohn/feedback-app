import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * State is simply just data
 * There are 2 types of state.
 * 1. component level state(Data associated with one specific component) and 2. App level state or global state(This data can be shared among multiple components ). Route is used for rendering specific components int routing, hence the need to import it too
 *
 */

// Routing the about page.
//React itself doesn't have a router built in. external dependencies are used for routing. A popular one is react-router-dom.
//For react-router-dom, there's browser router and there's hash router(uses the # tag)

//Add the "exact" prop to match the specific route

//Linking the routes
