import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorAppointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/Appointments/AllAppointments");
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const deleteAppointment = async (UserID) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/Appointments/DeleteAppointment/${UserID}`);
      alert("Appointment deleted successfully");
      fetchAppointments(); // Refresh the appointment list after deletion
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Lab System</h1>
        <ul>
         <li><a href="/DoctorHome">Back</a></li>
          <li><a href="/Login">Log out</a></li>
        </ul>
      </nav>
      <br />
      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Client Name</th>
            <th scope="col">Client Email</th>
            <th scope="col">Client Phone</th>
            <th scope="col">Appointment Date</th>
            <th scope="col">Date & Time</th>
            <th scope="col">Checking Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.clientName}</td>
              <td>{appointment.clientEmail}</td>
              <td>{appointment.clientPhone}</td>
              <td>{appointment.appDate}</td>
              <td>{appointment.dateTime}</td>
              <td>{appointment.checkingType}</td>
              <td>
                <button type="button" className="btn btn-danger" onClick={() => deleteAppointment(appointment.id)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorAppointment;
