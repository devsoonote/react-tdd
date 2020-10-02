import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import Congrats from "./Congrats";

/*
* Factory function to create a ShallowWrapper for the Congrats component.
* @Function setup
* @param {object} props - Component props specific to this setup.
* @returns {ShallowWrapper}
* */
const setup = (props = {}) => shallow(<Congrats {...props} />);

test('render without error', () => {

})
test('render no text when `success` prop is false', () => {

})
test('renders non-empty congrats message when `success` prop is true', () => {

})
