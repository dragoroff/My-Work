import React from 'react';
import './App.css';
import hookActions from './actions/hookActions';


const SET_SECRET_WORD = "SET_SECRET_WORD";
/**
 * Reducer to update state called automatically by dispatch
 * @param {object} - existing state
 * @param {object} - action - contains 'type' and 'payload' properties for the state update
 * @return {object} - new state
 */
function reducer(state, action) {
  switch (action.type) {
    case SET_SECRET_WORD:
      return { ...state, secretWord: action.payload };
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = secretWord => dispatch({ type: SET_SECRET_WORD, payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, [])
  return (
    <div
      data-test="component-app"
    />
  );
}

export default App;
