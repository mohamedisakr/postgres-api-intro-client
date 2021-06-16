import React, { useState, useEffect } from "react";
import Nav from "../Nav";

const DepartmentEditBox = (props) => {
  const [department, setDepartment] = useState({});
  const [departmentTitle, setDepartmentTitle] = useState("");
  const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_DEPARTMENT_ROUTE}`;

  const getDepartment = async () => {
    const id = props.match.params.id;
    try {
      const res = await fetch(`${url}/${id}`, {
        method: "GET",
      });

      // await fetch(url, {
      //   headers: { "Content-Type": "application/json" },
      // });

      const data = await res.json();
      setDepartment(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getDepartment();
  }, []);

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const newDepartment = { department_title: departmentTitle };
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newDepartment),
      });

      console.log(res);
      // reset all state variables
      // setDepartmentTitle("");
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
    console.log(`The new department title is ${newDepartment.departmentTitle}`);
  };

  const departmentTitleChangeHandler = (event) => {
    // setDepartmentTitle(event.target.value);
    console.log(url);
  };

  const DepartmentEditForm = () => {
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
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    );
  };

  return (
    <div className="container pb-5">
      {department}
      <Nav />
      <h1 className="text-center mt-5">Welcome To Student Section</h1>
      <h3>Update Department:</h3>
      {DepartmentEditForm()}
    </div>
  );
};

export default DepartmentEditBox;

{
  /* <form onSubmit={submitFormHandler} className="mt-5">
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
<button className="btn btn-primary">Update</button>
</form> */
}
