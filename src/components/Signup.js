import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  let { prevent } = props;

  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);

  const showP = () => {
    if (document.getElementById("cb").checked) {
      document.getElementById("password").type = "text";
      console.log("checked");
    } else {
      document.getElementById("password").type = "password";
      console.log("not checked");
    }
  };

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    const response = await fetch("http://localhost:3080/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setUsers(data);
    alert("logged in successfully");

  };

  const getUsers = async (req, res) => {
    const response = await fetch("http://localhost:3080/", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
 <div className="df bg-light p-5 login-container">
        <form onSubmit={handleSubmit} className="log shadow p-4 rounded login-form">
          <div id="container" className="text-center login-content">
            <h1 id="h" style={{color:"#ff4500"}} className=" mb-4 login-title">Sign Up</h1>
            <input required
              id="mail"
              onChange={handleForm}
              name="mail"
              type="email"
              className="form-control mb-3 login-input"
              placeholder="Email Address"
            />
            <input required
              id="password"
              onChange={handleForm}
              name="password"
              type="password"
              className="form-control mb-3 login-input"
              placeholder="Password"
            />
            <div id="checkbox" className="form-check mb-3 login-checkbox">
              <input onClick={showP} id="cb" type="checkbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="cb">Show password</label>
            </div>
            <button id="bn" className="btn  btn-primary w-70 login-button">Log in</button>
            <a className="fp text-primary d-block mb-3 login-forgot" href="#">
              Forgot password?
            </a>
            <div>
              <p className="Ac text-white mb-4 login-signup-text">Already have an account</p>
            </div>
            <Link className="fp btn btn-outline-primary login-signup-button" to="/login">
              Log-In
            </Link>
          </div>
        </form>
      </div>
    </>  );
}

export default Login;
