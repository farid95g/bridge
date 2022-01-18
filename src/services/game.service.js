import axios from "axios";
import { BASE_URL } from "./config";

export const gameServices = {
  drawCard() {
    return axios.get(`${BASE_URL}/new/draw/?count=2`)
      .then(response => response.data);
  }
}