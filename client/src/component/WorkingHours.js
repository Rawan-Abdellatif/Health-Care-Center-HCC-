import styled from "styled-components";
const WorkingHours = () => {
  return (
    <>
      <Main> Working Hours in HCC</Main>
      <Container>
        <Div>Sunday : close</Div>
        <Div>Monday : 8 h to 20 h</Div>
        <Div>Tuesday : 8 h to 20h</Div>
        <Div>Wednesday : 8h to 18 h</Div>
        <Div>Thursday : 8 h to 20 h</Div>
        <Div>Friday : 8 h to 20 h</Div>
        <Div>Saturday : close</Div>
      </Container>
    </>
  );
};
export default WorkingHours;
const Container = styled.div`
  border: 2px solid #007f4e;
  width: 250px;
  text-align: center;
  margin-left: 560px;
  margin-bottom: 200px;
  margin-top: 20px;
`;

const Main = styled.div`
  margin-top: 150px;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  color: #007f4e;
`;
const Div = styled.div`
  font-size: 20px;
  text-align: center;
  color: #007f4e;
`;
