import { authActions } from '../../utils/constants';
import { authServices } from '../../services/auth.service';
import { LocalStorageServices as ls } from '../../services/localstorage.service';

export const login = (username, password) => (dispatch) => {
  const isAuth = authServices.login(username, password);
  ls.set('isAuth', isAuth);
  
  dispatch({ type: authActions.SET_LOGGED_IN, payload: { isAuth, error: !isAuth } });
};

export const isLogged = () => dispatch => {
  const isAuth = ls.get('isAuth');
  dispatch({ type: authActions.SET_LOGGED_IN, isAuth });
}

export const signOut = () => dispatch => {
  ls.set('isAuth', false);
  dispatch({ type: authActions.SET_LOGGED_IN, payload: { isAuth: false } });
}

export const hasError = (isAuth) => dispatch => {
  dispatch({ type: authActions.HAS_ERROR, error: !isAuth });
}