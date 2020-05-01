/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';
import SearchForm from './SearchForm';
import { addSearchFilter, removeSearchFilter, removeAllFilters } from 'redux_utils/actions';

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
    const input = wrapper.find('input[type="text"]');
    expect(input.getDOMNode().value).toEqual('');

    input.simulate('change', {
      target: { value: 'hi!' }
    });
    expect(input.getDOMNode().value).toEqual('hi!');
  });

  it('should call removeSearchFilter when change event fired with empty value', () => {
    const input = wrapper.find('input[type="text"]');
    input.simulate('change', {
      target: { value: '' }
    });
    expect(removeSearchFilter).toHaveBeenCalled();
  });

  it('should call addSearchFilter when form is submitted', () => {
    wrapper.find('input[type="text"]').simulate('change', {
      target: { value: 'query' }
    });
    wrapper.find('form').simulate('submit');
    expect(addSearchFilter).toHaveBeenCalledWith('query');
  });

  it('should call addSearchFilter when submit button is clicked', () => {
    wrapper.find('input[type="text"]').simulate('change', {
      target: { value: 'query' }
    });
    wrapper.find('input[type="submit"]').simulate('click');
    expect(addSearchFilter).toHaveBeenCalledWith('query');
  });

  it('should call removeAllFilters when click button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(removeAllFilters).toHaveBeenCalled();
  });

  it('should clean input value after clean button is clicked', () => {
    const input = wrapper.find('input[type="text"]');
    input.simulate('change', {
      target: { value: 'hi!' }
    });
    expect(input.getDOMNode().value).toEqual('hi!');
    wrapper.find('button').simulate('click');
    expect(input.getDOMNode().value).toEqual('');
  });
});
