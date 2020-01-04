import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import Thunk from 'redux-thunk';

export const middlewares = [Thunk];
const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddlewares(rootReducer);