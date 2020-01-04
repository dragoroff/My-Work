import { getLetterMatchCount } from '../helpers'
import axios from 'axios';

export const actionTypes = {
    CORRECT_GUESS: "CORRECT_GUESS",
    GUESS_WORD: "GUESS_WORD",
    SET_SECRET_WORD: "SET_SECRET_WORD",
};

// /**
//  * @function correctGuess
//  * @returns {object} - Action object with type CORRECT_GUESS
//  */
// export const correctGuess = () => {
//     return {
//         type: actionTypes.CORRECT_GUESS,
//     };
// }


/**
 * Returns Redux Thunk function that dispatches `GUESS_WORD` action and
 * conditionally `CORRECT_GUESS` action.
 * @function guessedWord
 * @param {string} guessedWord
 * @returns {function} - Redux Thunk function. 
 */
export const guessWord = (guessedWord) => (dispatch, getState) => {
    const { secretWord } = getState();
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    dispatch({
        type: actionTypes.GUESS_WORD,
        payload: { guessedWord, letterMatchCount },
    });
    if (guessedWord === secretWord) {
        dispatch({ type: actionTypes.CORRECT_GUESS });
    }
};

export const getSecretWord = () => dispatch => {
    return axios.get('http://localhost:8000').then(res => {
        dispatch({
            type: actionTypes.SET_SECRET_WORD,
            payload: res.data,
        })
    });
}