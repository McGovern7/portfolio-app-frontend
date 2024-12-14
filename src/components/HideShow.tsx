import React, { useState, useEffect } from "react";

const ScreenWidthTracker = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <p>Current screen width: {screenWidth}px</p>
    </div>
  );
};

export default ScreenWidthTracker;