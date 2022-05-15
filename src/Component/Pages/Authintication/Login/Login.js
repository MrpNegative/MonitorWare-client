import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase-init';

const Login = () => {
  // react firebase hook
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // handel login
  const handelLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    console.log(error)
    console.log(email, pass);
    signInWithEmailAndPassword(email, pass)
  };
//   errors 
  

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
