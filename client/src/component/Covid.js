import styled from "styled-components";
const Covid = () => {
  return (
    <>
      <Main>
        <Div>Coronavirus (COVID-19):‍</Div>
        <Container>
          {" "}
          Specific services implemented to meet your needs! If you have the
          following symptoms: fever, cough or difficulty breathing and think
          that you may have been infected with COVID-19,{" "}
          <Span>call 1 877 644-4545</Span> toll-free. Information agent will
          provide appropriate instructions.Have any questions about COVID-19? Go
          toQuébec.ca/coronavirus
        </Container>
        <Div>On Arrival:</Div>
        <Container>
          {" "}
          Please wear a mask Review our COVID-19 screening questions
        </Container>
      </Main>
    </>
  );
};
export default Covid;
const Main = styled.div`
  margin-top: 150px;
  color: #1e3d58;
  text-align: center;
  padding-left: 200px;
  padding-right: 200px;
`;
const Div = styled.div`
  font-weight: bold;
  padding-top: 10px;

  font-size: 30px;
`;
const Span = styled.span`
  font-weight: bold;
`;
const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
  font-size: 25px;
`;
