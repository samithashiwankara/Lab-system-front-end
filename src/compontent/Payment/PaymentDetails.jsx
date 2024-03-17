// PaymentDetails.js
import React from 'react';
import './Paymentform.css'; // Import the CSS file for styling
import { Link } from "react-router-dom";

const PaymentDetails = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">ABC Lab System</h1>
        <ul>
          <li><a href="/userhome">Home</a></li>
          <li><a href="/Home">Log out</a></li>
        </ul>
      </nav>
      <div className="container1">
        <h1 className="h1">Payment</h1>
        <form id="payment-form">
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" placeholder="Enter card number" className="input-field" />
          </div>
          <div className="form-group">
            <label htmlFor="expiry">Expiration Date</label>
            <input type="text" id="expiry" placeholder="MM/YY" className="input-field" />
          </div>
          <div className="form-group">
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" placeholder="Enter CVC" className="input-field" />
          </div>
          <div className="button-container1">
          <Link to="/userhome" className="btn btn-secondary">Pay Now</Link>
          </div>
          <div id="error-message" className="error-message"></div>
        </form>
      </div>
    </>
  );
};

export default PaymentDetails;
