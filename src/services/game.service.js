import axios from "axios";
import { BASE_URL } from "./config";

export const gameServices = {
  shuffleCard() {
    return axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`)
      .then(response => response.data);
  },
  drawCard(deckId) {
    console.log(deckId);
    return axios.get(`${BASE_URL}/${deckId}/draw/?count=2`)
      .then(response => response.data);
  },
  reShuffleCard(deckId) {
    return axios
      .get(`${BASE_URL}/${deckId}/shuffle`)
      .then(response => response.data);
  }
}