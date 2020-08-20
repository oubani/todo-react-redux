import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// initial the state
const initialState = {};

// initial the midleware
const midlleware = [thunk];

// intial the store its take three params
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...midlleware))
);

export default store;
