import styled from "styled-components";
import medical from "../../src/medical.jpg";
import minor from "../../src/minor.jpeg";

const Services = () => {
  return (
    <>
      <Main>Our Services </Main>
      <Container>
        <Div>
          <Img src={medical} />
          <H2>Medical general</H2>
        </Div>
        <Div>
          <Img src={minor} />
          <H2>Minor emergencies</H2>
        </Div>
        <Div>
          <Img src="kid-vaccine-clinic.png" />
          <H2>Vaccination clinic</H2>
        </Div>
        <Div>
          {" "}
          <Img src="cardiologist.jpg" />
          <H2>Cardiology</H2>
        </Div>
        <Div>
          {" "}
          <Img src="GeneralSurgery.jpg" />
          <H2>General surgery</H2>
        </Div>
        <Div>
          {" "}
          <Img src="ENT.jpg" />
          <H2>E.N.T</H2>
        </Div>
        <Div>
          {" "}
          <Img src="Dermatologists.jpg" />
          <H2>Dermatology</H2>
        </Div>
        <Div>
          {" "}
          <Img src="endocrinology-.jpg" />
          <H2>Endocrinology</H2>
        </Div>
        <Div>
          {" "}
          <Img src="Gynecology.jpg" />
          <H2>Gynecology</H2>{" "}
        </Div>
        <Div>
          {" "}
          <Img src="Urology.jpg" />
          <H2>Urology</H2>
        </Div>
        <Div>
          {" "}
          <Img src="Neurology.jpg" />
          <H2>Neurology</H2>
        </Div>
        <Div>
          {" "}
          <Img src="Psychology.jpg" />
          <H2>Psychology</H2>
        </Div>
      </Container>
    </>
  );
};
export default Services;
const Main = styled.div`
  color: #1e3d58;
  text-align: center;
  margin-top: 150px;
  font-weight: bold;
  font-size: 30px;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #1e3d58;
  text-align: center;
  margin-left: 200px;
  padding-bottom: 50px;
`;

const Div = styled.div`
  padding: 40px;
  position: relative;
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
  margin-right: 20px;
  margin-top: 30px;
  display: block;
  border: 2px solid #1e3d58;
  border-radius: 4px;
  &:hover {
    transform: scale(1.02);
  }
`;

const H2 = styled.h2`
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
  background-color: #1e3d58;
`;
