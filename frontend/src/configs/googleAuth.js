import api from './api';

// Send Google auth code to backend
export const googleAuth = (code) => {
  return api.get(`/api/users/google?code=${code}`);
};
