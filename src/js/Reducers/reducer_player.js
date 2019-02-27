import { SEARCH_PLAYERS } from '../Actions/index';

export default function(state = [], action) {
  switch(action.type) {

    case SEARCH_PLAYERS:
      console.log("action recevied:", action.payload.data);
      return [ action.payload.data, ...state ];
  }

  return state;
}