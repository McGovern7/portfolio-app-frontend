import { createContext, useContext, useState } from 'react';
import { BiExpandHorizontal } from "react-icons/bi";

// Create context
const SliderContext = createContext(null);

export const SliderProvider = ({ children }) => {
  // Initialize the state variables
  const [sliderStatus, setSliderStatus] = useState(false);
  const [sliderTernary, setSliderTernary] = useState(sliderStatus ? 'show-side' : 'hide-side');

  const handleSlider = async () => { // open and close the sidebar window
    const newSliderStatus = !sliderStatus;
    setSliderStatus(newSliderStatus);
    setSliderTernary(newSliderStatus ? 'show-side' : 'hide-side');
  };

  const sliderDiv = (
    <div className='slider-col'>
      <button id='slide-btn' className='circle-btn' onClick={handleSlider}><BiExpandHorizontal /></button>
    </div>
  );

  return (
    <SliderContext.Provider value={{ sliderTernary, sliderDiv }}>
      {children}
    </SliderContext.Provider>
  );

}

export const useSlider = () => (useContext(SliderContext));