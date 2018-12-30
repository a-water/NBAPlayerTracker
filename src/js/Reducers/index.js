import { combineReducers } from 'redux';
import PlayerReducer from './reducer_player';

const rootReducer = combineReducers({
  player: PlayerReducer
})

export default rootReducer;