import React, { Fragment } from "react";
import "./App.css";

import StudentAddBox from "./components/StudentAddBox";

function App() {
  return (
    <Fragment>
      <div className="container">
        <StudentAddBox></StudentAddBox>
      </div>
    </Fragment>
  );
}

export default App;
