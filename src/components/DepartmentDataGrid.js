import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <div
        className="row"
        key={department.department_id}
        style={{ borderBottom: "1px solid silver" }}
      >
        <div className="col pt-3 pb-2">
          <div className="row">
            <div className="col-md-10">{department.department_title}</div>

            <div className="col-md-1">
              <Link
                to={`/editdept/${department.department_id}`}
                className="btn btn-sm btn-outline-warning mr-1"
              >
                Update
              </Link>
            </div>
            <div className="col-md-1">
              <button
                onClick={() =>
                  deleteDepartmentHandler(department.department_id)
                }
                className="btn btn-sm btn-outline-danger ml-1"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="container mt-5">
        <h3>Department List</h3>
        <div>{populateDepartments()}</div>
        {/* <table className="table mt-5 text-center table-striped">
          <thead>
            <tr>
              <th>Department Title</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table> */}
      </div>
    </Fragment>
  );
};

export default DepartmentDataGrid;

/*<tr key={department.department_id}>
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
    </tr>*/
