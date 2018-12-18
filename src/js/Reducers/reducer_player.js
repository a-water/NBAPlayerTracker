import { FIND_PLAYER } from '../Actions/index';

export default function(state = [], action) {
  switch(action.type) {

    case FIND_PLAYER:
      return [ action.payload.data, ...state ];
  }

  return state;
}