import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Videoplay from "./Videoplay";
const Homepge = () => {
  return (
    <>
      <Container>
        <Videoplay />{" "}
        <Head>
          <H2>
            HCC
            <br /> Where Care Matters Most.
          </H2>
        </Head>
      </Container>
      <Container1>
        <Div1>
          <Link to="/info">
            <Img1 src="patient-info.jpg" />
            <H3>
              <AiOutlineRight /> Patient Info
            </H3>
          </Link>
        </Div1>
        <Div2>
          <Link to="/working-hours">
            <Img1 src="working-hour.jpg" />
            <H4>
              <AiOutlineRight /> Working Hour{" "}
            </H4>
          </Link>
        </Div2>
        <Div3>
          <Link to="/our-staff">
            <Img1 src="our-staff.jpg" />
            <H3>
              {" "}
              <AiOutlineRight />
              Our Staff
            </H3>
          </Link>
        </Div3>
        <Div4>
          <Link to="/covid-19">
            <Img1 src="covid-19.webp" />
            <H4>
              {" "}
              <AiOutlineRight /> Covid-19
            </H4>
          </Link>
        </Div4>
      </Container1>
      <Text>NEWS</Text>
      <Container2>
        <Div6>
          <Img1 src="Harmony-Day.jpg" />
          <h3>
            Harmony Week 2023 This week at Health Care Center(HCC) we are
            celebrating Harmony Week - a time when, across Canada, we recognise
            and celebrate our diversity as a nation. Harmony Week is about
            inclusiveness, respect and se of belonging for everyone.
          </h3>
        </Div6>
        <Div6>
          <Img1 src="Harmony-Day.jpg" />
          <h3>
            Harmony Week 2023 This week at Health Care Center(HCC) we are
            celebrating Harmony Week - a time when, across Canada, we recognise
            and celebrate our diversity as a nation. Harmony Week is about
            inclusiveness, respect and se of belonging for everyone.
          </h3>
        </Div6>
        <Div6>
          <Img1 src="Harmony-Day.jpg" />
          <h3>
            Harmony Week 2023 This week at Health Care Center(HCC) we are
            celebrating Harmony Week - a time when, across Canada, we recognise
            and celebrate our diversity as a nation. Harmony Week is about
            inclusiveness, respect and se of belonging for everyone.
          </h3>
        </Div6>
      </Container2>
    </>
  );
};

export default Homepge;
const Container = styled.div`
  position: relative;
`;
const Img = styled.img`
  padding-top: 100px;
  width: 100%;
  height: 700px;
`;
const Head = styled.div`
  color: #007f4e;
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
const H2 = styled.h2`
  font-size: 70px;
  color: white;
`;
const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 250px;
  color: white;
`;
const Img1 = styled.img`
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
const Div1 = styled.div`
  position: relative;
`;
const Div2 = styled.div`
  position: relative;
`;
const Div3 = styled.div`
  position: relative;
`;
const Div4 = styled.div`
  position: relative;
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
const Text = styled.h3`
  text-align: center;
  color: #007f4e;
  padding-top: 20px;
  font-size: 40px;
`;
const H4 = styled.h4`
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
const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-left: 250px;
`;
const Div6 = styled.div`
  width: 250px;
  margin-left: 50px;
  text-align: center;
  color: gray;
`;
