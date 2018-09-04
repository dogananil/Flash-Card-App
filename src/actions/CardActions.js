import{
  CARD_UPDATE,
  CARD_CREATE,
  CARD_FETCH_SUCCESS
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const CardUpdate=({ prop, value }) => {
  return {
    type: CARD_UPDATE,
    payload: { prop, value }
  };
};
export const cardCreate = ({question, answer, title}) => {
  console.log(title);
  return (dispatch) => {
  firebase.database().ref(`/decks/${title}/questions`)
    .push({question,answer})
    .then(() => {
    dispatch({type: CARD_CREATE})
    Actions.main({type: 'reset'})
    });
  };
};
export const cardFetch = (data) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/decks/${data}/questions`)
      .on('value', snapshot => {
        dispatch({ type: CARD_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};
