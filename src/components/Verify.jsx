// function verifies if a username and authorized JWT token is found in local storage
const verifyToken = async (navigate) => {
  const token = localStorage.getItem('token');

  if (!token) {
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
};

export default verifyToken;