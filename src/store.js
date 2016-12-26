import { createStore, combineReducers, compose } from 'redux';
import { reduxReactFirebase, firebaseStateReducer } from 'redux-react-firebase';

const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
});

const config = {
  apiKey: 'AIzaSyDE-k5mSHBauXLEenA_VhZvpBSJFZ8XgMg',
  authDomain: 'personal-project-3c259.firebaseapp.com',
  databaseURL: 'https://personal-project-3c259.firebaseio.com',
  storageBucket: 'personal-project-3c259.appspot.com',
  messagingSenderId: '100075585149',
};
const createStoreWithFirebase = compose(
    reduxReactFirebase(config),
)(createStore);


export default initialState => createStoreWithFirebase(rootReducer, initialState);
