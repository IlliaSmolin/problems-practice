import React from "react";
import "./App.css";

//components import
import NavigationBar from "./components/NavigationBar";
import Main from "./components/Main";

//main App component body
const App = () => (
  <div className="app">
    <h1>Welcome to "Problems Practice" website by Illia Smolin</h1>
    <NavigationBar />
    <Main />
  </div>
);

export default App;
