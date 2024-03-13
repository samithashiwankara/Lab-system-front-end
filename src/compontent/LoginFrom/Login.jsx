import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './LoginStyle.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault(); // Prevent default form submission

    try {
      // Make a POST request to your backend API endpoint for login
      const response = await axios.post(
        "http://localhost:8080/api/v1/Users/login",
        {
          email: email,
          password: password
        }
      );

      // Handle the response
      if (response.data.success) {
        const userType = response.data.userType;

        if (userType === "admin") {
          navigate("/AdminHome");
        } else if (userType === "doctor") {
          navigate("/DoctorHome");
        } else {
          navigate("/UserHome");
        }
      } else {
        alert("Incorrect email or password.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred while logging in.");
    }
  }

  return (
    <Container fluid className="login-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="login-form">
            <h2 className="text-center">Login</h2>
            <Form onSubmit={login} noValidate>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
