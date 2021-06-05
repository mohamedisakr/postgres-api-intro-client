import React from "react";
import "./App.css";

import DepartmentDataGrid from "./components/DepartmentDataGrid";
import Nav from "./Nav";

function App() {
  return (
    <div className="container pb-5">
      <Nav />
      <DepartmentDataGrid />
    </div>
  );
}

export default App;
