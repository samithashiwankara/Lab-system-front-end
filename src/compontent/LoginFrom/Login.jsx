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

    // Validate email and password
    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password.");
      return;
    }

    console.log("message1 ")
    try {
      const response = await axios.post(
        "http://localhost:80/api/v1/Users/login",
        {
          email: email,
          password: password,
        }
      );

      console.log("message2 ",response.data)

      console.log(response.data);
      if (response.data.message === "Email not exists") {

        console.log("message3")
        alert("Email does not exist");
      } else if (response.data.message === email) {
        // Check if the user is an admin

        console.log("message 4")

        const isAdmin = email === "admin@example.com"; // Replace with your admin email
        const isDoctor = response.data.usertype === "doctor";
        
        if (isAdmin) {
          navigate("/Admin");
        } else if (isDoctor) {
          navigate("/DoctorHome");
        } else {
          navigate("/UserHome");
        }
      } else {
        console.log("message  5")
        alert("Incorrect Email and Password not match");
      }

    //   if (!response.data.status) {
    //     alert("Incorrect Email and Password not match"); // Adjusted condition based on your actual use case
    // } else {
    //     // Since 'message' contains an email, it's unclear how to determine if the user is admin or doctor
    //     // You might need additional data in your response to make this determination
    //     const isAdmin = response.data.message === "admin@example.com"; // Example check, adjust based on actual logic
    //     // Assuming additional info in the response to identify the user type
    //     const isDoctor = response.data.usertype === "doctor"; // Ensure your response includes 'usertype' or similar
        
    //     if (isAdmin) {
    //         navigate("/Admin");
    //     } else if (isDoctor) {
    //         navigate("/DoctorHome");
    //     } else {
    //         navigate("/UserHome");
    //     }
    // }

    } catch (error) {
      console.error(error);
      console.log("message ",error.response)
      alert("An error occurred while logging in.");
    }
  }

  return (
    <>
      <Container fluid className="login-container">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="login-form">
              <h2 className="text-center"><center>Login</center></h2>
              <Form onSubmit={login} noValidate>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
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
    </>
  );
}

export default Login;
