import {RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return Object.assign(nextState, action.items);
    default:
      return nextState;      
  }
}


export default itemsReducer;