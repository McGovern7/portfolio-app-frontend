import React, { useState } from 'react'
import api from '../api'
import Navbar from '../components/Navbar'
import '../components/components.css'
import './pages.css'

const Login = () => {
  const [logData, setLogData] = useState({
    username: '',
    password: ''
  });

  const handleLogInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setLogData({
      ...logData,
      [event.target.name]: value,
    });
  };

  const handleLogFormSubmit = async (event) => {
    event.preventDefault(); // prevent default of removing everything with fetch and submit api
    await api.post('/', logData);
    setLogData({
      sername: '',
      password: ''
    });
  };

  const [regData, setRegData] = useState({
    username: '',
    password: ''
  });

  const handleRegInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setRegData({
      ...regData,
      [event.target.name]: value,
    });
  };

  const handleRegFormSubmit = async (event) => {
    event.preventDefault(); // prevent default of removing everything with fetch and submit api
    await api.post('/auth/', regData);
    setRegData({
      username: '',
      password: ''
    });
  };

  return (
    <div className='main-page'>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div className='container'>
        <div className='login'>
          <div className='p-3 bg-white border border-dark'>
            <h4>Login</h4>
            <form onSubmit={handleLogFormSubmit}>

              <div className='mb-3'>
                <label htmlFor="logUsername" className='form-label'>Username</label>
                <input type="text" className='form-control' id='username' name='username' onChange={handleLogInputChange} value={logData.username} />
              </div>

              <div className='mb-3'>
                <label htmlFor="logPassword" className='form-label'>Password</label>
                <input type="password" className='form-control' id='password' name='password' onChange={handleLogInputChange} value={logData.password} />
              </div>

              <button className='btn btn-success'>Login</button>

            </form>
          </div>
        </div>
        <div className='register'>
          <div className='p-3 bg-white border border-dark'>
            <h4>Register</h4>
            <form onSubmit={handleRegFormSubmit}>

              <div className='mb-3'>
                <label htmlFor="regUsername" className='form-label'>Username</label>
                <input type="text" className='form-control' id='username' name='username' onChange={handleRegInputChange} value={regData.username} />
              </div>

              <div className='mb-3'>
                <label htmlFor="regPassword" className='form-label'>Password</label>
                <input type="password" className='form-control' id='password' name='password' onChange={handleRegInputChange} value={regData.password} />
              </div>

              <button className='btn btn-success'>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login