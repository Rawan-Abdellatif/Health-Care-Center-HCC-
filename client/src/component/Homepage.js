import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Videoplay from "./Videoplay";
import Statistics from "./Statistics";
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

      <Statistics endValues={[100, 25, 10, 5]} />

      <Text>NEWS</Text>
      <Container2>
        <Div6>
          <Img1 src="acidreflux.png" />
          <h3>
            Acid reflux Gastro-esophageal reflux happens when acid from the
            stomach splashes upinto the tube that carries food from the throat
            to the stomach (esophagus).
          </h3>
        </Div6>
        <Div6>
          <Img1 src="kidshealth.jpg" />
          <h3>
            Private nursing care at Bloom Medical If you are looking for
            specialized care for your child, we recently launched HCC, a private
            care nursing service. Did you know clinical nurses and nurse
            practitioners are fully qualified to care for your child's health? ‍
            The program is designed to monitor the health and development of
            babies (0-24 months), toddlers (2 to 5 years), and children (6 to 18
            years) while providing support to parents.
          </h3>
        </Div6>
        <Div6>
          <Img1 src="milk.jpg" />
          <h3>
            Cow’s milk protein intolerance Information from the Montreal
            Children's Hospital about dietary restrictions related to cow's
            milk, soy protein and bovine protein.
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
  border: 2px solid #1e3d58;
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
  background-color: #1e3d58;
`;
const Text = styled.h3`
  text-align: center;
  color: #1e3d58;
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
  background-color: #1e3d58;
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
