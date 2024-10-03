import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import api from '../api'
import Navbar from '../components/Navbar'
import '../components/components.css'
import './pages.css'
import { FaChevronDown, FaChevronUp, FaRegWindowMinimize, FaRegWindowMaximize, FaPlus } from "react-icons/fa";


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

  // declare useStates for form and its table
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    ammo_name: '',
    caliber: '',
    ammo_amount: 0,
    username: localStorage.getItem('username')
  });

  // get all of the entries from the logged in user
  const fetchEntries = async () => {
    setLoading(true);
    const username = localStorage.getItem('username')
    // TODO: try catch clause?
    const response = await api.get(`/entries/${username}`);
    setEntries(response.data)
    setLoading(false);
  };

  // expect an event and create a variable based on a checkbox getting clicked or not (nullish coalescing operator)
  const handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.ammo_name || !formData.caliber || formData.ammo_amount < 1) {
      setError('All Fields are required');
      return false;
    }
    setError('');
    return true;
  }

  // function to submit a form
  const handleFormSubmit = async (event) => {
    verifyToken();
    event.preventDefault(); // prevent default of removing everything with fetch and submit api
    if (!validateForm()) return;
    setLoading(true);
    
    try {
      await api.get(`tarkov_ammo/${formData.caliber}/${formData.ammo_name}`);
    }
    catch (error) {
      setLoading(false);
      setError("Ammo type not found, See Chart for Name/Caliber Format")
      return;
    }
    await api.post(`/entries/`, formData);
    fetchEntries(); // recall all the entries so app is always up to date
    setLoading(false);
    setFormData({ // clear the form
      ammo_name: '',
      caliber: '',
      ammo_amount: 0,
    });
  };

  useEffect(() => {
    fetchEntries();
  }, [navigate]);

  const [ammoTypes, setAmmoTypes] = useState([]);

  const fetchAmmoTypes = async () => {
    const response = await api.get(`/tarkov_ammo/`);
    setAmmoTypes(response.data);
  };

  // unique dropdown button to show/hide ammo table
  const [dropDown, setDropDown] = useState({
    icon: <FaChevronDown />,
    isOpen: false,
    fetchedOnce: false,
  });

  const handleDropDown = () => {
    if (dropDown.isOpen) {
      setDropDown({ icon: <FaChevronDown />, isOpen: false });
    }
    else {
      if (dropDown.fetchedOnce == false) {
        fetchAmmoTypes();
        dropDown.fetchedOnce = true;
      }
      setDropDown({ icon: <FaChevronUp />, isOpen: true });
    }
  }
  ;
  return (
    <div className='main-page'>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div className='container'>
        <div className='entry-form border border-dark'>
          <h4 classname='form-header'>Enter Ammo into your Storage</h4>
          <form onSubmit={handleFormSubmit}>

            <div className='mb-3 mt-3'>
              <label htmlFor='ammo_name' className='form-label'>
                Ammo Name
              </label>
              <input type='text' className='form-control' id='ammo_name' name="ammo_name" onChange={handleInputChange} value={formData.ammo_name.trim()} />
            </div>

            <div className='mb-3'>
              <label htmlFor='caliber' className='form-label'>
                Caliber
              </label>
              <input type='text' className='form-control' id='caliber' name="caliber" onChange={handleInputChange} value={formData.caliber.trim()} />
            </div>

            <div className='mb-3'>
              <label htmlFor='ammo_amount' className='form-label'>
                Amount
              </label>
              <input type='number' className='form-control' id='ammo_amount' name="ammo_amount" onChange={handleInputChange} value={formData.ammo_amount} />
            </div>

            <button type='submit' className='btn btn-primary mb-3' disabled={loading}>
              Add
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>
        <div className='entry-table-frame border border-dark' >
          <h4>{localStorage.getItem('username')}'s Ammo Storage</h4>
          <table className='entry-table table table-striped table-bordered table-hover border-dark'>
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
          <h4 className='chart-title'>Ammo Chart</h4>
          <button type='submit' className='dropdown' onClick={handleDropDown} disabled={loading}>
            {dropDown.icon}
          </button>
          <div className='checkbox-table' style={{ display: dropDown.isOpen ? 'block' : 'none' }}>
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