import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Carousel from "./components/Carouselitems";
import Proptypes from "prop-types";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div>
          <Routes>
            <Route
              exact
              path="/"
              element={<Container key="/"></Container>}
            ></Route>
            <Route
              exact
              path="/home"
              element={<Container key="home"></Container>}
            ></Route>
            <Route
              exact
              path="/jewelery"
              element={
                <Container key="jewelery" category="jewelery"></Container>
              }
            ></Route>
            <Route
              exact
              path="/electronics"
              element={
                <Container key="electronics" category="electronics"></Container>
              }
            ></Route>
            <Route
              exact
              path="men clothing"
              element={
                <Container
                  key="men clothing"
                  category="men's clothing"
                ></Container>
              }
            ></Route>
            <Route
              exact
              path="/women clothing"
              element={
                <Container
                  key="women clothing"
                  category="women's clothing"
                ></Container>
              }
            ></Route>
            <Route
              exact
              path="/login"
              element={<Login key="log in"></Login>}
            ></Route>
            <Route
              exact
              path="/signup"
              element={<Signup key="sign up"></Signup>}
            ></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
