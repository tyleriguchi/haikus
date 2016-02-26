import { Map } from 'immutable';

const initialState = Map({
  haiku: ""
});

export default function rootReducer(state = initialState, action) {

  console.log(`Calling ${action.type}...`);
  console.log(action);

  switch (action.type) {
    default:
      return state;

    return state;
  }
}
