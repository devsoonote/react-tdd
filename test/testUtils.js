import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/reducers';
import { middlewares } from '../src/configureStore';
export const storyFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState);
}

/*
* Return node(s) with the given data-test attribute.
* @param {ShallowWrapper} wrapper = Enzyme shallow wrapper
* @param {string} val - Value of data - test attribute for search.
* @return {ShallowWrapper}
* */

export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
    )
  expect(propError).toBeUndefined();
}
