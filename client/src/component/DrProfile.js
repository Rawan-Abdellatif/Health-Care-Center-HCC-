import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import doctor1 from "../../src/doctor1.avif";

import styled from "styled-components";
const DrProfile = () => {
  const [doctor, setDoctor] = useState("");
  const [error, setError] = useState("");
  const [appointments, setAppointments] = useState([]);

  const { doctorId } = useParams();
  useEffect(() => {
    fetch(`/api/doctors/${doctorId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setDoctor(data.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch doctor's information");
      });
  }, [doctorId]);
  useEffect(() => {
    fetch(`/api/doctors/${doctorId}/appointments`)
      .then((response) => response.json())
      .then((data) => {
        console.log("appointments data", data);
        setAppointments(data.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch doctor's appointments");
      });
  }, [doctorId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Profile>
        <Heade> Doctor Profile </Heade>
        <Table>
          <tbody>
            <tr>
              <td rowSpan="8">
                <Img src={doctor1} />
              </td>
            </tr>
            <tr>
              <td> Name :{doctor.name}</td>
            </tr>
            <tr>
              <td> Specialty:{doctor.specialty}</td>
            </tr>
            <tr>
              <td> Email:{doctor.email}</td>
            </tr>
            <tr>
              <td> Phone:{doctor.phone}</td>
            </tr>
          </tbody>
        </Table>
        My Schedule
        <AppointmentsTable>
          <thead>
            <tr>
              <th> Date </th>
              <th> Time </th>
              <th> Patient Id </th>
              {/* <th> Patient Email </th> */}
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.date}</td>
                <td>{appointment.hour}</td>
                <td>{appointment.patient_id}</td>
                {/* <td>{appointment.patientEmail}</td> */}
              </tr>
            ))}
          </tbody>
        </AppointmentsTable>
      </Profile>
    </>
  );
};

export default DrProfile;

const Profile = styled.div`
  margin-top: 200px;
  text-align: center;
  margin-bottom: 100px;
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
  font-weight: bold;
  margin: 0 auto;

  td {
    padding: 5px;
  }
`;
const AppointmentsTable = styled.table`
  margin-left: 600px;
  font-weight: bold;
  Table {
    margin-top: 10px;
  }
  td {
    margin-top: 10px;
    padding: 10px;
  }
`;
