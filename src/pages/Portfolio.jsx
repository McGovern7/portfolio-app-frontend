import { useState, useEffect } from "react";
import DesktopPortfolio from "./DesktopPortfolio";
import MobilePortfolio from "./MobilePortfolio";

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobilePortfolio /> : <DesktopPortfolio />;
};

export default Portfolio;