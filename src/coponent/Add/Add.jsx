import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import generateUniqueId from "generate-unique-id";
import { useDispatch } from "react-redux";
import { addStu } from "../Services/Action/Action";

function Add() {
  const [inputText, setInputText] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
    address: "",
    con: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInputText({ ...inputText, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      ...inputText,
    };

    obj.id = generateUniqueId({
      length: 5,
      useLetters: false,
    });

    dispatch(addStu(obj));

    setInputText({
      id: "",
      fname: "",
      lname: "",
      email: "",
      address: "",
      con: "",
    });

    navigate("/viewData");
  };

  return (
    <section className="new-employee col-6">
      <h2>Add New Employee</h2>
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
                id="first-name"
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
                id="last-name"
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
                id="email"
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
                id="phone"
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
              className="form-control"
              id="address"
              name="address"
              value={inputText.address}
              onChange={handleInput}
              rows="3"
            />
          </div>
          <div className="btn-add">
            <button type="submit" className="btn btn-primary">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Add;
