import React, { Fragment, useState, useEffect } from "react";

const StudentDataGrid = () => {
  const [students, setStudents] = useState([]);
  const url = "http://localhost:5000/api/students";
  // const url = "http://localhost:5000/";

  const deleteStudentHandler = async (id) => {
    try {
      const studentToDelete = await fetch(`${url}/${id}`, { method: "DELETE" });
      setStudents((students) =>
        students.filter((student) => student.student_id !== id)
      );
      // console.log(studentToDelete);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getAllStudents = async () => {
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
      setStudents(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  console.log(students);

  return (
    <Fragment>
      <div className="mt-5">
        <h3>Student List</h3>
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              {/* studentNumber, classIn, major, studentName */}
              <th>Student Number</th>
              <th>Class</th>
              <th>Major</th>
              <th>Student Name</th>
              {/* <th>Edit</th>
              <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {/* let { student_id, student_number, major, student_name } = student; */}
            {students.map((student) => (
              <tr key={student.student_id}>
                <td>{student.student_number}</td>
                <td>{student.class}</td>
                <td>{student.major}</td>
                <td>{student.student_name}</td>
                <td>Edit</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteStudentHandler(student.student_id)}
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

export default StudentDataGrid;
