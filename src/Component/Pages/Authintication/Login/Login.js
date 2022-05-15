import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase-init';
import Loading from "../../Genarel/Loading/Loading";

const Login = () => {
    // error state
  const [errors, setErrors] = useState('')
    // user
    const [user] = useAuthState(auth);
  // react firebase hook
  const [signInWithEmailAndPassword, epUser, loading, emailPassError] =
    useSignInWithEmailAndPassword(auth);

  // handel login
  const handelLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    console.log(email, pass);
    signInWithEmailAndPassword(email, pass)
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
  //page navigation
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);
  return (
    <div className="main-login-container">
      <div className="login-container">
        <h1>LOGIN</h1>
        <hr />
        <form onSubmit={handelLogin}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pass" placeholder="Password" required />
          <Link to="/">
            <strong>Forgot Password</strong>
          </Link>
          <p>{errors}</p>
          <input className="login-btn" type="submit" value={"LogIn"} />
        </form>
        <p>
          Not A Member{" "}
          <strong>
            <Link to="/signup">SignUp</Link>
          </strong>{" "}
        </p>
        <p className="or">Or</p>
        <div className="google-btn">
          <p>Continue With Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
