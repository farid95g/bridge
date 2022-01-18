import { gameActions } from '../../utils/constants';

const initialState = {
  cards: []
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case gameActions.IS_DRAWEN:
      return {
        ...state,
        ...payload.cards
      }

    default:
      return state;
  }
};