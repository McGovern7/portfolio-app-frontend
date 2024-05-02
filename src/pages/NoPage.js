import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='main-page'>
      <React.Fragment>
        <Navbar/>
      </React.Fragment>
      <h2>
        Error 404: Not Found
      </h2>
    </div>
  )
}