import api from '../api';
import Cookies from 'js-cookie';

export const getCookie = (cookieName) => {
  try {
    const cookie = Cookies.get(cookieName);
    return cookie;
  } catch (error) {
  };
}

export const setCookie = (cookieName, cookieData) => {
  try {
    Cookies.set(cookieName, cookieData, {
      secure: true,
      sameSite: 'strict',
      path: '/',
    })
  } catch (error) {
  };
}

export const clearCookie = (cookieName) => {
  Cookies.remove(cookieName, { path: '/' });
}

// function verifies if a username and authorized JWT token is found in local storage
const verifyToken = async () => {
  const token = Cookies.get('token');
  if (!token) {
    return false;
  };
  try {
    await api.get(`/auth/verify-token/${token}`);
    return true;
  } catch (error) {
    clearCookie('token');
    clearCookie('username');
    console.log(error);
    return false;
  };
};

export default verifyToken;