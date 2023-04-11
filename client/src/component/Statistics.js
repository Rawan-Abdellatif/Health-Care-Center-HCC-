import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Statistics = ({ endValues }) => {
  const [currentValues, setCurrentValues] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      let allDone = true;
      const newValues = currentValues.map((value, index) => {
        const endValue = endValues[index];
        if (value < endValue) {
          allDone = false;
          return value + Math.ceil((endValue - value) / 10);
        } else {
          return value;
        }
      });
      setCurrentValues(newValues);
      if (allDone) clearInterval(interval);
    }, 100);
  }, []);

  return (
    <StatisticsSection>
      <StatisticsContainer>
        <StatisticItem>
          <StatisticNumber>{currentValues[0]}</StatisticNumber>
          <StatisticLabel>Patients Treated</StatisticLabel>
        </StatisticItem>
        <StatisticItem>
          <StatisticNumber>{currentValues[1]}</StatisticNumber>
          <StatisticLabel>Qualified Doctors</StatisticLabel>
        </StatisticItem>
        <StatisticItem>
          <StatisticNumber>{currentValues[2]}</StatisticNumber>
          <StatisticLabel>Years of Experience</StatisticLabel>
        </StatisticItem>
        <StatisticItem>
          <StatisticNumber>{currentValues[3]}</StatisticNumber>
          <StatisticLabel>Awards Won</StatisticLabel>
        </StatisticItem>
      </StatisticsContainer>
    </StatisticsSection>
  );
};

export default Statistics;
const StatisticsSection = styled.section`
  margin-top: 50px;
  margin-left: 100px;
  // styles for statistics section
`;

const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  // other styles as needed
`;

const StatisticItem = styled.div`
  text-align: center;
  padding-left: 110px;
  // other styles as needed
`;

const StatisticNumber = styled.h2`
  font-size: 3rem;
  margin: 0;
`;

const StatisticLabel = styled.p`
  font-size: 1.2rem;
`;
