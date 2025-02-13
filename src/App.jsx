import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Portfolio, ResumePage, Home, Profile, Register, ProtectedPage, NoPage } from './pages';
import { DarkModeProvider, ScreenWidthProvider, SliderProvider } from './components';

const Providers = ({ children }) => (
  <ScreenWidthProvider>
    <SliderProvider>
      <DarkModeProvider>{children}</DarkModeProvider>
    </SliderProvider>
  </ScreenWidthProvider>
);


const App = () => {
  return ( // react can only return one element
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route index element={<Portfolio />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<ResumePage />} />
          <Route path='/tarkov-app/home' element={<Home />} />
          <Route path='/tarkov-app/profile' element={<Profile />} />
          <Route path='/tarkov-app/register' element={<Register />} />
          <Route path='/tarkov-app/protected' element={<ProtectedPage />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  )
}

export default App;