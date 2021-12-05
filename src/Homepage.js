import React from "react";
import './index.css';
import welcome3 from './images/logo193.jpg';
import logo from './images/welcome3.jpg';
import Menubar from "./Menubar";
import Footer from "./Footer";
import Contact from "./Contact";
import { useHistory } from "react-router";
const Homepage = () => {
  const history=useHistory();
  return (
    <>
    <Menubar />
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
              <h1 className="display-2">
             
          Welcome Sir/Mam
              </h1>
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

export default Homepage;
