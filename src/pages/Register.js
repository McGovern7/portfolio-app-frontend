import React, { useState } from 'react'
import api from '../api'
import Navbar from '../components/Navbar'
import '../components/components.css'
import './pages.css'

const Register = () => {
  const [regData, setRegData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const handleRegInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setRegData({
      ...regData,
      [event.target.name]: value,
    });
  };

  const validateForm = () => {
    if (!regData.username || !regData.password) {
      setError('Username and password are required');
      return false;
    }
    setError('');
    return true;
  };

  const handleRegFormSubmit = async (event) => {
    event.preventDefault(); // prevent default of removing everything with fetch and submit api
    if (!validateForm()) return;
    setLoading(true);
    
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
      <h3>Register a new account</h3>
      <div className='container'>
        <div className='register'>
          <div className='p-3 bg-white border border-dark'>
            <h4>Register</h4>
            <form onSubmit={handleRegFormSubmit}>

              <div className='mb-3'>
                <label htmlFor="username" className='form-label'>Username</label>
                <input type="text" className='form-control' id='username' name='username' onChange={handleRegInputChange} value={regData.username} />
              </div>

              <div className='mb-3'>
                <label htmlFor="password" className='form-label'>Password</label>
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

export default Register