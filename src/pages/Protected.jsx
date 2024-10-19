import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import api from '../api'
import Button from '../components/Button.tsx'
import Navbar from '../components/Navbar'
import '../components/components.css'
import './pages.css'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GiSilverBullet } from "react-icons/gi";



function ProtectedPage() {
  const navigate = useNavigate();
  const verifyToken = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.removeItem('username');
      navigate('/profile');
      return;
    };
    try {
      const response = await fetch(`http://localhost:8000/auth/verify-token/${token}`);
      if (!response.ok) {
        throw new Error('Token verification failed');
      };
    } catch (error) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      navigate('/profile');
    };
  });

  // declare useStates for form and its table
  const [formError, setFormError] = useState('');
  const [generalError, setGeneralError] = useState('');
  const [loading, setLoading] = useState('');
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    ammo_name: '',
    caliber: '',
    ammo_amount: 0,
    username: localStorage.getItem('username')
  });

  // GET all of the entries from the logged in user
  const fetchEntries = async () => {
    setLoading(true);
    const username = localStorage.getItem('username');
    if (!username) {
      return;
    };
    try {
      const response = await api.get(`/entries/${username}`);
      setEntries(response.data);
      setGeneralError('');
    } catch (error) {
      console.log(`No Entries Associated with ${username}`);
    } finally {
      setLoading(false);
    };
  };

  // expect an event and create a variable based on a checkbox being clicked or not (nullish coalescing operator)
  // Real-time syntax query correcting of Ammo Name form data toUpperCase() 
  const handleAmmoNameChange = (event) => {
    function toUpper(str) {
      let words = str.replace(/_/g, '-');
      words = str.replace(/\w\S\w*/g, text => text.toUpperCase());
      str = words.replace(/[ ]/g, '_');
      return str.trim();
    };
    const value = event.target.type === 'checkbox' ? event.target.checked : toUpper(event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: toUpper(value),
    });
  };
  // Real-time syntax query correcting of caliber form data to Title_Text 
  const handleCaliberChange = (event) => {
    function toTitle(str) {
      let words = str.replace(/_/g, '-');
      words = words.replace(/\w\S\w*/g, text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());
      str = words.replace(/[ -]/g, '_');
      return str.trim();
    };
    const value = event.target.type === 'checkbox' ? event.target.checked : toTitle(event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: toTitle(value),
    });
  };
  const handleOtherChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  // pre-submission validations
  const validateForm = () => {
    if (!formData.ammo_name || !formData.caliber) {
      setFormError('All Fields are required');
      return false;
    };
    if (formData.ammo_amount < 1) {
      setFormError('Ammunition amount must be > 0');
      return false;
    };
    setFormError('');
    return true;
  }

  // function to submit a validated entry form
  const handleFormSubmit = async (event) => {
    verifyToken();
    fetchEntries();
    event.preventDefault(); // prevent default of removing everything with fetch and submit api
    if (!validateForm()) return;
    setLoading(true);

    try {
      await api.get(`/tarkov_ammo/${formData.caliber}/${formData.ammo_name}`);
    } catch (error) {
      setLoading(false);
      setFormError("Ammo type not found, See Chart for Name/Caliber Format");
      return;
    };

    // decide to PATCH or POST depending on duplicate response
    try {
      const currResponse = await api.get(`/entries/${formData.username}/${formData.caliber}/${formData.ammo_name}`);
      const currData = currResponse.data;
      const currID = parseInt(currData.id); // existing entry's id
      if (currID > 0) {
        try {
          const newAmount = parseInt(currData.ammo_amount) + parseInt(formData.ammo_amount);
          await api.patch(`/entries/${currID}`, { newAmount: newAmount }); // PATCH validated entry
        } catch (error) {
          setFormError("An issue patching existing data has occurred");
        };
      };
    } catch (error) {
      try {
        await api.post(`/entries/`, formData); // POST validated entry
      } catch (error) {
        setFormError("Unable to submit entry to database");
      };
    } finally {
      fetchEntries(); // recall all the entries so app is always up to date
      setLoading(false);
      setFormData({ // reset form
        ...formData,
        ammo_name: '',
        caliber: '',
        ammo_amount: 0,
      });
    };
  };

  useEffect(() => {
    verifyToken();
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
      if (dropDown.fetchedOnce === false) {
        fetchAmmoTypes();
        dropDown.fetchedOnce = true;
      };
      setDropDown({ icon: <FaChevronUp />, isOpen: true });
    };
  };
  ;
  return (
    <div className='main-page'>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <h3>{localStorage.getItem('username')}'s Stash</h3>
      {generalError && <p style={{ color: 'red' }}>{generalError}</p>}
      <div className='container'>
        <div className='entry-form border border-dark'>
          <h4 className='form-header'>Enter Ammo into your Storage</h4>
          <form onSubmit={handleFormSubmit}>

            <div className='mb-3 mt-3'>
              <label htmlFor='ammo_name' className='form-label'>
                Ammo Name
              </label>
              <input type='text' className='form-control' id='ammo_name' name="ammo_name" onChange={handleAmmoNameChange} value={formData.ammo_name} maxLength={25} />
            </div>

            <div className='mb-3'>
              <label htmlFor='caliber' className='form-label'>
                Caliber
              </label>
              <input type='text' className='form-control' id='caliber' name="caliber" onChange={handleCaliberChange} value={formData.caliber} maxLength={25} />
            </div>

            <div className='mb-3'>
              <label htmlFor='ammo_amount' className='form-label'>
                Amount
              </label>
              <input type='number' className='form-control' id='ammo_amount' name="ammo_amount" onChange={handleOtherChange} value={formData.ammo_amount} />
            </div>

            <button type='submit' className='btn btn-primary mb-3' disabled={loading}>
              <GiSilverBullet />{loading ? ' Adding' : ' Add'}
            </button>
            {formError && <p style={{ color: 'red' }}>{formError}</p>}
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
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.ammo_name}>
                  <td>{entry.ammo_name}</td>
                  <td>{entry.caliber}</td>
                  <td>{entry.ammo_amount}</td>
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