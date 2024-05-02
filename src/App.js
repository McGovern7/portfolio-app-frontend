import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Entry from './pages/Entry'
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
          <Route index element={<Entry />} />
          <Route path='/home' element={<Home />} />
          <Route path='/entry' element={<Entry />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
