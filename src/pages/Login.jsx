import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { Button, Navbar, VerifyToken } from '../components/';
import '../components/components.css';
import './pages.css';
import { FaSignInAlt, FaSignOutAlt, FaTrashAlt } from "react-icons/fa";

function Profile() {

  const [regData, setRegData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [delTriggered, setDelTriggered] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [logoutVisible, setLogoutVisible] = useState(false);

  const navigate = useNavigate();
  const handleVerify = async () => {
    const loggedIn = await VerifyToken();
    // show login or logout buttons depending on verification status
    setLoginVisible(!loggedIn);
    setLogoutVisible(loggedIn);
  };

  useEffect(() => {
    handleVerify();
  }, [navigate, delTriggered]);

  const handleLogInputChange = (event) => {
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
    };
    return true;
  };

  // handle submissions when user tries to LOGIN
  const handleLogFormSubmit = async (event) => {
    event.preventDefault(); // prevent default of removing everything with fetch and submit api
    if (!validateForm()) return;

    const formDetails = new URLSearchParams();
    formDetails.append('username', regData.username);
    formDetails.append('password', regData.password);

    try {
      setLoading(true);
      const response = await api.post('http://localhost:8000/auth/token',
        formDetails, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', }, });
      const data = response.data;
      setError('');
      localStorage.setItem('token', data.access_token); // set local storage to received token
      localStorage.setItem('username', regData.username); // set username to local storage so it can be grabbed for entries
      setLoading(false);
      navigate('/tarkov-app/protected'); // protected component ensureing valid token
    } catch (error) {
      localStorage.clear();
      if (error.response.status === 401) { setError(`Login failed: Incorrect Username or Password`); }
      else { setError(`An error has ocurred, please try again later`); }
    } finally { setLoading(false) };
  };

  // handle submissions when user tries to LOGOUT
  const handleLogoutButton = () => {
    handleVerify();
    localStorage.clear();
    navigate('/tarkov-app/home');
  };

  // delete user and their entries from both databases
  const handleDeleteButton = async () => {
    handleVerify();
    const username = localStorage.getItem('username');
    try {
      setLoading(true);
      await api.delete(`/entries/${username}`);
      setError('');
    } catch (error) {
      if (error.response.status !== 404) {
        setError(`Error: Could not delete ${username}'s entries`);
        return;
      }
    } finally { setLoading(false); };
    try {
      await api.delete(`/users/${username}`);
      setError('');
      localStorage.clear();
    } catch (error) {
      setError(`Failed to delete user '${username}'`);
    } finally { setLoading(false); };
    setDelTriggered(true);
  };
  return (
    <div className='main-page'>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <main>
        <p className='warning-text'> **EXPECT WAIT TIMES (1 MIN +), API HOSTED ON A FREE SUPABASE TRIAL, NEEDS TIME TO LAUNCH** </p>
        <h3>User Profile</h3>
        <div className='grouper profile' style={{ display: logoutVisible ? 'flex' : 'none' }}>
          <div className='change-status p-3 shadow'>
            <h5>Logout of *{localStorage.getItem('username')}*?</h5>
            <Button id='logout-button' label={loading ? ' Logging out' : ' Logout'} icon={<FaSignOutAlt />} variant='success' type='submit' onClick={handleLogoutButton} disabled={loading}></Button>
          </div>
          <div className='change-status p-3 shadow'>
            <h5 aria-label='Delete user title'>Delete user account *{localStorage.getItem('username')}*?</h5>
            <Button id='delete-button' label={loading ? ' Deleting' : ' Delete'} icon={<FaTrashAlt />} variant='danger' type='submit' onClick={handleDeleteButton} disabled={loading}></Button>
            {error && <p aria-labelledby='delete-button' className="text-danger">{error}</p>}
          </div>
        </div>

        <div className='grouper profile' style={{ display: loginVisible ? 'flex' : 'none' }}>
          <div className='change-status p-3 shadow'>
            <h5 aria-label='login title'>Login to access your entries</h5>
            <form id='login-form' onSubmit={handleLogFormSubmit} aria-label='login form'>
              <div className='mb-3'>
                <label htmlFor="username" className='form-label'>Username</label>
                <input type="text" className='form-control' id='username' name='username' onChange={handleLogInputChange} value={regData.username} maxLength={15} />
              </div>
              <div className='mb-3'>
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" className='form-control' id='password' name='password' onChange={handleLogInputChange} value={regData.password} maxLength={36} />
              </div>
              <Button id='login-button' label={loading ? ' Logging in' : ' Login'} icon={<FaSignInAlt />} variant='success' type='submit' disabled={loading} ariaLabelledBy='login-form'></Button>
              {error && <p className="text-danger" aria-labelledby='login-form' >{error}</p>}
            </form>
            <p aria-label='register new account prompt'>Don't have an Account?  <a href="/register">Register</a></p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile