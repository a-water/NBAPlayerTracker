import NBA from 'nba';

export const FIND_PLAYER = 'findPlayer';

export function setPlayer(request) {
    return {
    type: FIND_PLAYER,
    payload: request
  };
}