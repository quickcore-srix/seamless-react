import React, { Component } from "react";
import SignInPage from "../SignIn";

const Landing = () => {
  return (
    /*      <div>
        <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
    <div classNam="container">
      <a className="navbar-brand" href="#"><b>Seamless Connectivity</b></a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar3SupportedContent" aria-controls="navbar3SupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
      <div className="collapse navbar-collapse text-center justify-content-end" id="navbar3SupportedContent">
        
          <li className
="nav-item">
            <a className
="nav-link" href="index.html#what">Our Services</a>
          </li>
          <li className
="nav-item mx-2 mb-2 my-md-0">
            <a className
="nav-link" href="index.html#who">Team</a>
          </li>
          <li className
="nav-item mx-2 mb-2 my-md-0">
            <a className
="nav-link" href="index.html#where">Contact Us</a>
          </li>
       
        <a className="btn navbar-btn btn-outline-light" href="">Login</a>
      </div>
    </div>
  </nav>
  <div className="py-5 text-center cover d-flex flex-column bg-dark">
          <h1 className
="display-1 mb-0 mt-5 big-title">Seamless Connectivity</h1>
          <h3 className
="mb-4"><b>A new age of Authentication Services.</b></h3>
          <a className
="btn navbar-btn btn-outline-light" href="">Login</a>
        
    <div classNam="container mt-auto">
      <div className="row">
        <div className="mx-auto col-lg-6 col-md-8 col-10">
          <a href="#mission"><i className
="d-block fa fa-angle-down fa-2x"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div className="py-5 filter-dark cover bg-fixed" style="background-image: url('assets/team/planes.jpg');background-position:center bottom;background-size:cover;" id="mission">
    <div className="container my-auto">
      <div className="row">
        <div className="col-md-8 p-3 text-white">
          <h2 className
="mb-4">Our Services</h2>
          <p className
="lead"><i>We provide Seamless Authentication services for Corporate offices and also for Institutions. With our system you can easily track your Employees and know the details through our Dashboard. </i></p>
        </div>
      </div>
    </div>
  </div>
  <div className="py-5 text-center" id="who">
    <div className="container">
      <div className="row">
        <div className="col-md-12"> </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2 className
="mb-4">Our team</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 px-4 mb-4 col-6 px-lg-5">
          <a data-toggle="modal" data-target=".yellow" href="">
            <div className
="card project">
              <img className
    ="card-img rounded-circle" src="assets/team/Prudhvi.jpg" alt="Card image"/>
              <div className
    ="card-body p-0">
                <p className
    ="mt-3 mb-1"><b>Prudhvi Raj</b></p>
                <p className
    ="text-muted m-0"></p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 px-4 mb-4 col-6 px-lg-5">
          <a data-toggle="modal" data-target=".cyan" href="">
            <div className
="card project">
              <img className
    ="card-img rounded-circle" src="assets/team/Rohith.jpg" alt="Card image"/>
              <div className
    ="card-body p-0">
                <p className
    ="mt-3 mb-1"><b>Krishna Rohith</b></p>
                <p className
    ="text-muted m-0"><small></small></p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 px-4 mb-4 col-6 px-lg-5">
          <a data-toggle="modal" data-target=".red" href="">
            <div className
="card project">
              <img className
    ="card-img rounded-circle" src="assets/team/Saiteja.jpg" alt="Card image"/>
              <div className
    ="card-body p-0">
                <p className
    ="mt-3 mb-1"><b>Saiteja Miyapuram</b></p>
                <p className
    ="text-muted m-0"><small></small></p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 px-4 mb-4 col-6 px-lg-5">
          <a data-toggle="modal" data-target=".purple" href="">
            <div className
="card project">
              <img className
    ="card-img rounded-circle" src="assets/team/Sandeep.jpeg" alt="Card image"/>
              <div className
    ="card-body p-0">
                <p className
    ="mt-3 mb-1"><b>Snadeep Mittapally</b></p>
                <p className
    ="text-muted m-0"><small></small></p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 px-4 mb-4 col-6 px-lg-5">
          <a data-toggle="modal" data-target=".white" href="">
            <div className
="card project">
              <img className
    ="card-img rounded-circle" src="assets/team/Jaypal.jpg" alt="Card image"/>
              <div className
    ="card-body p-0">
                <p className
    ="mt-3 mb-1"><b>Jaypal</b></p>
                <p className
    ="text-muted m-0"><small></small></p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 px-4 mb-4 col-6 px-lg-5">
          <a data-toggle="modal" data-target=".blue" href="">
            <div className
="card project">
              <img className
    ="card-img rounded-circle" src="assets/team/Saiteja_M.jpeg" alt="Card image"/>
              <div className
    ="card-body p-0">
                <p className
    ="mt-3 mb-1"><b>Saiteja Muppidi</b></p>
                <p className
    ="text-muted m-0"><small></small></p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 px-4 mb-4 col-6 px-lg-5">
          <a data-toggle="modal" data-target=".purple" href="">
            <div className
="card project">
              <img className
    ="card-img rounded-circle" src="assets/team/Divya.jpg" alt="Card image"/>
              <div className
    ="card-body p-0">
                <p className
    ="mt-3 mb-1"><b>Divya</b></p>
                <p className
    ="text-muted m-0"><small></small></p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 px-4 mb-4 col-6 px-lg-5">
          <a data-toggle="modal" data-target=".white" href="">
            <div className
="card project">
              <img className
    ="card-img rounded-circle" src="assets/team/Pranjali.jpg" alt="Card image"/>
              <div className
    ="card-body p-0">
                <p className
    ="mt-3 mb-1"><b>Pranjali</b></p>
                <p className
    ="text-muted m-0"><small></small></p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 px-4 mb-4 col-6 px-lg-5">
          <a data-toggle="modal" data-target=".blue" href="">
            <div className
="card project">
              <img className
    ="card-img rounded-circle" src="assets/team/Nithin.jpeg" alt="Card image"/>
              <div className
    ="card-body p-0">
                <p className
    ="mt-3 mb-1"><b>Nithin</b></p>
                <p className
    ="text-muted m-0"><small></small></p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 px-4 mb-4 col-6 px-lg-5">
          <a data-toggle="modal" data-target=".purple" href="">
            <div className
="card project">
              <img className
    ="card-img rounded-circle" src="assets/team/Kushal.jpg" alt="Card image"/>
              <div className
    ="card-body p-0">
                <p className
    ="mt-3 mb-1"><b>Kushal</b></p>
                <p className
    ="text-muted m-0"><small></small></p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 px-4 mb-4 col-6 px-lg-5">
          <a data-toggle="modal" data-target=".white" href="">
            <div className
="card project">
              <img className
    ="card-img rounded-circle" src="assets/team/Sanath.jpg" alt="Card image"/>
              <div className
    ="card-body p-0">
                <p className
    ="mt-3 mb-1"><b>Sanath</b></p>
                <p className
    ="text-muted m-0"><small></small></p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 px-4 mb-4 col-6 px-lg-5">
          <a data-toggle="modal" data-target=".blue" href="">
            <div className
="card project">
              <img className
    ="card-img rounded-circle" src="assets/team/Sriram.jpg" alt="Card image"/>
              <div className
    ="card-body p-0">
                <p className
    ="mt-3 mb-1"><b>Sriram</b></p>
                <p className
    ="text-muted m-0"><small>Field Researcher</small></p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div classNam="text-white bg-dark" id="where">
    <div classNam="container">
      <div className="row">
        <div className="p-5 col-md-6">
          <h3><b>Seamless Connectivity</b></h3>
          <p className
="">
            SRiX<br>Ananthasagar,Warangal</br>pin: 506 371          </p>
          <p className
="">
            <a href="#">quickcoresrix@gmail.com</a>
          </p>
          <p className
="mb-3">
            <a href="#">+91 7013550027&nbsp;</a>
          </p>
          <a href="#" target="_blank"><i className
="fa d-inline fa-lg mr-3 text-white fa-linkedin"></i></a>
          <a href="#" target="_blank"><i className
="fa fa-facebook d-inline fa-lg mr-3 text-white"></i></a>
        </div>
      <div className="row">
        <div className="col-md-12 mt-3">
          <p className
="text-center text-muted">© Copyright 2019 SRiX<sup>p1</sup> - All rights reserved. </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  */
    <div>Landing</div>
  );
};

export default Landing;
