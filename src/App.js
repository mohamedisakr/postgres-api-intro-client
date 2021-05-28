import React, { Fragment } from "react";
import "./App.css";

import StudentAddBox from "./components/StudentAddBox";
import StudentDataGrid from "./components/StudentDataGrid";

function App() {
  return (
    <Fragment>
      <div className="container">
        {/* <StudentAddBox></StudentAddBox> */}
        <StudentDataGrid></StudentDataGrid>
      </div>
    </Fragment>
  );
}

export default App;
