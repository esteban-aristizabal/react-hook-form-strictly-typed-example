import React, { Component } from "react";
import { render } from "react-dom";
import DemoEdit from "./DemoEdit";
import "./style.css";

const App = () => {
  return (
    <div>
      <DemoEdit />
    </div>
  );
};

render(<App />, document.getElementById("root"));
