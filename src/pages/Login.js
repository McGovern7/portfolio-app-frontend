import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../components/components.css'
import './pages.css'

function Login() {
  const [regData, setRegData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const handleLogInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setRegData({
      ...regData,
      [event.target.name]: value,
    });
  };

  const navigate = useNavigate();

  const validateForm = () => {
    if (!regData.username || !regData.password) {
      setError('Username and password are required');
      return false;
    }
    setError('');
    return true;
  };

  // handle submissions when user tries to login
  const handleLogFormSubmit = async (event) => {
    event.preventDefault(); // prevent default of removing everything with fetch and submit api
    if (!validateForm()) return;
    setLoading(true);

    const formDetails = new URLSearchParams();
    formDetails.append('username', regData.username);
    formDetails.append('password', regData.password);

    try {
      const response = await fetch('http://localhost:8000/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDetails,
      });
      setLoading(false);

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.access_token); // set local storage to received token
        localStorage.setItem('username', regData.username) // set username to local storage so it can be grabbed for entries
        navigate('/protected'); // protected component ensureing valid token
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Authentication failed!');
      }
    } catch (error) {
      setLoading(false);
      setError('An error occurred. Please try again later.')
    }
  };

  return (
    <div className='main-page'>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <h3>Login to access your entries</h3>
      <div className='container'>
        <div className='login'>
          <div className='p-3 bg-white border border-dark'>
            <h4>Login</h4>
            <form onSubmit={handleLogFormSubmit}>

              <div className='mb-3'>
                <label htmlFor="username" className='form-label'>Username</label>
                <input type="text" className='form-control' id='username' name='username' onChange={handleLogInputChange} value={regData.username}/>
              </div>

              <div className='mb-3'>
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" className='form-control' id='password' name='password' onChange={handleLogInputChange} value={regData.password}/>
              </div>

              <button type="submit" className='btn btn-success' disabled={loading}>
                {loading ? 'Logging in' : 'Login'}
              </button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login