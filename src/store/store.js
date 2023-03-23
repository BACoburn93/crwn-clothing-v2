// import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'; // Imports configureStore from @redux/toolkit
import logger from 'redux-logger'; // import logger from redux-logger

import { rootReducer } from './root-reducer';

// const middleWares = [logger]; // Needed if using createStore

// const composedEnhancers = compose(applyMiddleware(...middleWares)); // Needed if using createStore

export const store = configureStore({ // sets the store as aconfigureStore function imported from toolkit which takes in an object
    reducer: rootReducer, // Sets the reducer to be the rootReducer, where all of the reducers will be defined
    middleware: [logger] // Sets the middleware to be the logger from redux-logger so we can see what is oging on behind the scenes
});



