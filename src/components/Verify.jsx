import api from '../api';

// function verifies if the username and authorized JWT token in localStorage is still valid
const verifyToken = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    localStorage.clear();
    return false;
  };
  try {
    await api.get(`/auth/verify-token/${token}`);
    return true;
  } catch (error) {
    localStorage.clear();
    console.log(error);
    return false;
  };
};

export default verifyToken;