import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from './ErrorPage';

it('should match the snapshot', () => {
  const wrapper = shallow(<ErrorPage error="Failed!" />);
  expect(wrapper).toMatchSnapshot();
});
