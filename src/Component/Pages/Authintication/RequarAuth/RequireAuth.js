import React from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Genarel/Loading/Loading";
import { auth } from "../firebase-init";

const RequireAuth = ({ children }) => {
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);

  const location = useLocation();
  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return <div className='text-center my-5'>
        <h1>Your Email Is Not Verified</h1>
        <h3>To Continue Please Verify Your Email</h3>
        <button onClick={()=>{sendEmailVerification()
        toast('Verification link send')}} className="mt-3 btn btn-dark">Send Verification link</button>
        <p>{error?.message}</p>
        <p>After you verify the email please reload the page.</p>
    </div>
}

return children;
};

export default RequireAuth;
