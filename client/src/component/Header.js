import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Logo2 from "../../src/Logo2.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <Div>
        <NavLink to="/">
          <Img src={Logo2} />
        </NavLink>
        <Main>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login </NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </Main>
      </Div>
    </HeaderWrapper>
  );
};
export default Header;
const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 2;
  padding: 10px;
  border-bottom: 1px solid #02093b;
  background-color: #02093b;
`;
const Img = styled.img`
  width: 100px;
  /* height: 80px; */
  padding-top: 2px;
  border-radius: 350px;
  border: 2px solid #02093b;
  &:hover {
    background-color: none;
  }
`;
const Div = styled.nav`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
    padding: 0 10px;
    font-weight: bold;
    &.active {
      color: white;
    }
    &:hover {
      color: #02093b;
      background-color: white;
      border-radius: 5px;
      font-size: 29px;
    }
  }
`;

const Main = styled.div`
  padding-left: 700px;
  margin-top: -50px;
  color: white;
  font-size: 20px;
`;
