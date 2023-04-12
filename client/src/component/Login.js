import styled from "styled-components";
import { Link } from "react-router-dom";
import admin from "../../src/admin.jpg";

const Login = () => {
  return (
    <>
      <Container>
        <Div>
          <Link to="/login/patientsignin">
            <Img src="patient.jpeg" />
            <H3>Login Like A Patient</H3>
          </Link>
        </Div>
        <Div>
          <Link to="/login/doctorsignin">
            <Img src="doctor.webp" />

            <H3> Login Like A Doctor</H3>
          </Link>
        </Div>
        <Div>
          <Link to="/login/adminsignin">
            <Img src={admin} />
            <H3> Login Like Admin</H3>
          </Link>
        </Div>
      </Container>
      <Link to="/SignUp">
        <SignUP>SignUp</SignUP>
      </Link>
    </>
  );
};
export default Login;
// const Text = styled.h3`
//   text-align: center;
//   padding-top: 100px;
//   font-size: 25px;
// `;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 150px;
  position: relative;
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
  margin-right: 20px;
  margin-top: 30px;
  display: block;
  border: 2px solid #007f4e;
  border-radius: 4px;
  &:hover {
    transform: scale(1.02);
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  text-align: center;
  margin-top: 100px;
  /* padding-bottom: 300px; */
`;
const H3 = styled.h3`
  position: absolute;
  bottom: 0;
  width: 233px;
  text-align: center;
  z-index: 1;
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 0px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background-color: #007f4e;
`;
const SignUP = styled.div`
  border: 2px solid #007f4e;
  width: 100px;
  height: 40px;
  font-size: 25px;
  margin-left: 650px;
  margin-top: 50px;
  text-align: center;
  margin-bottom: 300px;
  color: #007f4e;
  &:hover {
    background-color: #007f4e;
    color: white;
  }
`;
