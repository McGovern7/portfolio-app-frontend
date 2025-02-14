import { createContext, useContext, useState } from 'react';

// Create context
const SliderContext = createContext(null);

export const SliderProvider = ({ children }) => {
  // Initialize the state variables
  const [sliderStatus, setSliderStatus] = useState(false);

	const toggleSlider = () => setSliderStatus((prev) => !prev);

  return (
    <SliderContext.Provider value={{ sliderStatus, toggleSlider }}>
      {children}
    </SliderContext.Provider>
  );

}

export const useSlider = () => (useContext(SliderContext));