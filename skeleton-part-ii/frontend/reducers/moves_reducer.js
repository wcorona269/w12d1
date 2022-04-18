import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const movesReducer = (state={}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type){
    case RECEIVE_SINGLE_POKEMON:
      return Object.assign(nextState, action.pokemon.moves);
    default:
      return nextState; 
  }
}

export default movesReducer;