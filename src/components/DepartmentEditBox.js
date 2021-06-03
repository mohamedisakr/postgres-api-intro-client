import React, { Fragment, useState } from "react";

const DepartmentEditBox = () => {
  const [departmentTitle, setDepartmentTitle] = useState("");
  const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_DEPARTMENT_ROUTE}`;

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const newDepartment = { department_title: departmentTitle };
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // mode: "no-cors",
        body: JSON.stringify(newDepartment),
        // console.log(body);
      });

      console.log(res);
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

  return (
    <Fragment>
      <h1 className="text-center mt-5">Welcome To Student Section</h1>
      <h3>Add New Department:</h3>
      <form onSubmit={submitFormHandler} className="mt-5">
        <div className="mb-3">
          <label htmlFor="departmentTitleInput" className="form-label">
            Department Title:
          </label>
          <input
            type="text"
            name="departmentTitleInput"
            id="departmentTitleInput"
            className="form-control"
            value={departmentTitle}
            onChange={departmentTitleChangeHandler}
          />
        </div>
        <button className="btn btn-primary">Add Department</button>
      </form>
    </Fragment>
  );
};

export default DepartmentEditBox;
