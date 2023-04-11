import styled from "styled-components";
const ConfirmationSignUp = ({ formData, message }) => {
  return (
    <Container>
      <Text>ConfirmationSignUp </Text>
      <Text>SignUP successfully !!</Text>
      <Text>Username: {formData.username}</Text>
      <Text>Name: {formData.name}</Text>
      <Text>Age: {formData.age}</Text>
      <Text>Gender: {formData.gender}</Text>
      <Text>Address: {formData.address}</Text>
      <Text>Phone: {formData.phone}</Text>
      <Text>Email: {formData.email}</Text>
      <Text>Medical History: {formData.medical_history}</Text>
    </Container>
  );
};
export default ConfirmationSignUp;
const Container = styled.div`
  margin-top: 200px;
  text-align: center;
  background-color: #fafafa;
  width: 400px;
  border: 2px solid #fafafa;
  margin-left: 450px;
  margin-bottom: 100px;
  color: #007f4e;
`;
const Text = styled.h3``;
