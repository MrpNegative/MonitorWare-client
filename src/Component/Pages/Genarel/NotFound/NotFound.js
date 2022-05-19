import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="header1 text-center my-4">Page Not Found</h1>
      <div className="not-found">
        <img src="https://i.ibb.co/r7LypLr/404error.gif" alt="" />
        <br />
      <button className=" d-block mx-auto my-3 btn btn-dark"><Link to='/'>To Home</Link></button>
      </div>
    </div>
  );
};

export default NotFound;
