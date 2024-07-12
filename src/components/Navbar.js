import React from "react";
import PropTypes from "prop-types";
import sicon from "./sicon.png";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <h1 className="navbar-brand text-white" href="#">
            E-commerce
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/jewelery">
                      Jewelery
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/electronics">
                      Electronics
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/men clothing">
                      Men's Clothing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/women clothing">
                      Women's Clothing
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/">
                  Sell
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search E-Commerce"
                aria-label="Search"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="btn btn-outline-light"
                type="submit"
              >
                <img src={sicon} alt="" />
              </button>
            </form>
            <Link type="button" to="/login" className="btn btn-light ms-2">
              Log-in / Sign-up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {};

export default Navbar;
