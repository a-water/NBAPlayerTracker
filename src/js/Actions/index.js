import NBA from 'nba';
import axios from 'axios';

export const FIND_PLAYER = 'findPlayer';

export function findPlayer(player) {

  const url = `/find_player`;
  const request = axios.get(url);

  return {
    type: FIND_PLAYER,
    payload: request
  };
}