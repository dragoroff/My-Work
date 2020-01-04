import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/reducers';
import { middlewares } from '../src/store';

/**
 * Create a testing store with imported reducers, middleware and initial state.
 * @function storeFactory
 * @param {object} initialState 
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
    const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddlewares(rootReducer, initialState);
}


/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}


export const checkProps = (component, conformingProps) => {
    const propsError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
    expect(propsError).toBeUndefined();
}