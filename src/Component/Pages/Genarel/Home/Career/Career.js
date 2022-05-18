import React from "react";
import { Link } from "react-router-dom";
import './Career.css'

const Career = () => {
  return (
    <div className="container d-flex flex-column align-items-center ">
      <h1 className="header1 text-center my-5">Career</h1>
      <div className="career-container">
        <div className="car-img-container">
          <img src="https://i.ibb.co/NWDD5rm/e1f.jpg" alt="" />
        </div>
        <div className="car-info-container">
          <h1 className="header1">
            We Are Hiring<i className="fa fa-bullhorn" aria-hidden="true"></i>
          </h1>
          <p>
            <Link className="text-danger fw-bold" to="/">
              Click hear
            </Link>{" "}
            to view requirement{" "}
          </p>
          <p>
            Send your Resume{" "}
            <span className="fw-bold">techHouseJob@techHOuse.com</span>
          </p>
          <p>After Sending Email Submit Your Email Hear</p>
          <form>
            <input type="email" placeholder="Your Email" required />
            <br />
            <input
              className="btn my-3 btn-dark"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
