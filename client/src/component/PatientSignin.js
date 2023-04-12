import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function PatientSignin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/patient/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      // If sign-in is successful, save the token to local storage and redirect to the patient profile page
      localStorage.setItem("token", data.data.token);
      navigate(`/login/patientsignin/${data.data.patientId}`);
    } else {
      // If sign-in fails, display an error message
      alert("username or password are not correct");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Div>
        <Label>
          Username
          <Input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Label>
      </Div>
      <Div>
        <Label>
          Password
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Label>
      </Div>
      <Button type="submit">Sign In</Button>
    </Form>
  );
}

export default PatientSignin;
const Form = styled.form`
  padding: 200px; ;
`;
const Label = styled.label`
  width: 50%;
`;
const Input = styled.input`
  height: 20px;
  width: 70%;
  border: 2px solid #007f4e;
  margin-top: 5px;
  margin-left: 5px;
`;
const Button = styled.button`
  border: 2px solid #007f4e;
  width: 150px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  padding: 5px;
  margin-left: 380px;

  color: #007f4e;
  &:hover {
    background-color: #007f4e;
    color: white;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-left: 280px;
`;
