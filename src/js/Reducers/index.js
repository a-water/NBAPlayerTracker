import { combineReducers } from 'redux';
import PlayerReducer from './reducer_player';

const rootReducer = combineReducers({
  playerReducer: PlayerReducer
})

export default rootReducer;