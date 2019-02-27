export const FIND_PLAYER = 'findPlayer';
export const SEARCH_PLAYERS = ' searchPlayers';

// export function findPlayer(request) {
//   return {
//     type: FIND_PLAYER,
//     payload: request
//   };
// }

export function searchPlayers(request) {  
  return {
    type: SEARCH_PLAYERS,
    payload: request
  }
}