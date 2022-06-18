import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login.tsx";
import "../styles/styles.scss";
import { Navigate, Link } from "react-router-dom";
export const barbers = [
  {
    id: 1,
    name: "Tamuna",
    surname: "Odisharia",
    email: "tamushka@gmail.com",
    address: "Tbilisi",
    price: "100 Gel",
  },
  {
    id: 2,
    name: "Vakhtang",
    surname: "Nodadze",
    email: "ragaca@gmail.com",
    address: "თბილისი",
    price: "4500000 Gel",
  },
];
function Registration() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [price, setPrice] = useState("");
  const [role, setRole] = useState("");

  const [flag, setFlag] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (role === "client") {
      if (!email || !password) {
        setFlag(true);
      } else {
        setFlag(false);
      }
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      console.log("Saved in Local Storage");
    } else {
      if (!name || !surname || !email || !price || !address) {
        setFlag(true);
      } else {
        setFlag(false);
      }
      let barber = {
        id: barbers.length + 1,
        name: name,
        surname: surname,
        email: email,
        address: address,
        price: price + "Gel",
      };
      barbers.push(barber);
    }
  }

  return (
    <div className="">
      <div className="background-img"></div>
      <div className="authSection">
        <img src={require("../assets/logo.png")} alt="logo" className="logo" />
        <div className="role-buttons">
          Register as
          <button type="button" onClick={() => setRole("barber")}>
            Barber
          </button>
          <button type="button" onClick={() => setRole("client")}>
            Client
          </button>
        </div>
        {role === "barber" && (
          <form onSubmit={handleFormSubmit}>
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
              <label>Surname </label>
              <input
                type="text"
                className=""
                placeholder="Enter Full Name"
                name="name"
                onChange={(event) => setSurname(event.target.value)}
              />
            </div>
            <div className="">
              <label>Address </label>
              <input
                type="text"
                className=""
                placeholder="Enter Full Name"
                name="name"
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
            <div className="">
              <label>Price </label>
              <input
                type="number"
                className=""
                placeholder="Enter Full Name"
                name="name"
                onChange={(event) => setPrice(event.target.value)}
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

            <button type="submit" className="">
              Register
            </button>
            <p className="">
              Already have an account? <Link to="/login">Log In</Link>
            </p>
            {flag && (
              <Alert className="red" variant="danger">
                Every Field is important!
              </Alert>
            )}
          </form>
        )}
        {role === "client" && (
          <form onSubmit={handleFormSubmit}>
            <h3 className="heading">Register </h3>

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

            <button type="submit" className="">
              Register
            </button>
            <p className="">
              Already have an account? <Link to="/login">Log In</Link>
            </p>
            {flag && (
              <Alert className="red" variant="danger">
                Every Field is important!
              </Alert>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default Registration;
