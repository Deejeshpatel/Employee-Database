import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteStu, singleStu } from "../Services/Action/Action";

function ManageEmployees() {
  const { students, student } = useSelector((state) => state.studentReducer);

  const dispatch = useDispatch();

  console.log("student", student);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteStu(id));
  };

  const handleEdit = (id) => {
    dispatch(singleStu(id));

    navigate("/editData");
  };

  return (
    <section className="manage-employees container">
      <h2 align="center">Manage Employees</h2>
      <div className="pt-4">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((data, index) => (
              <tr key={data.id}>
                <td>{index + 1}</td>
                <td>{data.fname}</td>
                <td>{data.lname}</td>
                <td>{data.email}</td>
                <td>{data.address}</td>
                <td>{data.con}</td>
                <td>
                  <button
                    className="btn btn-success me-2"
                    onClick={() => handleEdit(data.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ManageEmployees;
