import styled from "styled-components";

const Contact = () => {
  return (
    <>
      <Conatiner>
        <Main>Our offices </Main>
        <Div>
          {" "}
          1213 Saint Mark, Montreal ,(Quebec),H3G 1C1telephone: 438-821 568
        </Div>
        <Div>
          Get in touch with the HCC team! Please refrain from sharing any
          personal, medical information with our administrative staff. Details
          from your personal conditions are not necessary for administrative
          purposes and should only be shared through the proper channels with
          your healthcare professionals.
        </Div>{" "}
        <Main>www.health@centerHCC.com</Main>
      </Conatiner>
    </>
  );
};
export default Contact;
const Conatiner = styled.div`
  color: #007f4e;
  text-align: center;
  margin-top: 150px;
  margin-bottom: 100px;
`;
const Main = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 10px;
`;
const Div = styled.div`
  font-size: 18px;
  padding: 10px;
`;
