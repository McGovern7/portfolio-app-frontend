import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { Button, Navbar, VerifyToken } from '../components';
import '../components/components.css';
import './pages.css';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GiSilverBullet } from "react-icons/gi";

function ProtectedPage() {
  const navigate = useNavigate();
  const handleVerify = useCallback(async () => {
    const response = await VerifyToken();
    if (!response) {
      localStorage.clear();
      navigate('/profile');
    }
  }, [navigate]);

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
  };

  // function to submit a validated entry form
  const handleFormSubmit = async (event) => {
    handleVerify();
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
    handleVerify();
    fetchEntries();
  }, [handleVerify]);

  const [ammoTypes, setAmmoTypes] = useState([]);

  const fetchAmmoTypes = async () => {
    setLoading(true);
    const response = await api.get(`/tarkov_ammo/`);
    setLoading(false);
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
      setDropDown({ icon: <FaChevronDown alt="dropdown" />, isOpen: false });
    }
    else {
      if (dropDown.fetchedOnce === false) {
        fetchAmmoTypes();
        dropDown.fetchedOnce = true;
      };
      setDropDown({ icon: <FaChevronUp alt="dropdown" />, isOpen: true });
    };
  };
  return (
    <div className='main-page'>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <main>
        <h3>{localStorage.getItem('username')}'s Stash</h3>
        {generalError && <p style={{ color: 'red' }}>{generalError}</p>}
        <div className='grouper'>
          <section id='entry-form-sect' className='shadow-lg'>
            <h4>Enter Ammo into your Storage</h4>
            <form aria-labelledby='entry-form-sect' onSubmit={handleFormSubmit}>

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

              <Button id='add-button' label={loading ? ' Adding' : ' Add'} icon={<GiSilverBullet alt="" />} variant='primary' type='submit' disabled={loading}></Button>
              {formError && <p aria-labelledby='entry-form-sect' style={{ color: 'red' }}>{formError}</p>}
            </form>
          </section>
          <section id='entry-table-sect' className='shadow-lg' >
            <h4>{localStorage.getItem('username')}'s Ammo Storage</h4>
            <table id='entry-table' aria-labelledby='entry-table-sect' className='table table-striped table-bordered border-dark'>
              <thead className='table-dark '>
                <tr>
                  <th scope="col">Ammo Name</th>
                  <th scope="col">Caliber</th>
                  <th scope="col">Ammo Amount</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => (
                  <tr key={entry.ammo_name}>
                    <th scope="row">{entry.ammo_name}</th>
                    <td>{entry.caliber}</td>
                    <td>{entry.ammo_amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
        <div className='grouper'>
          <section id='ammo-type-chart-sect' className='shadow-lg' >
            <h4>Ammo Types Chart</h4>
            <button aria-labelledby='ammo-type-chart-sect' type='submit' className='dropdown' onClick={handleDropDown} disabled={loading}>
              {dropDown.icon}
            </button>
            <div style={{ display: dropDown.isOpen ? 'block' : 'none' }}>
              <table id='ammo-table' aria-labelledby='ammo-type-chart-sect' className='table table-striped table-bordered border-dark'>
                <thead className='table-dark no-highlight'>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Caliber</th>
                    <th scope="col">Penetration</th>
                    <th scope="col">Damage</th>
                    <th scope="col">Velocity</th>
                    <th scope="col">Frag%</th>
                  </tr>
                </thead>
                <tbody>
                  {ammoTypes.map((type) => (
                    <tr key={[type.ammo_name, type.ammo_group]}>
                      <th scope='row'>{type.ammo_name}</th>
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
          </section>
        </div>
      </main>
    </div>
  )
}

export default ProtectedPage