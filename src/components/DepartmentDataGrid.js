import React, { Fragment, useState, useEffect } from "react";

const DepartmentDataGrid = () => {
  const [departments, setDepartments] = useState([]);
  const url = `${process.env.REACT_APP_BASE_SERVER_URL}${process.env.REACT_APP_DEPARTMENT_SERVER_ROUTE}`;

  const deleteDepartmentHandler = async (id) => {
    try {
      const departmentToDelete = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      setDepartments((departments) =>
        departments.filter((department) => department.department_id !== id)
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  const getAllDepartments = async () => {
    try {
      const res = await fetch(url, {
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      setDepartments(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAllDepartments();
  }, []);

  const populateDepartments = () => {
    return departments.map((department) => (
      <tr key={department.department_id}>
        <td className="col-8">
          <p className="text-xl-left">{department.department_title.trim()}</p>
        </td>
        <td className="col-2">
          <button className="btn btn-sm btn-outline-danger">Edit</button>
        </td>
        <td className="col-2">
          <button
            className="btn btn-sm btn-outline-warning"
            onClick={() => deleteDepartmentHandler(department.department_id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <Fragment>
      <div className="mt-5">
        <h3>Department List</h3>
        <table className="table mt-5 text-center table-striped">
          <thead>
            <tr>
              <th>Department Title</th>
            </tr>
          </thead>
          <tbody>{populateDepartments()}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default DepartmentDataGrid;
