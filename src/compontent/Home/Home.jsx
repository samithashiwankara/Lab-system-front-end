import React from 'react';
import { Link } from "react-router-dom";
import './Home.css'; // Import the CSS file for Home component


const Home = () => {
 return (
  <div>
    <nav className="navbar">
      <h className="logo">ABC Lab System</h>
      <ul>
        <li><a href="/Home">Home</a></li>
        <li><a href="/Login">Login</a></li>
        <li><a href="/register">Sign Up</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">About us</a></li>
      </ul>
    </nav>
    <div className="home-content">
      <div className="right-bg">
        <img className="position-absolute w-100 h-100 rounded" src="lab-frontend/src/assets/lab image.jpg" style={{ objectFit: 'cover' }} alt="Right background" />
      </div>
      <div className="text-content">
        <h1 c>Best Healthcare Solution </h1>
        <h1>In Your City</h1>
        <div className="button-container">
          <Link to="/Login" className="btn btn-primary mr-4">Login</Link>
          <Link to="/register" className="btn btn-secondary">Sign Up</Link>
        </div>
      </div>
    </div>
  </div>
 );
}

export default Home;
