import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-dark">
      <footer className="container d-flex align-items-center justify-content-evenly flex-wrap">
      <div className="my-3">
          <h5>Quick Link</h5>
          <p>
            <Link to="/">About</Link>
          </p>
          <p>
            <Link to="/">Contact</Link>
          </p>
          <p>
            <Link to="/">Listing</Link>
          </p>
          <p>
            <Link to="/">Membership</Link>
          </p>
          <p>
            <Link to="/">Profile</Link>
          </p>
        </div>
        <div className="my-3">
          <h5>Contact Info</h5>
          <p><ImLocation/> 245 10th Ave, New York, NY, 10016, USA</p>
          <p><AiFillPhone/> +1 215-345-3463 | +1 215-345-6453</p>
          <p><MdEmail/> techHouse@gmail.com | techHouse@tech.com</p>
        </div>
        <div className="my-3">
          <h5>Subscribe</h5>
          <p>Subscribe to our weekly news latter</p>
          <form>
            <input type="email" required />
            <br />
            <input className="btn my-3 btn-light" type="submit" value="Subscribe" />
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
