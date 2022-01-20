import { authData } from '../data/authData';

export const authServices = {
  login(username, password) {
    if (username.toLowerCase() === authData.username.toLowerCase() && password === authData.password) {
      return true;
    }
    return false;
  },
};
