import { gameActions } from '../../utils/constants';
import { gameServices } from './../../services/game.service';

export const shuffleCard = () => dispatch => {
  gameServices
  .shuffleCard()
  .then(data => {
    dispatch({ type: gameActions.SET_DECK, payload: { deckId: data.deck_id, shuffled: data.shuffled } });
  });
}

export const drawCard = (deckId) => dispatch => {
  gameServices
    .drawCard(deckId)
    .then(data => {
      console.log(data);
      dispatch({ type: gameActions.IS_DRAWEN, payload: { deckId: data.deck_id, cards: data.cards } });
    })
}

export const startGame = () => dispatch => {
  dispatch({ type: gameActions.STARTED, started: true });
}

export const gameOver = () => dispatch => {
  dispatch({ type: gameActions.FINISHED, finished: true });
}

export const reShuffleCard = (deckId) => dispatch => {
  gameServices
    .reShuffleCard(deckId)
    .then(data => {
      dispatch({ type: gameActions.SHUFFLED, payload: { shuffled: data.shuffled, cards: [] } });
    });
}

export const playAgain = () => dispatch => {
  dispatch({ type: gameActions.STARTED, started: false });
  dispatch({ type: gameActions.FINISHED, finished: false });
  drawCard();
}