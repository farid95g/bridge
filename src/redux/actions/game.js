import { gameActions } from '../../utils/constants';
import { gameServices } from './../../services/game.service';

export const shuffleCard = () => dispatch => {
  gameServices
  .shuffleCard()
  .then(data => {
    dispatch({ type: gameActions.SET_DECK, payload: { deckId: data.deck_id, shuffled: data.shuffled } });
  });
}

export const drawCard = (deckId, cardNumber) => dispatch => {
  gameServices
    .drawCard(deckId)
    .then(data => {
      dispatch({ type: gameActions.IS_DRAWEN, payload: { deckId: data.deck_id, cards: data.cards } });
      dispatch({ type: gameActions.STARTED, started: true });
      dispatch({ type: gameActions.FINISHED, finished: true });

      gameResult(cardNumber, data.cards, dispatch);
    })
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
  dispatch({ type: gameActions.RESULTED, payload: { resulted: false, won: false } });
  drawCard();
}

const gameResult = (i, cards, dispatch) => {
  console.log(cards);
  const playerValue = cards[i]?.value;
  const opponentValue = i === 0 ? cards[1]?.value : cards[0]?.value;
  console.log("player value: ", playerValue);
  console.log("opponent value: ", opponentValue);

  dispatch({
    type: gameActions.RESULTED,
    payload: { resulted: true, won: Number(playerValue) > Number(opponentValue) }
  });
}