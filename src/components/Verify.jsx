// function verifies if a username and authorized JWT token is found in local storage
const verifyToken = async () => {
  const token = localStorage.getItem('token');

  if (!token) {
    localStorage.clear();
    return false;
  };
  try {
    const response = await fetch(`http://localhost:8000/auth/verify-token/${token}`);
    if (!response.ok) {
      throw new Error('Token verification failed');
    };
  } catch (error) {
    localStorage.clear()
    return false;
  };
  return true;
};

export default verifyToken;