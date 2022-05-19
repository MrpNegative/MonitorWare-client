import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../Authintication/firebase-init';
import { signOut } from "firebase/auth";

const Nav = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand " to='/' ><span className='color'>monitorWare</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/' >Home</Link>
        </li>
        
        {user ? (
          <>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/additem' >Add Item</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={`/myitems/${email}`} >My Items</Link>
        </li>
          </>
        ):''}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/blog" >Blog</Link>
        </li>
      </ul>
      <div className="d-flex">
        {user ? (
          <button onClick={()=>{signOut(auth)}} className="btn fw-bold btn-light btn-outline-success" >LogOut</button>

        ) : (
          <button className="btn fw-bold btn-light btn-outline-success" ><Link to="/login">LogIn</Link></button>
        )}
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Nav;