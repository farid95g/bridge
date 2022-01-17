import { authActions } from '../../utils/constants';

const initialState = {
  isAuth: false,
  error: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActions.SET_LOGGED_IN:
      return {
        ...state,
        ...action.payload
      };
    
    case authActions.HAS_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
