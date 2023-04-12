import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Homepage from "./component/Homepage";
import Header from "./component/Header";
import GlobalStyle from "./GlobalStyle";
import Login from "./component/Login";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Info from "./Info";
import WorkingHours from "./component/WorkingHours";
import Covid from "./component/Covid";
import OurStaff from "./component/OurStaff";
import Footer from "./component/Footer";
import PatientSignin from "./component/PatientSignin";
import DoctorSignin from "./component/DoctorSignin";
import PatientProfile from "./component/PatientProfile";
import DrProfile from "./component/DrProfile";
import AppointmentForm from "./component/AppointmentForm";
import SignupForm from "./component/SingUpForm";
import ConfirmationSignUp from "./component/ConfirmationSignUp";
import ConfirmationBook from "./component/ConfirmationBook";
import AdminSignin from "./component/AdminSigin";
import AdminProfile from "./component/AdminProfile";
import { useState } from "react";
import DoctorForm from "./component/DoctorForm";
import ConfirmationSignUpdoctor from "./component/ConfirmationSignUpdoctor";
const App = () => {
  const [AppointmentId, setAppointmentId] = useState(null);
  const [adminId, setAdminId] = useState("");
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />

        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info" element={<Info />} />
          <Route path="/working-hours" element={<WorkingHours />} />
          <Route path="/our-staff" element={<OurStaff />} />
          <Route path="/covid-19" element={<Covid />} />
          <Route path="/login/patientsignin" element={<PatientSignin />} />
          <Route path="/login/adminsignin" element={<AdminSignin />} />

          <Route path="/login/doctorsignin" element={<DoctorSignin />} />
          <Route path="/login/doctorsignin/:doctorId" element={<DrProfile />} />
          <Route
            path="/login/patientsignin/:patientId"
            element={<PatientProfile appointmentId={AppointmentId} />}
          />
          <Route
            path="/login/adminsignin/:adminId"
            element={<AdminProfile setAdminId={setAdminId} />}
          />
          <Route
            path="/patients/:patientId/appointment"
            element={<AppointmentForm setAppointmentId={setAppointmentId} />}
          />
          <Route path="/SignUp" element={<SignupForm />} />
          <Route
            path="/login/adminsignin/:adminId/SignUpdoctor"
            element={<DoctorForm setAdminId={setAdminId} />}
          />
          <Route path="/ConfirmationSignUp" element={<ConfirmationSignUp />} />
          <Route
            path="/ConfirmationSignUpdoctor"
            element={<ConfirmationSignUpdoctor adminId={adminId} />}
          />

          <Route
            path="/patients/:patientId/appointment/confirmationBook/:appointmentId"
            element={<ConfirmationBook />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
