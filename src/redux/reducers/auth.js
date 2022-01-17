import { authActions } from '../../utils/constants';

const initialState = {
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActions.SET_LOGGED_IN:
      return {
        ...state,
        isAuth: action.isAuth,
      };

    default:
      return state;
  }
};
