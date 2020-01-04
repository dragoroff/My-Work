import { combineReducers } from 'redux';
import { successReducer } from './successReducer';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';

export default combineReducers({
    success: successReducer,
    guessedWords,
    secretWord,
})