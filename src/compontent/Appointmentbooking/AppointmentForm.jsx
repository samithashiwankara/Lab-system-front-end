import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './AppointmentForm.css'; // Import your CSS file for further styling

const AppointmentForm = () => {
  // State variables for form fields
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [appDate, setAppDate] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [checkingType, setCheckingType] = useState('');
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    const errors = {};
    if (!clientName.trim()) {
      errors.clientName = 'Client name is required';
    }
    if (!clientEmail.trim()) {
      errors.clientEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(clientEmail)) {
      errors.clientEmail = 'Email is invalid';
    }
    if (!clientPhone.trim()) {
      errors.clientPhone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(clientPhone)) {
      errors.clientPhone = 'Phone number is invalid';
    }
    if (!checkingType.trim()) {
      errors.checkingType = 'Checking type is required';
    }
    if (!appDate.trim()) {
      errors.appDate = 'Appointment date is required';
    }
    if (!dateTime.trim()) {
      errors.dateTime = 'Appointment time is required';
    }

    // Set errors if any
    setErrors(errors);

    // If no errors, submit the form
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch("http://localhost:8080/api/v1/Appointments/save/appointments", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            clientName,
            clientEmail,
            clientPhone,
            appDate,
            dateTime,
            checkingType,
          }),
        });
        if (!response.ok) {
          throw new Error('Failed to submit appointment');
        }
        console.log('Form submitted successfully');
        // Navigate to UserHome page
        window.location.href = '/UserHome'; // This line navigates to UserHome page
      } catch (error) {
        console.error('Error submitting form:', error.message);
        // Handle error, e.g., display an error message to the user
      }
    }
  };

  return (
    <div>
      <Container fluid className="Appointment-container">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="appointment-form">
              <h2>Appointment</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="clientName">
                  <Form.Label>Client Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    isInvalid={!!errors.clientName}
                  />
                  <Form.Control.Feedback type="invalid">{errors.clientName}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="clientEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    isInvalid={!!errors.clientEmail}
                  />
                  <Form.Control.Feedback type="invalid">{errors.clientEmail}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="clientPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    isInvalid={!!errors.clientPhone}
                  />
                  <Form.Control.Feedback type="invalid">{errors.clientPhone}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="checkingType">
                  <Form.Label>Checking Type</Form.Label>
                  <Form.Control
                    as="select"
                    value={checkingType}
                    onChange={(e) => setCheckingType(e.target.value)}
                    isInvalid={!!errors.checkingType}
                  >
                    <option value="">Select checking type</option>
                    <option value="Normal Blood checkup">Normal Blood checkup</option>
                    <option value="Sugar level checkup">Sugar level checkup</option>
                    <option value="Cholesterol checkup">Cholesterol</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">{errors.checkingType}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="appDate">
                  <Form.Label>Appointment Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={appDate}
                    onChange={(e) => setAppDate(e.target.value)}
                    isInvalid={!!errors.appDate}
                  />
                  <Form.Control.Feedback type="invalid">{errors.appDate}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="dateTime">
                  <Form.Label>Appointment Time</Form.Label>
                  <Form.Control
                    type="time"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    isInvalid={!!errors.dateTime}
                  />
                  <Form.Control.Feedback type="invalid">{errors.dateTime}</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" style={{ margin: '0 auto', display: 'block' }}>
                  <center>Submit</center>
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AppointmentForm;
