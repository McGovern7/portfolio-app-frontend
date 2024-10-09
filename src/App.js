import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Login'
import Register from './pages/Register'
import ProtectedPage from './pages/Protected'
import Home from './pages/Home'
import NoPage from './pages/NoPage'

// npm start
/**
 * Needed
 * 1. User login/authentication as first page
 * 2. form to ask for ammo & caliber, post corresponding data
 * 3. form to get info needed for entries
 * 4. ability to specify search through ammo entries
 */

const App = () => {

  return ( // react can only return one element
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register' element={<Register />} />
          <Route path='/protected' element={<ProtectedPage />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
