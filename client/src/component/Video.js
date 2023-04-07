import React, { useState } from "react";
import Medical from "../../src/Medical.mp4";

function Video() {
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
        <video src={Medical} autoPlay loop />
      ) : (
        <video src={Medical} muted autoPlay loop />
      )}
    </div>
  );
}

export default Video;
