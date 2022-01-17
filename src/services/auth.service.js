import { authData } from '../data/authData';

export const authServices = {
  login(username, password) {
    if (username === authData.username && password === authData.password) {
      return true;
    }
    return false;
  },
};
