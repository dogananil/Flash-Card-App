import{
  DECK_UPDATE,
  DECK_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  title: '',

};

export default (state=INITIAL_STATE, action) => {
  switch(action.type){
    case DECK_UPDATE:
      return{...state, [action.payload.prop]: action.payload.value};
    case DECK_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
