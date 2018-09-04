import{
  DECK_UPDATE,
  DECK_CREATE,
  DECK_FETCH_SUCCESS
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const DeckUpdate=({ prop, value }) => {
  return {
    type: DECK_UPDATE,
    payload: { prop, value }
  };
};
export const deckCreate = (title) => {
  var question=' ';
  var answer=' '
  return (dispatch) => {
  firebase.database().ref(`/decks/${title}/questions`)
        .push({question,answer})
        .then(() => {

        dispatch({type: DECK_CREATE})
        Actions.main({type: 'reset'})
    });
  };
};
export const deckFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/decks`)
      .on('value', snapshot => {
        dispatch({ type: DECK_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};
