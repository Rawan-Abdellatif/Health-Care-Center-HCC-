import React, { useState } from "react";
import styled from "styled-components";
import ConfirmationSignUpdoctor from "./ConfirmationSignUpdoctor";
import { useNavigate, useParams } from "react-router-dom";

const DoctorForm = ({ setAdminId }) => {
  const { adminId } = useParams();
  console.log("adminId in DoctorForm", adminId);
  setAdminId(adminId);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    phone: "",
    email: "",
    specialty: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.username.trim()) {
      errors.username = "Username is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    fetch("/api/doctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,

        name: formData.name,
        password: formData.password,
        phone: formData.phone,
        email: formData.email,
        specialty: formData.specialty,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data in signUp", data);

        if (
          data.message ===
          "Username and password combination already used. Please choose a different username and/or password."
        ) {
          alert(data.message);
        } else {
          setSuccessMessage(
            `Sign up successful! Username: ${formData.username}, Name: ${formData.name}, Age: ${formData.age}, Gender: ${formData.gender}, Address: ${formData.address}, Phone: ${formData.phone}, Email: ${formData.email}, Medical History: ${formData.medical_history}`
          );
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Something went wrong. Please try again later.");
      });
  };

  const handleSignUp = () => {
    if (successMessage !== "") {
      navigate("/confirmationSignUpdoctor", {
        state: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          specialty: formData.specialty,
        },
      });
    }
  };
  if (successMessage !== "") {
    return (
      <ConfirmationSignUpdoctor formData={formData} message={successMessage} />
    );
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Text>SignUP Form</Text>
      <Container>
        <Div>
          <Label>Username</Label>
          <Input
            type="text"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Div>
        <Div>
          <Label>Password</Label>
          <Input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            autocomplete="current-password"
          />
        </Div>
        <Div>
          <Label>Name</Label>
          <Input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Div>

        <Div>
          <Label>Phone</Label>
          <Input
            type="text"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Div>
        <Div>
          <Label>Email</Label>
          <Input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Div>
        <Div>
          <Label>specialty</Label>

          <Input
            type="specialty"
            name="specialty"
            className="form-control"
            value={formData.specialty}
            onChange={handleChange}
            required
          />
        </Div>
        <Button type="submit" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Container>
    </Form>
  );
};

export default DoctorForm;
const Form = styled.form`
  text-align: center;
  margin-top: 150px;
  margin-bottom: 100px;
`;
const Text = styled.h1``;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const Input = styled.input`
  height: 20px;
  width: 50%;
  border: 2px solid #007f4e;
  margin-top: 5px;
`;

const Container = styled.div`
  background-color: #fafafa;
  border: 2px solid lightgray;
  width: 400px;
  padding: 20px;
  margin-left: 450px;
`;
const Label = styled.label`
  padding: 5px;
  width: 25%;
`;
const Textarea = styled.textarea`
  height: 80px;
  width: 185px;
  border: 2px solid #007f4e;
  margin-left: 3px;
  resize: none;
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
const SuccessMessage = styled.h3``;
const Select = styled.select`
  height: 30px;
  width: 200px;
  border: 2px solid #007f4e;
  margin-top: 5px;
`;
const Option = styled.option``;
