import { useState } from 'react';
import api from '../api';
import { Button, Navbar } from '../components/';
import '../components/SharedComps.css';
import './pages.css';
import { FaUserPlus } from "react-icons/fa";

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
    return true;
  };

  const handleRegFormSubmit = async (event) => {
    event.preventDefault(); // prevent default of removing everything with fetch and submit api
    if (!validateForm()) return;
    try {
      setLoading(true);
      await api.post('/auth/', regData); // case insensitive
      setError('');
      setRegStatus(`${regData.username} registered successfully`);
      setRegData({
        username: '',
        password: ''
      });
    } catch (error) {
      setError('An account with that name already exists');
      setRegData({
        ...regData,
        password: ''
      });
    } finally { setLoading(false); };
  };
  return (
    <div className='main-page'>
      <Navbar />
      <main>
        <p className='warning-text'> **EXPECT WAIT TIMES (1 MIN +), API HOSTED ON A FREE SUPABASE TRIAL, NEEDS TIME TO LAUNCH** </p>
        <h3>Registration</h3>
        <div className='grouper profile'>
          <div className='change-status p-3 shadow'>
            <h5>Register A New Profile</h5>
            <form aria-labelledby='register-sect' onSubmit={handleRegFormSubmit}>
              <div className='mb-3'>
                <label htmlFor="username" className='form-label'>Username</label>
                <input type="text" className='form-control' id='username' name='username' onChange={handleRegInputChange} value={regData.username} maxLength={15} />
              </div>

              <div className='mb-3'>
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" className='form-control' id='password' name='password' onChange={handleRegInputChange} value={regData.password} maxLength={36} />
              </div>

              <Button id='register' label={loading ? ' Registering' : ' Register'} icon={<FaUserPlus />} variant='success' type='submit' disabled={loading}></Button>
              {error && <p aria-labelledby='register-sect' className="text-danger">{error}</p>}
              {regStatus && <p aria-labelledby='register-sect' className="text-success">{regStatus}</p>}
            </form>
            {localStorage.getItem('username') ? <></> : (<p>Want to access Profile? <a href="/profile">Login</a></p>)}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Register