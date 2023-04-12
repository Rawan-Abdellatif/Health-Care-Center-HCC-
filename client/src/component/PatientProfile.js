import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import profile from "../../src/profile.png";

const PatientProfile = ({ appointmentId }) => {
  const [patient, setPatient] = useState("");
  const [error, setError] = useState("");
  const { patientId } = useParams();
  const [appointmentData, setAppointmentData] = useState(null);
  const [showAppointment, setShowAppointment] = useState(false);

  // const [appointmentId, setAppointmentId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  // const { appointmentId } = useParams();
  // console.log("appointmentId", appointmentId);
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
  }, [patientId]);
  // console.log("appointmentData", appointmentData);
  useEffect(() => {
    console.log(appointmentId, "appointmentId");
    if (appointmentId) {
      fetch(`http://localhost:9999/api/appointment/${appointmentId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Appointment data in profile :", data.data);
          setAppointmentData(data.data);
        })
        .catch((error) => {
          console.error("Error fetching appointment data:", error);
        });
    }
  }, [appointmentId]);

  const handleBookAppointment = () => {
    window.location.href = `/patients/${patientId}/appointment`;
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!patient && !appointmentData) {
    return <div>Loading...</div>;
  }
  const handleToggleAppointment = () => {
    setShowAppointment(!showAppointment);
  };

  return (
    <Profile>
      <Header>Patient Profile</Header>
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
      </Table>
      {appointmentData && (
        <ConfirmationBook>
          <P>Appointment booked successfully! </P>
          <Button2 onClick={handleToggleAppointment}>
            {showAppointment ? "Hide" : "Show"} Appointment Details
          </Button2>
          {showAppointment && (
            <>
              <p>Date:{appointmentData.date}</p>
              <p>Time: {appointmentData.hour}</p>
            </>
          )}
        </ConfirmationBook>
      )}
      <Button onClick={handleBookAppointment}>Book Appointment</Button>
    </Profile>
  );
};

export default PatientProfile;
const Profile = styled.div`
  margin-top: 200px;
  text-align: center;
`;
const Header = styled.div`
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
  border: 2px solid #007f4e;
  width: 150px;
  height: 40px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  padding: 5px;
  margin-top: 20px;
  margin-left: 210px;
  margin-bottom: 100px;

  color: #007f4e;
  &:hover {
    background-color: #007f4e;
    color: white;
  }
`;
const ConfirmationBook = styled.div`
  margin-left: 170px;
`;
const P = styled.p`
  font-weight: bold;
`;
const Button2 = styled.button`
  border: 2px solid #007f4e;
  width: 150px;
  height: 40px;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  padding: 5px;
  /* margin-top: 40px; */
  margin-left: 40px;
  /* margin-bottom: 100px; */

  color: #007f4e;
  &:hover {
    background-color: #007f4e;
    color: white;
  }
`;
//
