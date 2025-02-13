import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { Button, Navbar, ScrollTo, getCookie, verifyToken } from '../components';
import '../components/SharedComps.css';
import './pages.css';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import { GiSilverBullet } from "react-icons/gi";

function ProtectedPage() {
  const navigate = useNavigate();
  const username = getCookie('username');

  // declare useStates for form and its table
  const [formError, setFormError] = useState('');
  const [entryError, setEntryError] = useState('');
  const [ammoError, setAmmoError] = useState('');
  const [loading, setLoading] = useState('');
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    ammo_name: '',
    caliber: '',
    ammo_amount: 0,
    username: username
  });

  const [ammoTypes, setAmmoTypes] = useState([]);

  // unique dropdown button to show/hide ammo table
  const [dropDown, setDropDown] = useState({
    icon: <FaChevronDown />,
    isOpen: false,
    fetchedOnce: false,
  });

  const handleVerify = async () => {
    setLoading(true);
    const loggedIn = await verifyToken();
    if (!loggedIn) {
      setLoading(false);
      navigate('/tarkov-app/profile');
    }
    else {
      setLoading(false);
    };
  };

  // GET all of the entries from the logged in user
  const fetchEntries = async () => {
    if (!username) { return; };
    try {
      setLoading(true);
      const response = await api.get(`/entries/${username}`);
      setEntries(response.data);
      setEntryError('');
    } catch (error) {
      if (error.response.status === 404) {
        setEntryError(`No Entries Associated with ${username}`);
      } else { setEntryError('An error occured finding your entries'); }
    } finally { setLoading(false); };
  };

  useEffect(() => {
    handleVerify();
    fetchEntries();
    // eslint-disable-next-line
  }, [navigate]);

  // expect an event & create variable based on a checkbox being clicked or not (nullish coalescing operator)
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

  // pre-submission form validations
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
    event.preventDefault(); // prevent default of removing everything with fetch and submit api
    if (!validateForm()) return;
    try {
      setLoading(true);
      await api.get(`/tarkov_ammo/${formData.caliber}/${formData.ammo_name}`);
    } catch (error) {
      setLoading(false);
      setFormError('Ammo not found, See Chart for Name/Caliber Format');
      return;
    };

    // decide to PATCH or POST depending on duplicate response
    try {
      const currResponse = await api.get(`/entries/${formData.username}/${formData.caliber}/${formData.ammo_name}`);
      const currData = currResponse.data;
      const currID = parseInt(currData.id); // existing entry's id
      if (currID > 0) { // existing entry, try PATCH
        try {
          const newAmount = parseInt(currData.ammo_amount) + parseInt(formData.ammo_amount);
          await api.patch(`/entries/${currID}`, { newAmount: newAmount });
        } catch (error) {
          setFormError(`Error Updating Entry: '${formData.ammo_name}'`);
        };
      };
    } catch (error) { // No existing ammo entry, POST
      try {
        await api.post(`/entries/`, formData); // POST validated entry
      } catch (error) {
        setFormError(`Error Creating Entry: '${formData.ammo_name}'`);
      };
    } finally {
      fetchEntries(); // recall all the entries so app is always up to date
      setFormData({ // reset form
        ...formData,
        ammo_name: '',
        caliber: '',
        ammo_amount: 0,
      });
      setLoading(false);
    };
  };

  const fetchAmmoTypes = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/tarkov_ammo/`);
      setAmmoTypes(response.data);
    } catch (error) {
      setAmmoError('Unable to get Ammo Data, Try refreshing tab');
    } finally { setLoading(false) };
  };

  const handleDropDown = () => {
    if (dropDown.isOpen) {
      setDropDown({ icon: <FaChevronDown alt="dropdown" />, isOpen: false });
    }
    else {
      if (dropDown.fetchedOnce === false) {
        fetchAmmoTypes();
        dropDown.fetchedOnce = true; // no repeat GET for this visit
      };
      setDropDown({ icon: <FaChevronUp alt="dropdown" />, isOpen: true });
    };
  };
  return (
    <div className='main-page'>
      <Navbar />
      <main>
        <p className='warning-text'> **EXPECT WAIT TIMES (1 MIN +), API HOSTED ON A FREE SUPABASE TRIAL, NEEDS TIME TO LAUNCH** </p>
        <h3>Secret Stash</h3>
        <div className='grouper'>
          <section id='entry-form-sect' className='shadow'>
            <h4>Enter Ammo into your Storage</h4>
            <form aria-labelledby='entry-form-sect' onSubmit={handleFormSubmit}>
              <div className='mb-3 mt-3'>
                <label htmlFor='ammo_name' className='form-label'> Ammo Name </label>
                <input type='text' className='form-control' id='ammo_name' name="ammo_name" autocomplete="off"
                  onChange={handleAmmoNameChange} value={formData.ammo_name} maxLength={25} />
              </div>
              <div className='mb-3'>
                <label htmlFor='caliber' className='form-label'> Caliber </label>
                <input type='text' className='form-control' id='caliber' name="caliber" autocomplete="off"
                  onChange={handleCaliberChange} value={formData.caliber} maxLength={25} />
              </div>
              <div className='mb-3'>
                <label htmlFor='ammo_amount' className='form-label'> Amount </label>
                <input type='number' className='form-control' id='ammo_amount' name="ammo_amount" autocomplete="off"
                  onChange={handleOtherChange} value={formData.ammo_amount} />
              </div>
              <Button id='add-button' label={loading ? ' Adding' : ' Add'} icon={<GiSilverBullet alt="" />}
                variant='primary' type='submit' disabled={loading}></Button>
              {formError && <p aria-labelledby='entry-form-sect' className='text-danger'>{formError}</p>}
            </form>
          </section>
          <section id='entry-table-sect' className='shadow'>
            <h4>{username}'s Ammo Storage</h4>
            {entryError && <p className='d-flex text-secondary justify-content-center'>{entryError}</p>}
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
                  <tr key={[entry.ammo_name, entry.caliber]}>
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
          <section id='ammo-type-chart-sect' className='shadow'>
            <h4>Ammo Types Chart</h4>
            <button aria-labelledby='ammo-type-chart-sect' type='submit' className='dropdown' onClick={handleDropDown} disabled={loading}>
              {dropDown.icon}
            </button>
            <div style={{ display: dropDown.isOpen ? 'block' : 'none' }}>
              {ammoError && <p aria-labelledby='ammo-type-chart-sect' className='text-danger'>{ammoError}</p>}
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
                    <tr key={[type.ammo_name, type.caliber]}>
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
        <ScrollTo ariaLabel='scroll to top' className='scroll-to to-top'
          icon={<FaAngleUp />} sectionID='top' />
      </main>
    </div>
  )
}

export default ProtectedPage