import React, { Fragment } from "react";
import "./App.css";
import DepartmentAddBox from "./components/DepartmentAddBox";
import DepartmentDataGrid from "./components/DepartmentDataGrid";

function App() {
  return (
    <Fragment>
      <div className="container p-5">
        {/* <DepartmentAddBox /> */}
        <DepartmentDataGrid />
      </div>
    </Fragment>
  );
}

export default App;
