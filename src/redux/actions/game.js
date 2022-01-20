import { gameActions } from '../../utils/constants';
import { gameServices } from './../../services/game.service';

export const shuffleCard = () => dispatch => {
  gameServices
  .shuffleCard()
  .then(data => {
    dispatch({ type: gameActions.SET_DECK, payload: { deckId: data.deck_id, shuffled: data.shuffled } });
  });
}

export const drawCard = (deckId, cardNumber, balance, amount) => dispatch => {
  gameServices
    .drawCard(deckId)
    .then(data => {
      dispatch({ type: gameActions.IS_DRAWEN, payload: { deckId: data.deck_id, cards: data.cards } });
      dispatch({ type: gameActions.STARTED, started: true });
      dispatch({ type: gameActions.FINISHED, finished: true });

      gameResult(cardNumber, data.cards, balance, amount, dispatch);
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

const gameResult = (i, cards, balance, amount, dispatch) => {
  const playerValue = cards[i]?.value;
  const opponentValue = i === 0 ? cards[1]?.value : cards[0]?.value;
  const result = processGameResult(playerValue, opponentValue);

  dispatch({
    type: gameActions.RESULTED,
    payload: { resulted: true, won: result }
  });
  dispatch({
    type: gameActions.BALANCE_CHANGE,
    balance: result
      ? balance + (Number(amount) * 2)
      : balance - (Number(amount) * 2)
  });
}

const processGameResult = (playerValue, opponentValue) => {
  const values = {
    'ACE': 1,
    'JACK': 11,
    'QUEEN': 12,
    'KING': 13
  }

  let pValue = playerValue, oValue = opponentValue;

  Object.entries(values).forEach(([k, v]) => {
    if (pValue === k) {
      pValue = v;
    } else if (oValue === k) {
      oValue = v;
    }
  });

  return Number(pValue) > Number(oValue);
}