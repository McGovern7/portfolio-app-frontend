import { createContext, useContext, useState } from 'react';

// Create context 
const CollapseContext = createContext(null);

// references the left and right status variables, which expand their respective columnn on /DesktopPortfolio
export const CollapseProvider = ({ children }) => {
  // Initialize the state variables
  const [leftStatus, setLeftStatus] = useState(true);
  const [rightStatus, setRightStatus] = useState(false);

  const toggleCollapse = () => {
    setLeftStatus((prev) => !prev);
    setRightStatus((prev) => !prev);
    console.log('leftStatus', leftStatus);
    console.log('rightStatus', rightStatus);
  };

  return (
    <CollapseContext.Provider value={{ leftStatus, rightStatus, toggleCollapse }}>
      {children}
    </CollapseContext.Provider>
  );

}

export const useCollapse = () => (useContext(CollapseContext));