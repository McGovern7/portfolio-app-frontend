import React from 'react';
import { useScreenWidth } from '../components';
import DesktopPortfolio from "./DesktopPortfolio";
import MobilePortfolio from "./MobilePortfolio";

const Portfolio = () => {
  const { isMobile } = useScreenWidth();
  const portfolioRender = <React.Fragment>{isMobile ? <MobilePortfolio /> : <DesktopPortfolio />}</React.Fragment>;

  return (portfolioRender);
};

export default Portfolio;