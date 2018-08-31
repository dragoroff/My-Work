import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Reducer from "./reducers";
// import reduxPromise from 'redux-promise';
import async from './middlewares/async';
import validation from './middlewares/typeValidation';

export default ({children, initialState = {}}) => {
  const store = createStore(Reducer, initialState, applyMiddleware(async, validation))
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
