import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import "../../styles/styles.scss";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("Password")?.replace(/"/g, "");
    let mail = localStorage.getItem("Email")?.replace(/"/g, "");
    // .replace(/"/g,"") is used to remove the double quotes for the string

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <>
      {
        <div className="">
          <div className="background-img"></div>
          <form onSubmit={handleLogin} className="authSection">
            <img
              src={require("../../assets/logo.png")}
              alt="logo"
              className="logo"
            />
            <h3 className="heading">Log In</h3>
            <div className="form-group">
              <label>Email </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmaillog(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => setPasswordlog(event.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Login
            </button>

            {flag && (
              <Alert color="primary" variant="warning">
                Fill correct Info else keep trying.
              </Alert>
            )}
          </form>
        </div>

        //   ) : (
        //   //  <Dashboard />
        //   )
      }
    </>
  );
}

export default Login;
