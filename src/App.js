import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./compontent/RegisterFrom/Register";
import Login from "./compontent/LoginFrom/Login";
import AppointmentForm from "./compontent/Appointmentbooking/AppointmentForm";
import Home from "./compontent/Home/Home";
import UserHome from "./compontent/Userlogin/UserHome";
import PaymentDetails from "./compontent/Payment/PaymentDetails"
import Admin from "./compontent/Admin/Admin";
import GetUsers from "./compontent/Get Users/GetUsers";
import GetAppointments from "./compontent/GetAppointment/Getappointment";
import DoctorHome from "./compontent/DoctorHome/DoctorHome";
import DoctorAppointment from "./compontent/DoctorAppointment/DoctorAppointment";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointmentbooking" element={<AppointmentForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/pay" element={<PaymentDetails />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Getusers" element={<GetUsers />} />
          <Route path="/Getallappointment" element={<GetAppointments />} />
          <Route path="/DoctorHome" element={<DoctorHome />} />
          <Route path="/DoctorAppointment" element={<DoctorAppointment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
