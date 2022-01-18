import { gameActions } from '../../utils/constants';

const initialState = {
  cards: [],
  started: false,
  finished: false
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case gameActions.IS_DRAWEN:
      return {
        ...state,
        ...action.payload
      }
    
    case gameActions.STARTED:
      return {
        ...state,
        started: action.started
      }
    
    case gameActions.FINISHED:
      return {
        ...state,
        finished: action.finished
      }

    default:
      return state;
  }
};
