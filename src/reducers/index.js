
import { combineReducers } from 'redux';
import DeckReducer from './DeckReducer';
import DeckFormReducer from './DeckFormReducer';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './AuthReducer';
import CardFormReducer from './CardFormReducer';

export default combineReducers({
  libraries: DeckReducer,
  SelectedDeckId: SelectionReducer,
  deckForm: DeckFormReducer,
  cardForm: CardFormReducer,
  auth: AuthReducer
});
