import {combineReducers} from 'redux';
import commentsReducer from './comment';
import authReducer from './changeAuth';

export default combineReducers({
    comments: commentsReducer,
    auth: authReducer
});