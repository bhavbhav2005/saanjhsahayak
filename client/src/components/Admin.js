import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './Admin.css'; // Import your CSS file

const Admin = () => {
  const [registerType, setRegisterType] = useState('patient');
  const [patientData, setPatientData] = useState({ name: '', age: '', gender: '' });
  const [careData, setCareData] = useState({ username: '', password: '' });
  const [signedUp, setSignedUp] = useState(false);
  const [errorSigningUp, setErrorSigningUp] = useState('');
  const [userId, setUserId] = useState('');

  const handlePatientSubmit = async (e) => {
    e.preventDefault();
    const { name, age, gender } = patientData;
    try {
      const response = await fetch('http://localhost:8080/api/addpatient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age, gender }),
      });
      const responseData = await response.json();
      if (response.ok) {
        toast.success('Patient added successfully!');
        setPatientData({ name: '', age: '', gender: '' });
      } else {
        toast.error(`Failed to add patient: ${responseData.error}`);
      }
    } catch (error) {
      console.error('Error adding patient:', error);
      toast.error('Error adding patient. Please try again.');
    }
  };

  const handleCareSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('http://localhost:8080/api/signup', { ...careData });
      if (resp.data) {
        setUserId(resp.data.userId);
        setSignedUp(true);
        setErrorSigningUp('');
        toast.success('Caregiver added successfully!');
        setTimeout(() => {
          setCareData({ username: '', password: '' });
          setSignedUp(false);
        }, 2000);
      } else {
        setSignedUp(false);
        setErrorSigningUp('Error while adding caregiver');
      }
    } catch (error) {
      console.log('Error while adding caregiver', error);
      setSignedUp(false);
      setErrorSigningUp('Error while adding caregiver');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (registerType === 'patient') {
      setPatientData({ ...patientData, [name]: value });
    } else {
      setCareData({ ...careData, [name]: value });
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-form-container">
        <h2 className="text-2xl mb-4 text-center">
          {registerType === 'patient' ? 'Patient Registration' : 'Caregiver Registration'}
        </h2>
        <div className="flex justify-center mb-4">
          <button
            className={`mx-2 py-2 px-4 rounded ${registerType === 'patient' ? 'btn-gradient' : 'bg-gray-300'}`}
            onClick={() => setRegisterType('patient')}
          >
            Register Patient
          </button>
          <button
            className={`mx-2 py-2 px-4 rounded ${registerType === 'care' ? 'btn-gradient' : 'bg-gray-300'}`}
            onClick={() => setRegisterType('care')}
          >
            Register Caregiver
          </button>
        </div>

        {registerType === 'patient' ? (
          <form onSubmit={handlePatientSubmit}>
            <div className="mb-4">
              <label className="block font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control form-control-sm w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter name"
                value={patientData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1" htmlFor="age">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="form-control form-control-sm w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter age"
                value={patientData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1" htmlFor="gender">
                Gender
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                className="form-control form-control-sm w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter gender"
                value={patientData.gender}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn-gradient w-full py-2 rounded-md hover:bg-gray-900"
            >
              Add Patient
            </button>
          </form>
        ) : (
          <form onSubmit={handleCareSubmit}>
            <div className="mb-4">
              <label className="block font-medium mb-1" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control form-control-sm w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter username"
                value={careData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control form-control-sm w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter password"
                value={careData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn-gradient w-full py-2 rounded-md hover:bg-gray-900"
            >
              Add Caregiver
            </button>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Admin;