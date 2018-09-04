const INITIAL_STATE = {
  title: '',

};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'select_deck':
      return action.payload;
    default:
      return state;
  }
};
