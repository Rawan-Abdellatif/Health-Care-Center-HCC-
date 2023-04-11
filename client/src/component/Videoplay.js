import React, { useState } from "react";
import Medical from "../../src/Medical.mp4";
import styled from "styled-components";
function Videoplay() {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isHovered ? (
        <Video src={Medical} autoPlay loop />
      ) : (
        <Video src={Medical} muted autoPlay loop />
      )}
    </div>
  );
}

export default Videoplay;
const Video = styled.video`
  width: 100%;
`;
