import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom"; // Import Navigate
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterStyles.css';

const Register = () => {
    const [formData, setFormData] = useState({
        userName: '',
        userType: '',
        email: '',
        password: '',
        mobile: ''
    });

    const [errors, setErrors] = useState({});
    const [responseMessage, setResponseMessage] = useState('');
    const [redirectToLogin, setRedirectToLogin] = useState(false); // State to manage redirection

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.userName.trim()) {
            errors.userName = 'Username is required';
        }
        if (!formData.userType.trim()) {
            errors.userType = 'User type is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        }
        if (!formData.mobile.trim()) {
            errors.mobile = 'Mobile is required';
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            errors.mobile = 'Mobile number is invalid';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:8080/api/v1/Register/save', formData);
                console.log('Response:', response.data);
                setResponseMessage('User registered successfully');
                setRedirectToLogin(true); // Set redirection state to true
            } catch (error) {
                console.error('Error registering user:', error);
                setResponseMessage('Error registering user. Please try again.');
            }
        }
    };

    // Redirect to login page if redirectToLogin is true
    if (redirectToLogin) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <Container fluid className="register-container">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <div className="register-form">
                            <h2><center>User Registration</center></h2>
                            <Form onSubmit={handleSubmit} noValidate>
                                {responseMessage && <Alert variant="success">{responseMessage}</Alert>}
                                <Form.Group controlId="userName">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="userName" 
                                        value={formData.userName} 
                                        onChange={handleChange} 
                                        isInvalid={!!errors.userName}
                                        placeholder="Enter Your Name" 
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.userName}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="userType">
                                    <Form.Label>User Type</Form.Label>
                                    <Form.Control 
                                        as="select" 
                                        name="userType" 
                                        value={formData.userType} 
                                        onChange={handleChange} 
                                        isInvalid={!!errors.userType}
                                    >
                                        <option value="">Select your user type</option>
                                        <option value="Patient">Patient</option>
                                        <option value="Doctor">Doctor</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.userType}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        isInvalid={!!errors.email}
                                        placeholder="Enter Your email" 
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        name="password" 
                                        value={formData.password} 
                                        onChange={handleChange} 
                                        isInvalid={!!errors.password}
                                        placeholder="Enter password" 
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="mobile">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="mobile" 
                                        value={formData.mobile} 
                                        onChange={handleChange} 
                                        isInvalid={!!errors.mobile}
                                        placeholder="Enter Your Mobile Number" 
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
                                </Form.Group>
                                <div className="text-center">
                                    <Button variant="primary" type="submit">Register</Button>
                                </div>
                            </Form>
                            <div className="text-center mt-3">
                                Already have an account? <Link to="/login">Login</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;
