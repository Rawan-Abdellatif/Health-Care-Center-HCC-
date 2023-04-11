import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
const Footer = () => {
  return (
    <Container>
      <Div>
        <div>HCC Health Care Center</div>
        <div>
          <HiLocationMarker />
          3222-Cote des Neige
        </div>
        <div>
          <FaPhoneAlt /> (438)111 333
        </div>
      </Div>
      <Div>
        <div>Foundation</div>
        <div>Donate</div>
        <div>Friends of HCC</div>
      </Div>
      <Div>
        <div>Contact</div>
        <div>
          <AiFillFacebook />
        </div>
        <div>
          <ImInstagram />
        </div>
      </Div>
    </Container>
  );
};
export default Footer;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-left: 250px; */
  font-size: 20px;
  background-color: #007f4e;
  width: 100%;
`;
const Div = styled.div`
  color: white;
  margin-top: 35px;
  height: 220px;
  display: flex;
  flex-direction: column;
  padding-left: 240px;
`;
