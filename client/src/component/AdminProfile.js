import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import adminprofile from "../../src/adminprofile.jpg";
import styled from "styled-components";

const AdminProfile = () => {
  const [admin, setAdmin] = useState("");
  const [error, setError] = useState("");
  const [patients, setPatients] = useState([]);
  const [showPatientInfo, setShowPatientInfo] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [showDoctorInfo, setShowDoctorInfo] = useState(false);

  const { adminId } = useParams();

  useEffect(() => {
    fetch(`/api/admins/${adminId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setAdmin(data.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch admin's information");
      });
  }, [adminId]);

  useEffect(() => {
    fetch(`/api/patients`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setPatients(data.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch patients' information");
      });
  }, []);

  const togglePatientInfo = () => {
    setShowPatientInfo(!showPatientInfo);
  };

  useEffect(() => {
    fetch("/api/doctors")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setDoctors(data.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch doctors' information");
      });
  }, []);

  const toggleDoctorInfo = () => {
    setShowDoctorInfo(!showDoctorInfo);
  };

  const handleDeletePatient = (patientId) => {
    fetch(`/api/patients/${patientId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setPatients(patients.filter((patient) => patient._id !== patientId));
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to delete patient");
      });
  };
  return (
    <>
      {error && <div>{error}</div>}
      {!admin && <div>Loading...</div>}
      {admin && (
        <Profile>
          <Heade> Admin Profile </Heade>
          <Table>
            <tbody>
              <tr>
                <td rowSpan="8">
                  <Img src={adminprofile} />
                </td>
              </tr>
              <tr>
                <td> Name :{admin.Name}</td>
              </tr>

              <tr>
                <td> Job:{admin.Job}</td>
              </tr>
              <tr>
                <td> Phone:{admin.phone}</td>
              </tr>
            </tbody>
          </Table>
          <Button onClick={togglePatientInfo}>Patient Info</Button>
          {showPatientInfo && (
            <Table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Medical History</th>
                </tr>
                {patients.map((patient) => (
                  <tr key={patient._id}>
                    <td>{patient.name}</td>
                    <td>{patient.phone}</td>
                    <td>{patient.email}</td>
                    <td>{patient.age}</td>
                    <td>{patient.address}</td>
                    <td>{patient.medical_history}</td>
                    <td>
                      <Button onClick={() => handleDeletePatient(patient._id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          <Button onClick={toggleDoctorInfo}>Doctors Info</Button>
          {showDoctorInfo && (
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Specialty</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor) => (
                  <tr key={doctor._id}>
                    <td>{doctor.name}</td>
                    <td>{doctor.specialty}</td>
                    <td>{doctor.phone}</td>
                    <td>{doctor.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Profile>
      )}
    </>
  );
};

export default AdminProfile;

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
  margin: 0 auto;
  td {
    padding: 5;
  }
`;
const Button = styled.button`
  border: 2px solid #007f4e;
  width: 150px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  padding: 5px;

  color: #007f4e;
  &:hover {
    background-color: #007f4e;
    color: white;
  }
`;
