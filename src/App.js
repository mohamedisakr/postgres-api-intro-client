import React, { Fragment } from "react";
import "./App.css";

// import StudentAddBox from "./components/StudentAddBox";
// import StudentDataGrid from "./components/StudentDataGrid";
import DepartmentAddBox from "./components/DepartmentAddBox";
import DepartmentDataGrid from "./components/DepartmentDataGrid";

function App() {
  return (
    <Fragment>
      <div className="container">
        <DepartmentAddBox />
        <DepartmentDataGrid />
      </div>
    </Fragment>
  );
}

export default App;
