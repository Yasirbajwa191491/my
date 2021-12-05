import React,{useState} from "react";
import './index.css';
import welcome3 from './images/logo193.jpg';
import logo from './images/welcome3.jpg';
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { useHistory } from "react-router";
const Home = () => {
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
                  <NavLink className="nav-link active" aria-current="page" to="/login">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/login">
                    Cards
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/login">
                    Google Keep
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/login">
                    Todo List
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/service">
                    Services
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn  btn-style" type="submit" onClick={()=>history.push("./signup")}>
                  Sign Up
                </button>
                <button className="btn  btn-style btn-style-border" type="submit" 
                onClick={()=>history.push("./login")}>
                  Log in
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
      <header>
        <section className="container main-hero-container">
          <div className="row">
          
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
              <h1 className="frontname">Yasir191491....</h1>
                Responsive react website <br /> by Yasir191491.
              </h1>
              <p className="main-hero-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                officiis tempora recusandae voluptate quam, nisi odio officiis
                tempora recusandae
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email" required
                />
                <button className="input-group-button" onClick={()=>history.push("/signup")}>Get Started</button>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
        
              <img
                src={welcome3}
                alt="welcome3"
                className="img-fluid mainfrontImage"
              />
              <img
                src={logo}
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
              
            </div>
            
          </div>
        </section>
      </header>
    
      <Footer />
    </>
  );
};

export default Home;
