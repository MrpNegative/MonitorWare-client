import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase-init";
import Loading from "../../Genarel/Loading/Loading";

const Signup = () => {
  // error state 
  const [errors, setErrors] = useState('')

  // react firebase hook
  const [createUserWithEmailAndPassword, user, loading, emailPassError] =
    useCreateUserWithEmailAndPassword(auth);

  // handel Signup
  const handelSignup = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    // console.log(error);
    console.log(email, pass);
    createUserWithEmailAndPassword(email, pass)
  };
  //   errors
  useEffect(()=>{
    const error = emailPassError;
    if(error){
      setErrors(error?.message)
    }
  },[emailPassError])

  // loading 
  if(loading){
    <Loading></Loading>
  }
  return (
    <div className="main-Signup-container">
      <div className="Signup-container">
        <h1>Signup</h1>
        <hr />
        <form onSubmit={handelSignup}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pass" placeholder="Password" required />
          <p>{errors}</p>
          <input className="Signup-btn" type="submit" value={"Signup"} />
        </form>
        <p>
          Already have an account{" "}
          <strong>
            <Link to="/login">LogIn</Link>
          </strong>{" "}
        </p>
        <p className="or">Or</p>
        <div className="google-btn">
          <p>Continue With Google</p>
        </div>
        <p className="terms"><strong>Note:</strong> By <strong>SignUp</strong> you are agreeing with our <strong>Terms and Conditions</strong> </p>
      </div>
    </div>
  );
};

export default Signup;
