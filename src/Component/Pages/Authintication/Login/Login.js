import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebase-init';
import Loading from "../../Genarel/Loading/Loading";

const Login = () => {
  const [user] = useAuthState(auth)
    // error state
  const [errors, setErrors] = useState('')
    // user
  // react firebase hook
  const [signInWithEmailAndPassword, epUser, loading, emailPassError] =
    useSignInWithEmailAndPassword(auth);
    //// Google
  const [signInWithGoogle, guser, googleLoading, gmailError] = useSignInWithGoogle(auth);

  // handel login
  const handelLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    signInWithEmailAndPassword(email, pass)
  };
//   errors
useEffect(()=>{
    const error = emailPassError || gmailError;
    if(error){
      setErrors(error?.message)
    }
  },[emailPassError, gmailError])

  //page navigation
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  // loading 
  if(loading || googleLoading){
   return <Loading></Loading>
  }
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
        <div onClick={()=>{signInWithGoogle()}} className="google-btn">
          <p>Continue With Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
