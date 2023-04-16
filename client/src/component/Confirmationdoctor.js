import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Confirmationdoctor = ({ formData }) => {
  const [error, setError] = useState("");
  const { adminId } = useParams();
  // const [admin, setAdmin] = useState("");
  console.log("adminId", adminId);
  // useEffect(() => {
  //   fetch(`/api/admins/${adminId}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("data in Co", data);
  //       // setAdminId(data.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setError("Failed to fetch admin's information");
  //     });
  // }, [adminId]);

  return (
    <Container>
      <Text>ConfirmationSignUp </Text>
      <Text>SignUP successfully !!</Text>
      <Text>Username: {formData.username}</Text>
      <Text>Name: {formData.name}</Text>
      <Text>Phone: {formData.phone}</Text>
      <Text>Email: {formData.email}</Text>
      <Link to={`/login/adminsignin/${adminId}`}>
        <Button>Return to Admin Profile</Button>
      </Link>
    </Container>
  );
};

export default Confirmationdoctor;

const Container = styled.div`
  margin-top: 200px;
  text-align: center;
  background-color: #fafafa;
  width: 400px;
  border: 2px solid #fafafa;
  margin-left: 450px;
  margin-bottom: 100px;
  color: #1e3d58;
`;

const Text = styled.h3``;

const Button = styled.button`
  border: 2px solid #1e3d58;
  width: 150px;
  height: 40px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  padding: 5px;
  color: #1e3d58;

  &:hover {
    background-color: #1e3d58;
    color: white;
  }
`;
