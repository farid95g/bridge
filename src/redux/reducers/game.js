import { gameActions } from '../../utils/constants';

const initialState = {
  deckId: '',
  shuffled: false,
  cards: [],
  started: false,
  finished: false,
  result: {
    resulted: false,
    won: false,
    draw: false
  },
  balance: 71429
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case gameActions.SET_DECK:
      return {
        ...state,
        ...action.payload
      }
    
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
    
    case gameActions.RESULTED:
      return {
        ...state,
        result: {
          ...action.payload
        }
      }
    
    case gameActions.BALANCE_CHANGE:
      return {
        ...state,
        balance: action.balance
      }
    
    case gameActions.SHUFFLED:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
};
