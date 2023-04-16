import styled from "styled-components";
const OurStaff = () => {
  return (
    <Container>
      <Img src="ourstaff.jpg" />
      <Div>
        Although the face of our clinic looks different, many of the faces on
        the inside remain the same. Several of our staff members have been
        working here for over a decade! We value our relationship with our staff
        members as much we value our relationship with our patients. We believe
        with happier, healthier staff members we are able to provide you with
        the care you deserve to keep you happier and healthier. A familiar face
        goes a long way. We take pride when you recognize our staff members, as
        they will certainly recognize you!{" "}
      </Div>
    </Container>
  );
};
export default OurStaff;
const Div = styled.div`
  color: #1e3d58;
  padding-left: 20px;
  margin-right: 50px;
  font-size: 20px;
`;
const Img = styled.img`
  width: 300px;
  height: 200px;
`;
const Container = styled.div`
  margin-top: 200px;
  margin-left: 150px;
  display: flex;
  flex-direction: row;
  margin-bottom: 200px;
`;
