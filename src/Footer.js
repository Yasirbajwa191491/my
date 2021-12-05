import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import './index.css';
const Footer = () => {
    const instrafun=()=>{
        window.location.href="http://instagram.com/yasir.sohail_191491?utm_source=qr";
       }
       const fbfun=()=>{
           window.location.href="https://www.facebook.com/yasir.yasirsohail";
       }
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                   
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                  <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                 
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                  <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                 
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                  <h5 className="my-3 text-danger" > Instra id: <InstagramIcon style={{fontSize:"40px"}}
                onClick={instrafun}></InstagramIcon></h5>
                <h5 className="my-3 text-danger" > Facebook id: <FacebookIcon style={{fontSize:"40px"}}
                 onClick={fbfun}></FacebookIcon></h5>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2021 Yasir191491. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
