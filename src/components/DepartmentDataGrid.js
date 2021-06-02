import React, { Fragment, useState, useEffect } from "react";

const DepartmentDataGrid = () => {
  const [departments, setDepartments] = useState([]);
  const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_DEPARTMENT_ROUTE}`;

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
        // mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(`response : ${res}`);
      const data = await res.json();
      // console.log(data);
      setDepartments(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAllDepartments();
  }, []);

  console.log(departments);

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
          <tbody>
            {departments.map((department) => (
              <tr key={department.department_id}>
                <td>{department.department_title}</td>
                <td>
                  <button className="btn btn-success">Edit</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      deleteDepartmentHandler(department.department_id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default DepartmentDataGrid;
