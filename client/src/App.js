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
const App = () => {
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
          <Route path="/login/doctorsignin" element={<DoctorSignin />} />
          <Route path="/login/doctorsignin/:doctorId" element={<DrProfile />} />
          <Route
            path="/login/patientsignin/:patientId"
            element={<PatientProfile />}
          />
          <Route
            path="/patients/:patientId/appointment"
            element={<AppointmentForm />}
          />
          <Route path="/SignUp" element={<SignupForm />} />
          <Route path="/ConfirmationSignUp" element={<ConfirmationSignUp />} />
          <Route
            path="/confirmationBook/:appointmentId"
            element={<ConfirmationBook />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
