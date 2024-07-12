import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Signup() {
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
    e.preventDefault();
    const response = await fetch("http://localhost:3080/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setUsers(data);
    alert("signed up successfully");
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
    <div className="df bg-light p-5">
      <form onSubmit={handleSubmit} className="log shadow p-4 rounded">
        <div id="container" className="text-center">
          <h1 id="h" className="text-primary mb-4">Sign up</h1>
          <input
            id="mail"
            onChange={handleForm}
            type="email"
            name="mail"
            className="form-control mb-3"
            placeholder="Email Address"
          />
          <input
            id="password"
            onChange={handleForm}
            name="password"
            type="password"
            className="form-control mb-3"
            placeholder="Password"
          />
          <div id="checkbox" className="form-check mb-3">
            <input onClick={showP} id="cb" type="checkbox" className="form-check-input" />
            <label className="form-check-label" htmlFor="cb">Show password</label>
          </div>
          <button id="bn" className="btn btn-primary w-100 mb-3">Sign up</button>
          <a className="fp text-primary d-block mb-3" href="#">
            Forgot password?
          </a>
          <p className="Ac text-white mb-4">
            Already have an account
          </p>
          <Link className="fp btn btn-outline-primary" to="/login">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
