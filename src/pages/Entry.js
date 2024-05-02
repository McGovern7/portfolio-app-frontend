import React, { useState, useEffect } from 'react'
import api from '../api'
import Navbar from '../components/Navbar'
import '../components/components.css'
import './pages.css'

const Entry = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    ammo_name: '',
    caliber: '',
    ammo_amount: 0,
    user_id: 2
  });

  // get all of the entries from the FastAPI application
  const fetchEntries = async () => {
    const response = await api.get('/entries/1');
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
    event.preventDefault(); // prevent default of removing everything with fetch and submit api
    await api.post('/entries/', formData);
    fetchEntries(); // recall all the entries so app is always up to date
    setFormData({
      ammo_name: '',
      caliber: '',
      ammo_amount: 0,
      user_id: 1
    });
  };
  // marginbottom-3 & margintop-3
  return ( // react can only return one element
    <div className='main-page'>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div className='container entry'>
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

            <div className='mb-3'>
              <label htmlFor='user_id' className='form-label'>
                User ID
              </label>
              <input type='number' className='form-control' id='user_id' name="user_id" onChange={handleInputChange} value={formData.user_id} />
            </div>

            <button type='submit' className='btn btn-primary mb-3'>
              Submit

            </button>

          </form>
        </div>
        <div className='entry-table border border-dark' >
          <h4>username's Ammo Storage</h4>
          <table className='table table-striped table-bordered table-hover border-dark'>
            <thead className='table-dark'>
              <tr>
                <th>Ammo Name</th>
                <th>caliber</th>
                <th>Ammo Amount</th>
                <th>User ID</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.ammo_name}</td>
                  <td>{entry.caliber}</td>
                  <td>{entry.ammo_amount}</td>
                  <td>{entry.user_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Entry
