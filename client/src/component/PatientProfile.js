import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import profile from "../../src/profile.png";
// import ConfirmationBook from "./ConfirmationBook";
const PatientProfile = () => {
  const [patient, setPatient] = useState("");
  const [error, setError] = useState("");
  const { patientId } = useParams();
  // const [appointmentData, setAppointmentData] = useState([]);
  // const [appointmentId, setAppointmentId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  console.log("useParams", useParams());
  useEffect(() => {
    fetch(`/api/patients/${patientId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setPatient(data.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch patient's information");
      });
    const message = localStorage.getItem("successMessage");
    if (message) {
      setSuccessMessage(message);
    }
  }, [patientId]);
  //fetch
  // useEffect(() => {
  //   fetch(`http://localhost:9999/api/appointment/${appointmentId}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Appointment data:", data.data);
  //       setAppointmentData(data.data);
  //     })

  //     .catch((error) => {
  //       console.error("Error fetching appointment data:", error);
  //     });
  // }, [appointmentId]);
  const handleBookAppointment = () => {
    window.location.href = `/patients/${patientId}/appointment`;
  };
  if (error) {
    return <div>{error}</div>;
  }

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <Profile>
      <Heade> Patient Profile </Heade>
      <Table>
        <tbody>
          <tr>
            <td rowSpan="8">
              <Img src={profile} />
            </td>
            <td>Name:</td>
            <td>{patient.name}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{patient.age} years old</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{patient.gender}</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>{patient.address}</td>
          </tr>

          <tr>
            <td>Phone:</td>
            <td>{patient.phone}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{patient.email}</td>
          </tr>

          <tr>
            <td>Medical History</td>
            <td>{patient.medical_history}</td>
          </tr>
        </tbody>
      </Table>{" "}
      <p>{successMessage}</p>
      <Button onClick={handleBookAppointment}>Book A ppointment </Button>
    </Profile>
  );
};

export default PatientProfile;
const Profile = styled.div`
  margin-top: 200px;
  text-align: center;
`;
const Heade = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
`;
const Table = styled.table`
  text-align: left;
  margin: 0 auto;
  td {
    padding: 5px;
  }
`;
const Button = styled.button`
  margin-top: 50px;
  margin-left: 70px;
  margin-bottom: 50px;
  border: 2px solid #02093b;
  height: 70px;
  background-color: white;
  color: #02093b;
  border-radius: 5px;
  &:hover {
    color: white;
    background-color: #02093b;
    cursor: pointer;
  }
`;
