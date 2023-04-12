import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
function ConfirmationBook({ message }) {
  console.log(message, "message");
  const { appointmentId } = useParams();
  const [appointmentData, setAppointmentData] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  console.log("appointmentId", appointmentId);

  useEffect(() => {
    fetch(`http://localhost:9999/api/appointment/${appointmentId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Appointment data:", data.data);
        setAppointmentData(data.data);
      })

      .catch((error) => {
        console.error("Error fetching appointment data:", error);
      });
    const message = localStorage.getItem("successMessage");
    if (message) {
      setSuccessMessage(message);
    }
  }, [appointmentId]);

  return (
    <>
      {appointmentData && (
        <Container>
          <p>Appointment booked successfully! On {successMessage}</p>
          <p>doctorId: {appointmentData.doctor_id}</p>
          <p>patientId :{appointmentData.patient_id}</p>
          {/* <p>{successMessage}</p> */}
          <Link to={`/login/patientsignin/${appointmentData.patient_id}`}>
            <Button>Return to your Profile</Button>
          </Link>
          {/* <p>Date :{appointmentData.date}</p>
              <p>Hour: {appointmentData.hour}</p> */}
        </Container>
      )}
    </>
  );
}

export default ConfirmationBook;

const Container = styled.div`
  margin-left: 470px;
  margin-top: 200px;
  margin-bottom: 100px;
`;
const Test = styled.div`
  margin-top: 100px;
  margin-left: 1000px;
  width: 120px;
`;
const Button = styled.button`
  border: 2px solid #007f4e;
  width: 190px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  margin-left: 40px;
  padding: 5px;
  color: #007f4e;
  &:hover {
    background-color: #007f4e;
    color: white;
  }
`;
