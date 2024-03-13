import React from 'react';
import './UserHome.css'; // Import the CSS file for Home component
import { Link } from "react-router-dom";

const UserHome = () => {
 return (
  <div>
    <nav className="navbar">
      <h className="logo">Lab System</h>
      <ul>
        <li><a href="/Home">Home</a></li>
        <li><a href="/appointmentbooking">GetAppoinment</a></li>
    
      </ul>
    </nav>
    <div className="home-content">
      <div className="right-bg">
        <img className="position-absolute w-100 h-100 rounded" src="E:\React\lab-frontend\src\assets\lab image.jpg" style={{ objectFit: 'cover' }} alt="Right background" />
      </div>
      <div className="text-content">
        <h1>Best Healthcare Solution </h1>
        <h1>In Your City</h1>
        <div className="button-container">
          <Link to="/appointmentbooking" className="btn btn-primary mr-4">GetAppoinment</Link>
          <Link to="/pay" className="btn btn-secondary">Payment</Link>
        </div>
      </div>
    </div>
  </div>
 );
}

export default UserHome;
