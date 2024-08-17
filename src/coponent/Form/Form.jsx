import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateStu } from "../Services/Action/Action";

function NewEmployee() {
  const { student } = useSelector((state) => state.studentReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputText, setInputText] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
    address: "",
    con: "",
  });

  useEffect(() => {
    if (student) {
      setInputText(student);
    }
  }, [student]);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputText({ ...inputText, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStu(inputText));
    navigate("/viewData");
  };

  // Render only when student is not null
  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <section className="new-employee col-6">
      <h2>Edit Employee</h2>
      <div className="d-flex justify-content-center pt-5">
        <form onSubmit={handleSubmit}>
          <div className="d-flex">
            <div className="mb-3">
              <label htmlFor="first-name" className="form-label">
                First Name:
              </label>
              <input
                type="text"
                className="form-control"
                name="fname"
                value={inputText.fname}
                onChange={handleInput}
              />
            </div>
            <div className="mb-3 ms-3">
              <label htmlFor="last-name" className="form-label">
                Last Name:
              </label>
              <input
                type="text"
                className="form-control"
                name="lname"
                value={inputText.lname}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="d-flex">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={inputText.email}
                onChange={handleInput}
              />
            </div>
            <div className="mb-3 ms-3">
              <label htmlFor="phone" className="form-label">
                Phone:
              </label>
              <input
                type="tel"
                className="form-control"
                name="con"
                value={inputText.con}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address:
            </label>
            <textarea
              type="text"
              className="form-control"
              name="address"
              value={inputText.address}
              onChange={handleInput}
              rows="3"
            />
          </div>
          <div className="btn-add">
            <button type="submit" className="btn btn-primary">
              Update Employee
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default NewEmployee;
