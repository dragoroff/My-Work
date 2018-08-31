import { SAVE_COMMENT, FETCH_COMMENT, CHANGE_AUTH } from './types';
import axios from 'axios';

export const saveComment = (comment) => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export const fetchComment = () => {
    const response = axios.get("https://jsonplaceholder.typicode.com/comments");

    return {
        type: FETCH_COMMENT,
        payload: response
    }
}

export const changeAuth = isAuth => {
    return {
        type: CHANGE_AUTH,
        payload: isAuth
    }
}