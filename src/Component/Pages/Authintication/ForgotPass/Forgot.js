// this is a same page a login page so i did nto change the names
import React, { useEffect, useState } from "react";
import "./Forgot.css";
import {
  useAuthState,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { auth } from "../firebase-init";
import Loading from "../../Genarel/Loading/Loading";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Login = () => {
  const [user] = useAuthState(auth);
  // error state
  const [errors, setErrors] = useState("");
  // user
  // react firebase hook
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  // handel login
  const handelReset = async (event) => {
    setErrors("");
    event.preventDefault();
    const email = event.target.email.value;
    
    sendPasswordResetEmail(email);
    
    if(resetError){
      toast.error('error')
    }
    if(!resetError){
      toast.success('Chack Your Email Or Try Again')

    }
  };
  //   errors
  useEffect(() => {
    const error = resetError;
    if (error) {
      setErrors(error?.message);
      return;
    }
  }, [resetError]);

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
  if (sending) {
    return <Loading></Loading>;
  }
  return (
    <div className="main-login-container">
      <div className="login-container">
        <h3>Reset Password</h3>
        <hr />
        <Toaster position="top-right" reverseOrder={true} />
        <form onSubmit={handelReset}>
          <input type="email" name="email" placeholder="Email" required />
          <p>{errors}</p>
          <input className="login-btn" type="submit" value={"Send"} />
        </form>
      </div>
    </div>
  );
};

export default Login;
