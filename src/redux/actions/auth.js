import { authActions } from '../../utils/constants';
import { authServices } from '../../services/auth.service';
import { LocalStorageServices } from '../../services/localstorage.service';

export const login = (username, password) => (dispatch) => {
  const isAuth = authServices.login(username, password);

  LocalStorageServices.set('isAuth', isAuth);
  dispatch({ type: authActions.SET_LOGGED_IN, isAuth });
};
