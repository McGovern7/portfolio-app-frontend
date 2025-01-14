import api from '../api';
import Cookies from 'js-cookie';

// function verifies if the username and authorized JWT token Cookie is still valid
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

export const getCookie = (cookieName) => {
  try {
    const cookie = Cookies.get(cookieName);
    return cookie;
  } catch (error) {
  };
}

export const clearCookie = (cookieName) => {
  Cookies.remove(cookieName, { path: '/' });
}

export const verifyToken = async () => {
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
