import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Portfolio, ResumePage, Home, Profile, Register, ProtectedPage, NoPage } from './pages';
import { DarkModeProvider, ScreenWidthProvider, SideBarProvider, SliderProvider } from './components';

const App = () => {
  return ( // react can only return one element
    <BrowserRouter>
      <ScreenWidthProvider>
        <SideBarProvider>
          <SliderProvider>
            <DarkModeProvider>
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
            </DarkModeProvider>
          </SliderProvider>
        </SideBarProvider>
      </ScreenWidthProvider>
    </BrowserRouter>
  )
}

export default App;