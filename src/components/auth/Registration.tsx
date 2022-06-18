import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login.tsx";
import "../../styles/styles.scss";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const [info, setInfo] = useState(true);

  // on form submit...
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !role) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  // Directly to the login page
  function handleClick() {
    setLogin(!login);
  }

  // Company Info
  function infoClick() {
    setInfo(!info);
  }

  return (
    <>
      {login ? (
        <div className="">
          <div className="background-img"></div>
          <form onSubmit={handleFormSubmit} className="authSection">
            <img
              src={require("../../assets/logo.png")}
              alt="logo"
              className="logo"
            />
            <h3 className="heading">Register </h3>

            <div className="">
              <label>Name </label>
              <input
                type="text"
                className=""
                placeholder="Enter Full Name"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="">
              <label>Email </label>
              <input
                type="email"
                className=""
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="">
              <label>Password </label>
              <input
                type="password"
                className=""
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="">
              <label>Phone No. </label>
              <input
                type="Phone"
                className=""
                placeholder="Enter contact no"
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>

            <div className="">
              <label>Register as </label>
              <Form.Control
                as="select"
                onChange={(event) => setRole(event.target.value)}
              >
                <option>Client</option>
                <option>Barber</option>
              </Form.Control>
            </div>

            <button type="submit" className="">
              Register
            </button>
            <p className="">
              Already registered{" "}
              <a href="#" onClick={handleClick}>
                log in?
              </a>
            </p>
            {flag && (
              <Alert color="primary" variant="danger">
                I got it you are in hurry! But every Field is important!
              </Alert>
            )}
          </form>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Registration;
