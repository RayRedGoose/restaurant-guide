import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from './LoadingPage';

it('should match the snapshot', () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});
