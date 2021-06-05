import React, { useState } from "react";
import Nav from "../Nav";

const DepartmentAddBox = () => {
  const [departmentTitle, setDepartmentTitle] = useState("");
  const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_DEPARTMENT_ROUTE}`;

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const newDepartment = { department_title: departmentTitle };
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newDepartment),
      });

      // reset all state variables
      setDepartmentTitle("");
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
    console.log(`The new department title is ${newDepartment.departmentTitle}`);
  };

  const departmentTitleChangeHandler = (event) => {
    setDepartmentTitle(event.target.value);
    console.log(url);
  };

  const DepartmentAddForm = () => {
    return (
      <form onSubmit={submitFormHandler} className="mt-5">
        <div className="form-group mb-5">
          <label htmlFor="departmentTitleInput" className="text-muted">
            Department Title:
          </label>
          <input
            type="text"
            placeholder="Department title"
            required
            name="departmentTitleInput"
            id="departmentTitleInput"
            className="form-control"
            value={departmentTitle}
            onChange={departmentTitleChangeHandler}
          />
        </div>
        <div>
          <button className="btn btn-primary">Add Department</button>
        </div>
      </form>
    );
  };

  return (
    <div className="container pb-5">
      <Nav />
      <h1 className="text-center mt-5">Welcome To Student Section</h1>
      <h3>Add New Department:</h3>
      {DepartmentAddForm()}
    </div>
  );
};

export default DepartmentAddBox;
