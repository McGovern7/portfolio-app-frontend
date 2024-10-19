import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.tsx'
import Navbar from '../components/Navbar'
import api from '../api'
import '../components/components.css'
import './pages.css'
import { FaSignInAlt, FaSignOutAlt, FaTrashAlt } from "react-icons/fa";

function Profile() {

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
  const verifyToken = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.removeItem('username');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/auth/verify-token/${token}`);
      setLoading(false);
      if (!response.ok) {
        throw new Error('Token verification failed');
      };
    } catch (error) {
      setLoading(false);
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      navigate('/profile');
    };
  };

  // length of 
  const validateForm = () => {
    if (!regData.username || !regData.password) {
      setError('Username and password are required');
      return false;
    };
    setError('');
    return true;
  };

  // handle submissions when user tries to LOGIN
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
        localStorage.setItem('username', regData.username); // set username to local storage so it can be grabbed for entries
        navigate('/protected'); // protected component ensureing valid token
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Authentication failed!');
      };
    } catch (error) {
      setLoading(false);
      setError('An error occurred. Please try again later.');
    };
  };

  const [loginVisible, setLoginVisible] = useState(false);
  const [logoutVisible, setLogoutVisible] = useState(false);

  useEffect(() => { // login or logout depending on localStorage status
    verifyToken(); // verify good profile or reset storage
    if (localStorage.getItem('username')) {
      setLoginVisible(false); // could be redundant
      setLogoutVisible(true);
    }
    else {
      setLogoutVisible(false);
      setLoginVisible(true);
    };
  }, [navigate]); // only runs once on site load

  // handle submissions when user tries to LOGOUT
  const handleLogoutButton = () => {
    verifyToken();
    localStorage.clear();
    navigate('/home');
  };

  // delete user and their entries from both databases
  const handleDeleteButton = async () => {
    verifyToken();
    setLoading(true);
    const username = localStorage.getItem('username');
    try {
      const response = await api.delete(`/users/${username}`);
      setLoading(false);
      if (!response.ok) {
        throw new Error('Could not delete user profile');
      };
    }
    catch (error) {
      setLoading(false);
      localStorage.clear();
      navigate('/home');
    };
    navigate('/home');
  };

  return (
    <div className='main-page'>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <h3>User Profile</h3>
      <div className='profile' style={{ display: logoutVisible ? 'block' : 'none' }}>
        <div className='container'>
          <div className='logout-pad'>
            <div className='logout p-3 border border-dark'>
              <h5>Logout of *{localStorage.getItem('username')}*?</h5>
              <Button id='logout-button' label={loading ? ' Logging out' : ' Logout'} icon={<FaSignOutAlt />} variant='success' type='submit' onClick={handleLogoutButton} disabled={loading}></Button>
            </div>
          </div>
          <div className='delete-pad'>
            <div className='delete p-3 border border-dark'>
              <h5>Delete user account *{localStorage.getItem('username')}*?</h5>
              <Button id='delete-button' label={loading ? ' Deleting' : ' Delete'} icon={<FaTrashAlt />} variant='danger' type='submit' onClick={handleDeleteButton} disabled={loading}></Button>
            </div>
          </div>
        </div>
      </div>

      <div className='profile' style={{ display: loginVisible ? 'block' : 'none' }}>
        <div className='container'>
          <div className='login-pad'>
            <div className='login p-3 border border-dark'>
              <h5>Login to access your entries</h5>
              <form onSubmit={handleLogFormSubmit}>

                <div className='mb-3'>
                  <label htmlFor="username" className='form-label'>Username</label>
                  <input type="text" className='form-control' id='username' name='username' onChange={handleLogInputChange} value={regData.username} maxLength={15} />
                </div>

                <div className='mb-3'>
                  <label htmlFor="password" className='form-label'>Password</label>
                  <input type="password" className='form-control' id='password' name='password' onChange={handleLogInputChange} value={regData.password} maxLength={36} />
                </div>

                <Button id='login-button' label={loading ? ' Logging in' : ' Login'} icon={<FaSignInAlt />} variant='success' type='submit' disabled={loading}></Button>
                {error && <p className="error">{error}</p>}
              </form>
            </div>
            <>Don't have an Account?  <a href="/register">Register</a></>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile