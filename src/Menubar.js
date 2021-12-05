import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import "./index.css";

const Menubar = () => {
  const [show, setShow] = useState(false);
  const history=useHistory();
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
          
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/card">
                    Cards
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/keep">
                    GoogleKeep
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/todo">
                    Todo List
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn  btn-style" type="submit" onClick={()=>history.push("./signup")}>
                  Sign Up
                </button>
                <button className="btn  btn-style btn-style-border" type="submit" onClick={()=>history.push("./login")}>
                  Log in
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Menubar;
