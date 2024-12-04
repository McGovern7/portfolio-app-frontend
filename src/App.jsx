import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Portfolio, ResumePage, Home, Profile, Register, ProtectedPage, NoPage } from './pages';

const App = () => {
  return ( // react can only return one element
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/resume' element={<ResumePage />} />
        <Route path='/tarkov-app/home' element={<Home />} />
        <Route path='/tarkov-app/profile' element={<Profile />} />
        <Route path='/tarkov-app/register' element={<Register />} />
        <Route path='/tarkov-app/protected' element={<ProtectedPage />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
