
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';
import axios from 'axios';

const SignUp = () => {
  const [signindata, setSignindata] = useState({ email: '', password: '', confirmPassword: '',username:'' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (signindata.password !== signindata.confirmPassword) {
      setErrorMessage('Passwords do not match. Please enter correct passwords.');
      return;
    }
  
    axios.post('http://localhost:5000/addsignin', { signindata })
      .then((res) => {
        console.log(res.data);
        alert('You have successfully signed up!');
        navigate('/signin');
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.error) {
          setErrorMessage(error.response.data.error);
        } else {
          setErrorMessage('Sign-in failed. Please try again.');
        }
      });
  };


  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <br />
        <input type="email" placeholder="Enter Email" name="email" value={signindata.email} onChange={(e) => setSignindata({ ...signindata, email: e.target.value })} required className="signup-input" />
        <br />
        <input type="text" placeholder="Create Username" name="Username" value={signindata.username} onChange={(e) => setSignindata({ ...signindata, username: e.target.value })} required className="signup-input" />
        <br />
        <input type="password" placeholder="Create Password" name="password" value={signindata.password} onChange={(e) => setSignindata({ ...signindata, password: e.target.value })} required className="signup-input" />
        <br />
        <input type="password" placeholder="Confirm Password" name="confirmPassword" value={signindata.confirmPassword} onChange={(e) => setSignindata({ ...signindata, confirmPassword: e.target.value })} required className="signup-input" />
        <br />
        <center><input type="submit" value="Submit" className="signup-button" /></center>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <br />
      <Link to="/SignIn" className="signin-link">Already have an account? Sign in here</Link>
    </div>
  );
};

export default SignUp;
