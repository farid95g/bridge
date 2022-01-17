import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth';
import { gameReducer } from './reducers/game';

const reducers = combineReducers({
  authReducer,
  gameReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));
