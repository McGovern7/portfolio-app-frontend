import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import api from '../api'
import Navbar from '../components/Navbar'
import '../components/components.css'
import './pages.css'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


function ProtectedPage() {
  // const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const verifyToken = async () => {
    const token = localStorage.getItem('token');
    console.log(token)
    try {
      const response = await fetch(`http://localhost:8000/auth/verify-token/${token}`);
      if (!response.ok) {
        throw new Error('Token verification failed');
      }
    } catch (error) {
      localStorage.removeItem('token');
      navigate('/profile');
    }
  };

  useEffect(() => { // verifies once
    verifyToken();
  }, [navigate]);

  // get the user info from the fast api
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    ammo_name: '',
    caliber: '',
    ammo_amount: 0,
    username: localStorage.getItem('username')
  });

  // get all of the entries from the logged in user
  const fetchEntries = async () => {
    const username = localStorage.getItem('username')
    const response = await api.get(`/entries/${username}`);
    setEntries(response.data)
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  // expect an event and create a variable based on a checkbox getting clicked or not
  const handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  // function to submit a form
  const handleFormSubmit = async (event) => {
    verifyToken();
    event.preventDefault(); // prevent default of removing everything with fetch and submit api
    // TODO: trim the data before posting!!!
    await api.post(`/entries/`, formData);
    fetchEntries(); // recall all the entries so app is always up to date
    setFormData({ // clear the form
      ammo_name: '',
      caliber: '',
      ammo_amount: 0,
    });
  };

  const [ammoTypes, setAmmoTypes] = useState([]);



  const fetchAmmoTypes = async () => {
    const response = await api.get(`/tarkov_ammo/`);
    setAmmoTypes(response.data)
  }

  const handleDropDown = (event) => {
    
  }

    ;
  return (
    <div className='main-page'>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div className='container'>
        <div className='entry-form border border-dark'>
          <h4>Enter Ammo into your Storage</h4>
          <form onSubmit={handleFormSubmit}>

            <div className='mb-3 mt-3'>
              <label htmlFor='ammo_name' className='form-label'>
                Ammo Name
              </label>
              <input type='text' className='form-control' id='ammo_name' name="ammo_name" onChange={handleInputChange} value={formData.ammo_name} />
            </div>

            <div className='mb-3'>
              <label htmlFor='caliber' className='form-label'>
                Caliber
              </label>
              <input type='text' className='form-control' id='caliber' name="caliber" onChange={handleInputChange} value={formData.caliber} />
            </div>

            <div className='mb-3'>
              <label htmlFor='ammo_amount' className='form-label'>
                Amount
              </label>
              <input type='number' className='form-control' id='ammo_amount' name="ammo_amount" onChange={handleInputChange} value={formData.ammo_amount} />
            </div>

            <button type='submit' className='btn btn-primary mb-3'>
              Add
            </button>
          </form>
        </div>
        <div className='entry-table border border-dark' >
          <h4>{localStorage.getItem('username')}'s Ammo Storage</h4>
          <table className='table table-striped table-bordered table-hover border-dark'>
            <thead className='table-dark'>
              <tr>
                <th>Ammo Name</th>
                <th>Caliber</th>
                <th>Ammo Amount</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.ammo_name}</td>
                  <td>{entry.caliber}</td>
                  <td>{entry.ammo_amount}</td>
                  <td>{entry.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='container'>
        <div className='ammo-parent border border-dark' >
          <h4>Ammo Chart</h4>
          <div className='checkbox-table'>
            <button className='dropdown' onClick={handleDropDown}>
              'place'
            </button>
            <table className='ammo-table table table-striped table-bordered table-hover border-dark'>
              <thead className='table-dark'>
                <tr>
                  <th>Name</th>
                  <th>Caliber</th>
                  <th>Penetration</th>
                  <th>Damage</th>
                  <th>Velocity</th>
                  <th>Frag%</th>
                </tr>
              </thead>
              <tbody>
                {ammoTypes.map((type) => (
                  <tr key={[type.ammo_name, type.ammo_group]}>
                    <td>{type.ammo_name}</td>
                    <td>{type.caliber}</td>
                    <td>{type.penetration}</td>
                    <td>{type.damage}</td>
                    <td>{type.velocity}</td>
                    <td>{type.frag_pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProtectedPage