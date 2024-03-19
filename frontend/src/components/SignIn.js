import React, { useState } from 'react';

import { Link, Navigate,Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './SignIn.css'; // Import the CSS file for styling
import ForgotPassword from './forgotpassword';
const SignIn = () => {
  const [auth, setAuth] = useState(false);
  const [logindata, setLogindata] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    console.log(logindata);
    e.preventDefault();
    axios.post('http://localhost:5000/addlogin', { logindata })
      .then(() => {
        setAuth(true);
      })
      .catch(() => {
        alert('Enter correct username and password.');
      });
  };

  if (auth) {
    return <Navigate to="/room" />;
  }

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleLogin}>
        <br />
        <input type="text" placeholder="Enter Username" name="username" className="signin-input" onChange={(e) => setLogindata({ ...logindata, username: e.target.value })} />
        <br /><br></br>
        <input type="password" placeholder="Enter Password" name="password" className="signin-input" onChange={(e) => setLogindata({ ...logindata, password: e.target.value })} />
        <br /><br></br>
        <center><input type="submit" value="Submit" className="submit-button" /></center><br></br>
        {/* <Link to="/forgotpassword">Forgot Password?</Link> */}
        <button className='ab'>
          <Link to="/forgotpassword"  style={{ color: 'white',textDecorationLine:'none' }}>Forgot Password</Link>
        </button>

        <Routes>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        </Routes>
        <br />
        <Link to="/SignUp" className="signup-link">Don't have an account? Sign up here</Link>
        
      </form>
    </div>
  );
}; 

export default SignIn;
