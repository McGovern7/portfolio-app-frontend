import React, { useState } from 'react'
import api from '../api'
import Navbar from '../components/Navbar'
import '../components/components.css'
import './pages.css'
import { FaUser, FaUserPlus } from "react-icons/fa";

const Register = () => {
  const [regData, setRegData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [regStatus, setRegStatus] = useState('');

  const handleRegInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setRegData({
      ...regData,
      [event.target.name]: value,
    });
  };

  const validateForm = () => {
    // exceeds string limits or contains invalid characters
    if (!regData.username || !regData.password) {
      setError('Username and password are required');
      return false;
    };
    if (regData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    };
    setError('');
    return true;
  };

  const handleRegFormSubmit = async (event) => {
    event.preventDefault(); // prevent default of removing everything with fetch and submit api
    if (!validateForm()) return;
    setLoading(true);
    try {
      await api.post('/auth/', regData); // case insensitive
    } catch (error) {
      setLoading(false);
      setError('An account with that name already exists', error);
      console.log(error);
      return;
    };

    // ERROR: string.format not a function
    setRegStatus(`${regData.username} successfully registered`);
    setError('');
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
      <h3>Registration</h3>
      <div className='container'>
        <div className='register-pad'>
          <div className='register p-3 border border-dark reg-box'>
            <h5>Register A New Profile</h5>
            <form onSubmit={handleRegFormSubmit}>

              <div className='mb-3'>
                <label htmlFor="username" className='form-label'>Username</label>
                <input type="text" className='form-control' id='username' name='username' onChange={handleRegInputChange} value={regData.username} maxLength={15} />
              </div>

              <div className='mb-3'>
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" className='form-control' id='password' name='password' onChange={handleRegInputChange} value={regData.password} maxLength={36} />
              </div>

              <button className='btn btn-success' disabled={loading}>
                <FaUserPlus />{loading ? ' Registering' : ' Register'}
              </button>
              {error && <p className="error">{error}</p>}
              {regStatus && <p className="success">{regStatus}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register