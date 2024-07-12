import React from "react";
import PropTypes from "prop-types";
import sicon from "./sicon.png";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand text-white custom-brand" to="/">
          ShopSmart
        </Link>
        <button
          className="navbar-toggler custom-toggler"
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
                className="nav-link text-white custom-nav-link"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown nav-link dropdown-toggle text-white custom-nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
                </li>
              <ul className="dropdown-menu custom-dropdown">
                <li>
                  <Link className="dropdown-item" to="/jewelery">
                    Jewelry
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/electronics">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/men-clothing">
                    Men's Clothing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/women-clothing">
                    Women's Clothing
                  </Link>
                </li>
              </ul>
            <li className="nav-item">
              <Link className="nav-link text-white custom-nav-link" to="/sell">
                Sell
              </Link>
            </li>
          </ul>
          <form className="d-flex custom-search-form" role="search">
            <input
              className="form-control me-2 custom-search-input"
              type="search"
              placeholder="Search ShopSmart"
              aria-label="Search"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn custom-search-btn"
              type="submit"
            >
              <img src={sicon} alt="Search" />
            </button>
          </form>
          <Link type="button" to="/login" className="btn custom-login-btn ms-2">
            Log in / Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;