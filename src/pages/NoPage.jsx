import React from 'react';
import { Navbar } from '../components';

export default function Home() {
  return (
    <div>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <h2>
        Error 404: Not Found
      </h2>
    </div>
  )
}