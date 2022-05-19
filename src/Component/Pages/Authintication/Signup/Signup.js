import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Signup.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../firebase-init";
import Loading from "../../Genarel/Loading/Loading";
import useToken from "../../../Hooks/useToken";

const Signup = () => {
  const [user] = useAuthState(auth);
  const [token] = useToken(user)
  // error state
  const [errors, setErrors] = useState("");

  // react firebase hook
  //// send verification
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  ////Email pass
  const [createUserWithEmailAndPassword, epUser, loading, emailPassError] =
    useCreateUserWithEmailAndPassword(auth);
  //// Google
  const [signInWithGoogle, guser, googleLoading, gmailError] =
    useSignInWithGoogle(auth);

  // handel Signup
  const handelSignup = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;
   await createUserWithEmailAndPassword(email, pass);
   await sendEmailVerification()
  };
  //   errors
  useEffect(() => {
    const error = emailPassError || gmailError;
    if (error) {
      setErrors(error?.message);
    }
  }, [emailPassError, gmailError]);

  //navigate
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from);
    }
  }, [token]);

  // loading
  if (loading || googleLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="main-Signup-container">
      <div className="Signup-container">
        <h1>SIGNUP</h1>
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
        <div
          onClick={() => {
            signInWithGoogle();
          }}
          className="google-btn"
        >
          <p>Continue With Google</p>
        </div>
        <p className="terms">
          <strong>Note:</strong> By <strong>SignUp</strong> you are agreeing
          with our <strong>Terms and Conditions</strong>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
