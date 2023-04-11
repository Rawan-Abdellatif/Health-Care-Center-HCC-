import styled from "styled-components";
const Info = () => {
  return (
    <>
      <Div>What personal information does HCC hold about you?</Div>{" "}
      <Container>
        HCC requires you to provide personal information as part of your
        Admission process: either as an inpatient or as an outpatient through
        the Emergency Department and other services. This personal information
        normally includes details such as your name, date of birth, gender,
        marital status and optional information such as nationality, occupation
        and religion. You will also be asked to provide contact details such as
        your home address, postal address, home, work and mobile telephone
        numbers, your fax number and your e-mail address. Other information may
        also include: Details about your health insurance fund or other insurer
        such as Worker’s Compensation or Third Party Details about your hospital
        visit, including your referring and treating doctor or specialist, your
        procedure and your expected length of stay Details about your medical
        condition, including the medication you normally take, your medical
        history, known allergies, your dietary requirements and any significant
        disabilities
      </Container>
    </>
  );
};
export default Info;
const Div = styled.div`
  color: #02093b;
  margin-top: 150px;
  font-weight: bold;
  text-align: center;
  font-size: 25px;
`;
const Container = styled.div`
  margin: 50px;
  padding-top: 10px;
  padding-bottom: 40px;
  font-size: 20px;
`;
