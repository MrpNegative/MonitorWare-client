import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='main-login-container'>
            <div className='login-container'>
                <h1>LogIn</h1>
                <form>
                    <input type="email" name='email' placeholder='Email' />
                    <input type="password" name='pass' placeholder='Email' />
                    <Link to='/'><strong>Forgot Password</strong></Link>
                    <input className='login-btn' type="submit" value={'LogIn'} />
                </form>
                <p>Not A Member <strong><Link to='/'>SignUp</Link></strong> </p>
                <p className='or'>Or</p>
                <div className='google-btn'>
                    <p>Continue With Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;