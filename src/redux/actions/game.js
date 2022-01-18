import { gameActions } from '../../utils/constants';
import { gameServices } from './../../services/game.service';

export const drawCard = () => dispatch => {
  gameServices
    .drawCard()
    .then(data => {
      dispatch({ type: gameActions.IS_DRAWEN, payload: { cards: data.cards } });
    })
}

export const startGame = () => dispatch => {
  dispatch({ type: gameActions.STARTED, started: true });
}