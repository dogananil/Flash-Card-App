import{
  CARD_UPDATE,
  CARD_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  question: '',
  answer: ''

};

export default (state=INITIAL_STATE, action) => {
  switch(action.type){
    case CARD_UPDATE:
      return{...state, [action.payload.prop]: action.payload.value};
    case CARD_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
