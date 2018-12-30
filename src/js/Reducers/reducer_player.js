import { FIND_PLAYER } from '../Actions/index';

export default function(state = [], action) {
  switch(action.type) {

    case FIND_PLAYER:
      console.log("action recevied: ", action.payload);
      return [ action.payload.data, ...state ];
  }

  return state;
}