import { createStore } from 'redux';
import rootReducer from './reducers';
const initialState = {
  meetups: []
};

export const store = createStore(function(state=initialState, action){
  return state;
});
