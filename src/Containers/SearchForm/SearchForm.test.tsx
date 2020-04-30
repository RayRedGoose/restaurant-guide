/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchForm from './SearchForm';
import { addSearchFilter, removeSearchFilter } from 'redux_utils/actions';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

jest.mock('redux_utils/actions');

describe("SearchForm", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(<SearchForm />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update input state when change event occur', () => {
    const input = wrapper.find('input');
    expect(input.getDOMNode().value).toEqual('');

    input.simulate('change', {
      target: { value: 'hi!' }
    });
    expect(input.getDOMNode().value).toEqual('hi!');
  });

  it('should removeSearchFilter when change event fired with empty value', () => {
    const input = wrapper.find('input');
    input.simulate('change', {
      target: { value: '' }
    });
    expect(removeSearchFilter).toHaveBeenCalled();
  });

  it('should addSearchFilter when form is submitted', () => {
    wrapper.find('input').simulate('change', {
      target: { value: 'query' }
    });
    wrapper.find('form').simulate('submit');
    expect(addSearchFilter).toHaveBeenCalledWith('query');
  });

  it('should addSearchFilter when submit button is clicked', () => {
    wrapper.find('input').simulate('change', {
      target: { value: 'query' }
    });
    wrapper.find('button').simulate('click');
    expect(addSearchFilter).toHaveBeenCalledWith('query');
  });
});
