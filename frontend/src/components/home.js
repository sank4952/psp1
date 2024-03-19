import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="containe" style={{backgroundImage:'url(./1.jpeg.jpg)'}} >
      <div className="background-image" />
      <div className="buttons">
        <Link to="/SignIn" className="button">Sign In</Link>
        <span className="space" />
        <Link to="/SignUp" className="button">Sign Up</Link> 
      </div>
    </div>
  );
};

export default Home;
